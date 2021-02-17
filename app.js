const express = require('express')
const path = require("path");
const app = express()
const multer  = require('multer')
const upload = multer({
    dest:'public/img'
})
const port = 3000
const bodyParser = require('body-parser')
//接口
const router = require('./router/admin')

require('./database/init')
require('./database/models/Admin')
require('./database/models/Student')
require('./database/models/Position')
require('./database/models/Company')

app.use('*', function (req, res, next) {
    // 设置请求头为允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 设置服务器支持的所有头信息字段
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // 设置服务器支持的所有跨域请求的方法
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
    // next()方法表示进入下一个路由
    next();
});
// 处理json格式的参数
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(router)
app.listen(port, () => console.log(` listening ${port}......`))