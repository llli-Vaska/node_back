

const {Sequelize, sequelize} = require('../init')
//admins表
const Admin = sequelize.define('admin', {
    adminname: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            //不为空
            notEmpty: true
        }
    },
    adminpassword: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            //不为空
            notEmpty: true
        }
    },
    admintoken: {
        type: Sequelize.STRING,
        notEmpty: false,
        validateL: {
            notEmpty: false
        }
    }
})

// -------------------------
exports.findAdmin = function () {
    return Admin.findAll({raw: true})
}

//admin添加表中token
exports.Adminupdate = function (token) {
    return Admin.update({
        admintoken: token
    },{
        'where':  {'adminname': 'admin','adminpassword': 'admin'}
    })
}

// 注意:如果表已经存在,使用`force:true`将删除该表
Admin.sync().then(() => {
    console.log('admin表模型已经同步')
});