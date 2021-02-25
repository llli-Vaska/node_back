const express = require('express')
const router = express.Router()
const fs = require('fs')
//admin表
const Admin = require('../database/models/Admin')
//student表
const Student = require('../database/models/Student')
//position表
const Position = require('../database/models/Position')
//company表
const Company = require('../database/models/Company')
//PublicLecture表
const PublicLecture = require('../database/models/PublicLecture')
//jobfair表
const JobFair = require('../database/models/JobFair')
const jwt = require('jsonwebtoken')
const multer  = require('multer')

//查询jobfair表
router.post('/jfall', function (req,res){
    JobFair.findjfall({
        // attributes:['JobFireTitle','date','address','num1','num2','introductions'],
    }).then(result =>{
        res.send(result)
    })
})
//jobfair表分页查询
router.post('/jf', function (req, res) {
    JobFair.findjf(req.body.offset,req.body.limit).then(result => {
        // console.log(result)
        res.send(result)
    })
})



//查询company+publiclecture表
router.post('/cplall', function (req,res){
    Company.findcplall({
        attachment:['Icon','CompanyName','date','school','address','link','introduction']
    }).then(result =>{
        res.send(result)
    })
})
//company+publiclecture表分页查询
router.post('/cpl', function (req, res) {
    Company.findCpl(req.body.offset,req.body.limit).then(result => {
        // console.log(result)
        res.send(result)
    })
})


//添加publiclecture表（宣讲）
router.post('/addpl', function (req,res) {
    console.log(req.body)
    PublicLecture.PublicLecturecreate(req.body.CompanyId,req.body.date,req.body.school,req.body.address,req.body.link,req.body.introduction).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    res.send({
        msg:'发布成功',
        code:0
    })
})
//添加jobfair表（招聘）
router.post('/addjf',function (req,res) {
    console.log(req.body)
    JobFair.JobFaircreate(req.body.JobFireTitle,req.body.date,req.body.address,req.body.num1,req.body.num2,req.body.introduction).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    res.send({
        msg:'发布成功',
        code:0
    })
})


//对上传的文件进行配置
// 配置磁盘引擎
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        //    指定文件存放路径
        cb(null, "./public/img")
    },
    filename: function(req, file, cb) {
        // 指定文件名,先获取扩展,随机生成文件名保存给保存文件的方法
        //获取文件扩展名
        let exts = file.originalname.split(".")
        let ext = exts[exts.length - 1] //为了防止上传图片时,图片的名称中含多个点,从后面取最后一个解决问题
        let tmpname = Date.now() + parseInt(Math.random() * 9999) //时间戳+随机数生成文件名
        cb(null, `${tmpname}.${ext}`)
    }
})
// 使用磁盘引擎的配置调用方法
let upload = multer({ storage: storage })
// 上传文件路由,使用single 方法接收前端 图片的name属性是'logo'的图片,保存到req.file
router.post("/upload", upload.single('fr'), (req, res) => {
    // console.log(req.file)
    // console.log(req)
    let name = req.file.filename
    //上传完图片,拼接返回前端图片的查看地址(静态托管的url要设置成这个)
    let imgUrl = 'http://p373196l49.wicp.vip/'+`img/${name}`
    res.send({ err: 0, msg: "ok", imgUrl, name})
})
// -----------------------------
let resumestorage = multer.diskStorage({
    destination: function(req, file, cb) {
        //    指定文件存放路径
        cb(null, "./public/resume")
    },
    filename: function(req, file, cb) {
        // 指定文件名,先获取扩展,随机生成文件名保存给保存文件的方法
        //获取文件扩展名
        let exts = file.originalname.split(".")
        let ext = exts[exts.length - 1] //为了防止上传图片时,图片的名称中含多个点,从后面取最后一个解决问题
        let tmpname = Date.now() + parseInt(Math.random() * 9999) //时间戳+随机数生成文件名
        cb(null, `${tmpname}.${ext}`)
    }
})
let upresume = multer({ storage: resumestorage })
//上传简历文件
router.post('/upresume', upresume.single('resume'), (req,res) => {
    console.log(req.file)
    console.log(req)
    let name = req.file.filename
    let resumeUrl = 'http://p373196l49.wicp.vip/'+`resume/${name}`
    res.send({err: 0, msg: "ok", resumeUrl, name})
})
//--------------------------------

//删除本地图片文件
router.post('/deletepicture', function (req,res) {
    let name = req.body.response.name
    // console.log(req.body.response.name)
    fs.unlink('./public/img/'+name, function (err) {
        if (err) {
            console.log(err)
        }else {
            console.log('删除成功')
        }

    })
})

//职位表（只有少量数据）
router.post('/position',function (req,res) {
    Position.findPositionall({
        attachment:['TitlePosition','Degree','Salary','Welfare','Technology','Duty','Requirement','Region','Number']
    }).then(result => {
        res.send(result)
    })
})

//公司表
router.post('/company', function (req,res) {
    Company.findCompanyall({
        attachment:['Icon','CompanyName','Sculpture','CompanyPerson','UserName','UserPassword','Introduce','CompanyAddress','CompanyType','Range','RegisteredAddress','Condition','Time','Capital','Website']
    }).then(result => {
        res.send(result)
        // console.log(result)
    })
})

//admin登录
router.post('/adminlogin',function (req,res){
        /*
        * 管理员账号密码（唯一）：
        *   账号：admin
        *   密码：admin
        * */
        //在数据库中查找'adminname','password'
        Admin.findAdmin({
            attachment:['adminname','password']
        }).then(result =>{
            console.log(result)
            let { adminname, adminpassword, admintoken} = result[0]
            console.log('账号：',adminname)
            console.log('密码：',adminpassword)
            console.log('token', admintoken)
            let {username,password,types} = req.body.ruleForm
            console.log(req.body)
            // console.log(types)
            // 判断管理员账号是否正确
            /*状态码 0：正常
            *      -1：异常
            * */
            if (adminname === username  && adminpassword === password && types[0] === '我已阅读并同意用户协议和隐私条款'){
                //生成token
                const token = jwt.sign({result},"abc")
                //若该账号sql中不存在token，则添加token到sql中
                if (!admintoken) {
                    //方法在Admin.js中
                    Admin.Adminupdate(token)
                }
                res.send({code:0,msg:'管理员登录成功',username: adminname,token})
                console.log('管理员登录成功')
            } else{
                res.send({code:-1,msg:'管理员登录失败'})
                console.log('管理员登录失败')
            }
        })
    }
)

//学生用户表单分页查询
router.post('/student', function (req, res) {
    Student.findStudent(req.body.offset,req.body.limit).then(result => {
        // console.log(result)
        res.send(result)
    })
})

//公司表单分页查询
router.post('/companypage', function (req, res) {
    Company.findCompany(req.body.offset,req.body.limit).then(result => {
        // console.log(result)
        res.send(result)
    })

})

//admin添加学生用户
router.post('/addstudent', function (req, res) {
    console.log(req.body)
    Student.Studentcreate(req.body.number,req.body.name,req.body.sex,req.body.phone,req.body.password,req.body.department,req.body.major).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    res.send({
        msg:'添加成功',
        code: 0
    })
})

//admin添加公司企业
router.post('/addcompany', function (req, res) {
    console.log(req.body)
    Company.Companycreate(req.body.Icon,req.body.CompanyName,req.body.Sculpture,req.body.CompanyPerson,req.body.UserName,req.body.UserPassword,req.body.Introduce,req.body.CompanyAddress,req.body.CompanyType,req.body.Range,req.body.RegisteredAddress,req.body.Condition,req.body.Time,req.body.Capital,req.body.Website).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    res.send({
        msg:'添加成功',
        code: 0
    })
})

//admin删除单挑学生用户信息
router.post('/deletestudent', function (req,res) {
    // console.log(req.body)
    Student.StudentDelete(req.body.number,req.body.name,req.body.sex,req.body.phone,req.body.password,req.body.department,req.body.major)
    res.send({
        msg:'删除成功',
        code: 0
    })
})

//admin删除单挑公司信息
router.post('/deletecompany', function (req,res) {

    Company.CompanyDelete(req.body.Icon,req.body.CompanyName,req.body.Sculpture,req.body.CompanyPerson,req.body.UserName,req.body.UserPassword,req.body.CompanyAddress,req.body.CompanyType,req.body.RegisteredAddress,req.body.Condition,req.body.Time,req.body.Capital,req.body.Website).then(() => {
        console.log(req.body)
        res.send({
            msg:'删除成功',
            code: 0
        })
    })

})
//pl删除单条信息
router.post('/deletepl',function (req,res){
    PublicLecture.PublicLectureDelete(req.body.CompanyId,req.body.date,req.body.school,req.body.address,req.body.link,req.body.introduction).then(() => {
        console.log(req.body)
        res.send({
            msg:'删除成功',
            code: 0
        })
    })
})
//jf删除单条信息
router.post('/deletejf',function (req,res){
    JobFair.JobFaireDelete(req.body.JobFireTitle,req.body.date,req.body.address,req.body.num1,req.body.num2,req.body.introduction).then(() => {
        console.log(req.body)
        res.send({
            msg:'删除成功',
            code: 0
        })
    })
})


//admin编辑修改学生信息
router.post('/editstudent', function (req,res) {
    // console.log(req.body)
    Student.Studentupdate(req.body.number,req.body.name,req.body.sex,req.body.phone,req.body.password,req.body.department,req.body.major)
    res.send({
        msg:'编辑成功',
        code: 0
    })
})
//admin编辑修改企业信息
router.post('/editcompany', function (req,res) {
    // console.log(req.body)
    Company.Companyupdate(req.body.Icon,req.body.CompanyName,req.body.Sculpture,req.body.CompanyPerson,req.body.UserName,req.body.UserPassword,req.body.CompanyAddress,req.body.CompanyType,req.body.RegisteredAddress,req.body.Condition,req.body.Time,req.body.Capital,req.body.Website)
    res.send({
        msg:'编辑成功',
        code: 0
    })
})

//查询student 表
router.post('/studentall',function (req,res) {
    console.log(req.body)
    Student.findStudentall({
        attachment:['number','name','sex','phone','password','department','major']
    }).then(result => {
        // console.log(result)
        res.send(result)
    })
})




module.exports = router