const express = require('express')

const router = express.Router()

router.get('/test',(req, res) => {
    res.send({msg:'123'})
    console.log('123')
})
router.post('/adminlogin',function (req,res){
        /*
        * 管理员账号密码（唯一）：
        *   账号：admin
        *   密码：admin
        * */
        let {username,password,types} = req.body.ruleForm
        console.log(req.body)
        // console.log(types)
        // 判断管理员账号是否正确
        /*状态码 0：正常
        *      -1：异常
        * */
        if (username === 'admin' && password === 'admin' && types[0] === '我已阅读并同意用户协议和隐私条款'){
            res.send({code:0,msg:'管理员登录成功'})
            console.log('管理员登录成功')
        } else{
            res.send({code:-1,msg:'管理员登录失败'})
            console.log('管理员登录失败')
        }

    }
)
module.exports = router