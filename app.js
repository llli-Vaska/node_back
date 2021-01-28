const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use('*', function (req, res, next) {
    // 设置请求头为允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 设置服务器支持的所有头信息字段
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // 设置服务器支持的所有跨域请求的方法
    res.header("Access-Control-Allow-Methods", "POST,GET");
    // next()方法表示进入下一个路由
    next();
});
//app.use 使用中间件(插件)
//解析表单数据 x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
// 处理json格式的参数
app.use(bodyParser.json())

app.post('/adminlogin',function (req,res){
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
    } else{
        res.send({code:-1,msg:'管理员登录失败'})

    }

}
)

app.listen(port, () => console.log(` listening ${port}......`))