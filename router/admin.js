
const express = require('express')
const router = express.Router()
const fs = require('fs')
require('crypto');
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
//collection表
const Collection = require('../database/models/Collection')
//ResumeUpload表
const ResumeUpload = require('../database/models/ResumeUpload')
const jwt = require('jsonwebtoken')
const multer  = require('multer')
const { sequelize } = require('../database/init')
const {Op} = require("sequelize");
//通过职位中的公司名 来查询该公司的信息
router.post('/positioncompanyselect',function (req,res){
    //获取该职位的公司名
    let CompanyName = req.body.CompanyName
    Company.positioncompanyinformation(CompanyName).then(result => {
        // console.log(result['dataValues'])
        res.send(result['dataValues'])
    })
})
//判断该职位是否收藏
router.post('/judgecollection',function (req,res) {
    /*
  * number:所登录账号
  * id：职位信息id
  */
    let number = req.body.number//登录用户账号
    let id = req.body.id //所要判断的职位id
    //查询学生用户id
    Student.findStudentid(number).then(result => {
        //登录用户id
        let student_id = result.id
        //查询该职位是否已经被该用户收藏
        Collection.findCollectionExist(student_id,id).then(result => {
            /*
            * code为0表示该职位未被收藏
            * code为1表示该职位已被收藏
            */
            if (result){
                res.send({
                    msg:'该职位已被收藏',
                    code:1
                })
            }else {
               res.send({
                   msg:'该职位未被收藏',
                   code:0
               })
            }
        })
    })
})
//取消收藏
router.post('/cancelcollection',function (req,res) {
    /*
   * number:所登录账号
   * id：要取消的职位信息id
   * */
    let number = req.body.number//登录用户账号
    let id = req.body.id //所要收藏的职位id
    Student.findStudentid(number).then(result =>{
        let student_id = result.id//登录用户id
        //删除该账号所收藏的 将要取消收藏的职位信息 （删除一条collection表的信息）
        Collection.CollectionDelete(student_id,id).then(result => {
            res.send({
                msg:'取消收藏成功！',
                code:0
            })
        })
    })
})
//添加收藏
router.post('/addcollection',function (req,res){
    /*
    * number:所登录账号
    * id:要收藏的职位信息id
    * */
    //获取要收藏的职位信息id 以及收藏的用户id
        //通过登录账号number 查询该登录账号的id
    // console.log(req.body.number)
    // console.log(req.body.id)
    let number = req.body.number//登录用户账号
    let id = req.body.id //所要收藏的职位id
    //查询学生用户id
    Student.findStudentid(number).then(result => {
        // console.log(result)//登录用户id
        let student_id = result.id
        //添加用户id 和 职位id到collection表
        //查询该职位是否已经被该用户收藏
    Collection.findCollectionExist(student_id,id).then(result => {
        // console.log(result)
        if (result){
            res.send({
                msg:'该职位已被收藏',
                code:-1
            })
        }else {
            Collection.Collectioncreate(student_id,id).then(() =>{
                // console.log(result)
                res.send({
                    msg:'添加成功',
                    code:0
                })
            })
        }
    })


    })
})
// 所登录账号的已收藏的职位信息
router.post('/collection',function (req,res) {
    //通过登录账号 查询该登录账号的id
    console.log(req.body.number)
    let number = req.body.number
    Student.findStudentid(number).then(result => {
        console.log(result)
        //在收藏表中通过上面查询到的用户id 去查询收藏表中用户对应收藏的职位id
        Collection.findCollectionid(result.id).then(result => {
            console.log(result)
            let list = []
            let result2 = []
            for (let i =0;i <= result.length - 1;i++){
                list[i] = result[i].position_collect_id
                //通过查询到的职位id 到position表中查询其对应id的职位信息
                Position.findPositioncollected(list[i]).then(result => {
                    result2[i] = result
                })
            }
            //得到对应所登录账号的职位收藏信息
            setTimeout(()=>{
                res.send(result2)
            },200)

        })
    })

})
//sex student
router.post('/studentsexman',function (req,res) {
    Student.findStudentSexman().then(result => {
        //返回男性人数
        res.send(result)
    })
})
router.post('/studentsexwoman',function (req,res) {
    Student.findStudentSexwoman().then(result => {
        //返回女性人数
        res.send(result)
    })
})
//查询各专业类型 以及人数
router.get('/selectscale', function (req,res){
    Student.findStudentdepartment().then(result =>{
        let list = []
        let calse = []
        for (let i=0;i <= result.length - 1 ;i++)
        {
            list[i] = result[i].type
            Student.findStudentdepartmentCount(list[i]).then(result1 => {
                calse[i] = result1.rows
            })
        }
        setTimeout(()=> {
            // console.log(calse)
            res.send(calse)
        },100)

    })

})
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



//查询company+publiclecture表（公司与宣讲会）
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
//图片上传
router.post("/upload", upload.single('fr'), (req, res) => {
    // console.log(req.file)
    // console.log(req)
    let name = req.file.filename
    //上传完图片,拼接返回前端图片的查看地址(静态托管的url要设置成这个)
    let imgUrl = 'http://p373196l49.wicp.vip/'+`img/${name}`
    res.send({ err: 0, msg: "ok", imgUrl, name})
})
// --------------简历上传---------------
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
//上传简历文件(返回给客户端url)
        router.post('/upresume', upresume.single('resume'), (req,res) => {
    // console.log(req.file)
    // console.log(file)
    // console.log(req)
    let name = req.file.filename
    let docname = req.file.originalname //文件名
    let resumeUrl = 'http://p373196l49.wicp.vip/'+`resume/${name}`
    res.send({err: 0, msg: "ok", resumeUrl,docname })
})

//--------------------------------
//添加简历信息到数据库
router.post('/resumemessage',function (req,res){
    console.log(req.body)
    //用户账号
    let {number,id} = req.body.DataForm
    let resume_url = req.body.resumeUrl
    // console.log(number)
    // console.log(id)
    Student.findStudentid(number).then(result => {
        // console.log(result.id)//用户id
        //判断该用户是否在该职业已经投递过简历
        let student_id = result.id
        ResumeUpload.findResumeUploadExist(student_id,id).then(result => {
            if (result){
                res.send({
                    code:-1,
                    msg:'该职位你已投递过简历'
                })
            }else{
                //通过position_id查询公司名
                Position.Positionfind({attributes:['CompanyName'],where:{
                    id:id
                    }}).then(result => {
                    // console.log(result.CompanyName)
                    let CompanyName = result.CompanyName
                    //再通过公司名查询公司id
                    Company.Companyfind({attributes:['id'],where:{
                            CompanyName: CompanyName
                        }}).then(result =>{
                            let company_id = result.id
                        console.log(company_id)
                        ResumeUpload.ResumeUploadAdd(student_id,id,resume_url,company_id).then(result => {
                            // console.log(result)
                            res.send({
                                code:0,
                                msg:'简历上传成功'
                            })
                        })
                    })

                })

            }
        })


    })
})
//学生用户查看已投递的职位信息
router.post('/sendedposition',function (req,res){
    let number = req.body.number
    Student.findStudentid(number).then(result => {
            let student_id = result.id//学生用户id
            ResumeUpload.ResumeUploadfindall({where:{
                    student_id:student_id
                }}).then(result => {
                let list = []
                let calse = []
                for (let i = 0; i <= result.length - 1; i++) {
                    list[i] = result[i].position_id
                    Position.Positionfindid(list[i]).then(result =>{
                        // console.log(result)
                        calse[i] = result
                    })
                }
                setTimeout(()=>{
                    res.send(calse)
                },100)
            })

    })

})
//企业查询投递了该公司的职位简历
router.post('/companyresume',function (req,res){
    console.log(req.body.UserName)
    let UserName = req.body.UserName //公司企业登录账号
   //查询该公司的id
    Company.Companyfind({where:{
            UserName:UserName
        }}).then(result =>{
            //获取该公司id
        let company_id = result.id
        //判断该公司是否有投递进来的简历信息
        ResumeUpload.ResumeUploadfindall({where:{
            company_id:company_id
            }}).then(result =>{
                if (!result){
                    res.send({
                        code:-1,
                        msg:'暂无简历投递'
                    })
            }else {
                    let list1 = []
                    let list2 = []
                    // let list= null
                    let id = []
                    for (let i =0 ; i <= result.length - 1;i++){
                        id[i] = result[i].student_id
                        list1[i] = {...result[i]["dataValues"]}
                    }
                    for (let j =0 ;j <= result.length - 1;j++){
                        Student.Studentfindidall(id[j]).then(result => {
                            list2[j] = result[0]
                        })
                    }
                    setTimeout(()=>{
                        // console.log(list)
                        let list = list1.map((item,index) => {
                            return {...item, ...list2[index]['dataValues']};
                        });
                        setTimeout(()=>{
                            res.send(list)
                        },300)


                    },200)


                }
        })
    })
})
//删除本地图片文件
// router.post('/deletepicture', function (req,res) {
//     let name = req.body.response.name
//     // console.log(req.body.response.name)
//     // let allname = req.body
//     console.log(req.body)
//     //修改法人图片
//             fs.unlink('./public/img/'+name + '.png', () => {
//                 res.send({
//                     msg:'删除成功'
//                 })
//             })
//     /**
//      * 因为在点击删除后 其url为空 所以点击确认后直接就在数据库中更改为空
//      * */
//
//
//
// })
//职位表position分页查询
router.post('/examine', function (req, res) {
    Position.findExamine(req.body.offset,req.body.limit).then(result => {
        // console.log(result)
        res.send(result)
    })
})

//职位表（只有少量数据）
router.post('/position',function (req,res) {
    Position.findPositionall({
        attachment:['TitlePosition','CompanyName','Degree','Salary','Welfare','Technology','Duty','Requirement','Region','Number','state']
    }).then(result => {
        res.send(result)
    })
})
//通过职位表的公司名来查询对应的公司表信息
router.post('/positionselectcompany',function (req,res){
    //获取公司名
    // console.log(req.body.CompanyName)
    let PositionCompanyName = req.body.CompanyName
    Company.Companyfind({where:{
        CompanyName: PositionCompanyName
        }}).then(result => {
        console.log(result)
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
//company登录
router.post('/companylogin',function (req,res){
    //在数据库表中查找 'UserName' 'UserPassword'
    let {UserName,UserPassword} = req.body.ruleForm
    console.log(UserName,UserPassword)
    Company.Companyfind({where:{
            UserName:UserName,
            UserPassword:UserPassword
        }}).then(result => {
        console.log(result)
        if (result) {
            //登录成功
            //生成token
            const CompanyToken = jwt.sign({result},"abc")
            // console.log(CompanyToken)
                res.send({
                    code:0,
                    msg:'登录成功',
                    CompanyToken
                })
        }else {
            res.send({
                code:-1,
                msg:'登录失败!'
            })
        }
    })
})
//company注册
router.post('/companyregister',function (req,res) {
    //在数据库中查找请求注册的UserName账号 手机号)是否存在
    // console.log(req.body)
    let{CompanyName,CompanyPerson,UserName,UserPassword} = req.body
    console.log(CompanyName,CompanyPerson,UserName,UserPassword)
    //查询数据库中是否有该注册的账号以及公司
    Company.Companyfind({where:{
            CompanyName: CompanyName,
            UserName: UserName
        }}).then(result => {
        console.log(result)
        if (!result){
            //不存在可以注册
            Company.Companycreateregister(CompanyName,CompanyPerson,UserName,UserPassword).then(() => {
                res.send({
                    code:0,
                    msg:'注册成功！'
                })
            })
        }else {
            // 账号存在
            res.send({
                code:-1,
                msg:'注册失败！ 该账号或公司名可能已被注册'
            })
        }
    })
})
//传入学生登录账号返回该账号的信息
router.post('/studentoneselect',function (req,res){
    let number = req.body.number//获取登录账号
    Student.Studentfind({where:{
        number:number
        }}).then(result => {
        console.log(result)
            res.send(result)
    })

})
// student登录
router.post('/studentlogin',function (req,res) {
    //在数据库表中查找 'number' 'password'
    let {studentname,studentpassword} = req.body.ruleForm
    // let studentname = req.body.number
    // let studentpassword = req.body.password
     Student.findStudentlogin(studentname,studentpassword).then(result => {
         console.log(result)
         let {number,password} = result
         if (number === studentname && password === studentpassword) {
             //生成token
             const studenttoken = jwt.sign({result},"abc")
             // console.log(studenttoken)
             res.send({code:0,msg:'登录成功',studenttoken})
             console.log('登录成功')
         }else{
             res.send({code:-1,msg:'登录失败'})
             console.log('登录失败')
         }

            })
        })
// student注册接口
router.post('/studentregister',function (req,res){
        //在数据库中查找请求注册的number(账号 学号)是否存在
    // console.log(req.body)
    let {name,sex,number,password,phone,department,major} = req.body
    console.log(name,sex,number,password,phone,department,major)
    //查询数据库中是否有该注册的账号
    Student.Studentfind({where:{
        number:number
        }}).then(result => {
        console.log(result)
        //判断该账号是否已注册
        if (!result){
            console.log('可以注册')
            Student.Studentcreate(number,name,sex,phone,password,department,major).then(() => {
                res.send({
                    code:0,
                    msg:'注册成功！'
                })
            })
        }else {
            res.send({
                code:-1,
                msg:'注册失败！ 该账号可能已被注册'
            })
        }
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
    Company.Companycreate(req.body.Icon,req.body.CompanyName,req.body.Sculpture,req.body.CompanyPerson,req.body.UserName,req.body.UserPassword,req.body.Introduce,req.body.CompanyAddress,req.body.CompanyType,req.body.Range,req.body.RegisteredAddress,req.body.Condition,req.body.Time,req.body.Capital,req.body.Website).then(result => {
        console.log(result)
        res.send({
            msg:'添加成功',
            code: 0
        })
    }).catch(err => {
        console.log(err)
        res.send({
            msg:'添加失败',
            code: -1
        })
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
//jfe删除单条信息
router.post('/deletejfe',function (req,res){
    Position.PositionDelete(req.body.TitlePosition,req.body.CompanyName,req.body.Degree,req.body.Salary,req.body.Welfare,req.body.Technology,req.body.Duty,req.body.Region,req.body.Number,req.body.state).then(() => {
        console.log(req.body)
        res.send({
            msg:'删除成功',
            code: 0
        })
    })
})
//student辑修改学生信息(账号不能修改)
router.post('/studentedit',function (req,res){
    Student.Studentupdatestudent(req.body.number,req.body.name,req.body.sex,req.body.phone,req.body.password,req.body.department,req.body.major).then(result => {
        // console.log(result)
        res.send({
            msg:'编辑成功',
            code: 0
        })
    })
})
//admin编辑修改学生信息
router.post('/editstudent', function (req,res) {


    Student.Studentupdate(req.body.id,req.body.number,req.body.name,req.body.sex,req.body.phone,req.body.password,req.body.department,req.body.major).then(result => {
        res.send({
            msg:'编辑成功',
            code: 0
        })
    })

})
//admin修改审核状态adopt refuse
router.post('/adoptrefuse', function (req,res) {
    // console.log(req.body)
    Position.Positionupdate(req.body.TitlePosition,req.body.CompanyName,req.body.Degree,req.body.Salary,req.body.Welfare,req.body.Technology,req.body.Duty,req.body.Region,req.body.Number,req.body.state)
    res.send({
        msg:'编辑成功',
        code: 0
    })
})
//查询通过审核的position
router.post('/adoptposition', function (req,res) {
    Position.Positionadopt().then(result => {
        res.send(result)
        // console.log(result)
    })
})
//查询通过审核的position 分页
router.post('/adoptpositionpage', function (req, res) {
    Position.Positionadoptpage(req.body.offset,req.body.limit).then(result => {
        // console.log(result)
        res.send(result)
    })

})


//查询审核中的position
router.post('/reviewedposition', function (req,res) {
    Position.Positionreviewe().then(result => {
        res.send(result)
    })
})
//查询审核中的position 分页
router.post('/reviewedpositionpage', function (req, res) {
    Position.Positionreviewepage(req.body.offset,req.body.limit).then(result => {
        // console.log(result)
        res.send(result)
    })

})
//查询审核未通过的position
router.post('/failedposition', function (req,res) {
    Position.Positionfailed().then(result => {
        res.send(result)
    })
})
//查询审核未通过的position 分页
router.post('/failedpositionpage', function (req, res) {
    Position.Positionfailedpage(req.body.offset,req.body.limit).then(result => {
        // console.log(result)
        res.send(result)
    })

})
//company编辑修改企业信息
router.post('/companyedit', function (req,res) {
    console.log(req.body)
    Company.Companyupdatecompany(req.body.UserName,req.body.CompanyName,req.body.CompanyPerson,req.body.UserPassword,req.body.Introduce,req.body.CompanyAddress,req.body.CompanyType,req.body.Range,req.body.RegisteredAddress,req.body.Condition,req.body.Time,req.body.Capital,req.body.Website).then(result => {
        console.log(result)
        res.send({
            msg:'编辑成功',
            code: 0
        })
    })

})

//admin编辑修改企业信息
router.post('/editcompany', function (req,res) {
    console.log(req.body)
    Company.Companyupdate(req.body).then(result => {
        console.log(result)
        res.send({
            msg:'编辑成功',
            code: 0
        })
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