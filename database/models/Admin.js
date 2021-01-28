const {Sequelize, sequelize} = require('../init')

const Admin = sequelize.define('admin', {
    adminname: {
        type: Sequelize.STRING,
        validateL: {
            //不为空
            notEmpty: true
        }
    },
    password: {
        type: Sequelize.STRING,
        validateL: {
            //不为空
            notEmpty: true
        }
    }
})

// 注意:如果表已经存在,使用`force:true`将删除该表
Admin.sync().then(() => {
    console.log('admin表模型已经同步')
});