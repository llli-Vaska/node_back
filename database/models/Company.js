//company表
const {Sequelize, sequelize} = require('../init')
// Icon: '', //公司图标
//     CompanyName: '', //公司名
//     Sculpture: '', //法人代表头像
//     CompanyPerson: '', //法人代表
//     UserName: '', //账号
//     UserPassword: '', //密码
//     Introduce: '', //公司介绍
//     CompanyAddress: '', //公司地址
//     CompanyType: '', //公司类型
//     Range: '', //经营范围
//     RegisteredAddress: '', //注册地址
//     Condition: '', //经营状态
//     Time: '', //成立时间
//     Capital: '', //注册资本
//     Website:'', //公司网站
const Company =  sequelize.define('company', {
    //公司图标
    Icon: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //公司名
    CompanyName: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //法人代表头像
    Sculpture: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //法人代表
    CompanyPerson: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //账号
    UserName: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //密码
    UserPassword: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //公司介绍 text
    Introduce: {
        type: Sequelize.TEXT,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //公司地址
    CompanyAddress: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //公司类型
    CompanyType: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //经营范围text
    Range: {
        type: Sequelize.TEXT,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //注册地址
    RegisteredAddress: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //经营状态
    Condition: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //成立时间
    Time: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //注册资本
    Capital: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //公司网站
    Website: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //token
    CompanyToken: {
        type: Sequelize.STRING,
        notEmpty: false,
        validateL: {
            notEmpty: false
        }
    },
})
//查询company表
exports.findCompanyall = function () {
    return Company.findAll({
        raw: true,
    })
}
//查询company表 (offset limit)
exports.findCompany = function (offset,limit) {
    return Company.findAll({
        raw: true,
        offset: offset,
        limit: limit
    })
}


//单条删除
exports.CompanyDelete = function (Icon,CompanyName,Sculpture,CompanyPerson,UserName,UserPassword,CompanyAddress,CompanyType,RegisteredAddress,Condition,Time,Capital,Website) {
    return Company.destroy({
        where :{
            Icon: Icon, //公司图标
            CompanyName: CompanyName, //公司名
            Sculpture: Sculpture, //法人代表头像
            CompanyPerson: CompanyPerson, //法人代表
            UserName: UserName, //账号
            UserPassword: UserPassword, //密码
            // Introduce: Introduce, //公司介绍
            CompanyAddress: CompanyAddress, //公司地址
            CompanyType: CompanyType, //公司类型
            // Range: Range, //经营范围
            RegisteredAddress: RegisteredAddress, //注册地址
            Condition: Condition, //经营状态
            Time: Time, //成立时间
            Capital: Capital, //注册资本
            Website:Website, //公司网站
        }
    })
}


Company.sync().then(() => {
    console.log('company表模型已经同步')
});