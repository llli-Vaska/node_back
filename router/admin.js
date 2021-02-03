const express = require('express')
const router = express.Router()
//admin表
const Admin = require('../database/models/Admin')
//student表
const Student = require('../database/models/Student')
const jwt = require('jsonwebtoken')
//测试
router.get('/test',function (req,res) {
    res.send({
        msg:'123'
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

//学生用户
router.post('/student', function (req, res) {
    Student.findStudent({
        attachment:['number','name','sex','phone','password','department','major']
    }).then(result => {
        console.log(result)
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

//admin删除单挑学生用户信息
router.post('/deletestudent', function (req,res) {
    console.log(req.body)
    Student.StudentDelete(req.body.number,req.body.name,req.body.sex,req.body.phone,req.body.password,req.body.department,req.body.major)
    res.send({
        msg:'删除成功',
        code: 0
    })
})


module.exports = router