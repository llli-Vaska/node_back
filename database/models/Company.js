//company表
const {Sequelize, sequelize} = require('../init')
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
        unique: true,
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
//PublicLecture 表 宣讲会
const PublicLecture = sequelize.define('publiclecture', {
    //公司名
    CompanyId: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //起止时间
    date: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        },
        get() {
            return this.getDataValue('date').split(',')
        },
        set(val) {
            this.setDataValue('date',val.join('至'))
        }
    },
    //学校
    school: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //具体地址
    address: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //宣讲连接
    link: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //宣讲简介
    introduction: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },

})

const {Op} = require("sequelize");

Company.belongsTo(PublicLecture,{foreignKey:'CompanyName',targetKey:'CompanyId'})
PublicLecture.belongsTo(Company,{foreignKey:'CompanyId',targetKey:'CompanyName'})
//查询company + publiclecture两表相关信息
exports.findcplall = function (){
    return Company.findAll({
        attributes:['Icon','CompanyName'],
        raw:true,
        include:[{
            model: PublicLecture,
            where: {
                CompanyId: {
                    [Op.notLike]: 'null'
                }
            }
        }]
    })
}
//查询company + publiclecture两表相关信息 (offset limit)
exports.findCpl = function (offset,limit) {
    return Company.findAll({
        subQuery: false,
        raw:true,
        offset: offset,
        limit: limit,
        include:[{
            model: PublicLecture,
            subQuery: false,
            where: {
                CompanyId: {
                    [Op.notLike]: 'null'
                }
            },
        }],
        attributes: [
            'Icon','CompanyName',
            [sequelize.col('publiclecture.CompanyId'),'CompanyId'],
            [sequelize.col('publiclecture.date'),'date'],
            [sequelize.col('publiclecture.school'),'school'],
            [sequelize.col('publiclecture.address'),'address'],
            [sequelize.col('publiclecture.link'),'link'],
            [sequelize.col('publiclecture.introduction'),'introduction']
        ],
    })
}






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

//添加公司企业
exports.Companycreate = function (Icon,CompanyName,Sculpture,CompanyPerson,UserName,UserPassword,Introduce,CompanyAddress,CompanyType,Range,RegisteredAddress,Condition,Time,Capital,Website) {
    return Company.create({
        Icon: Icon, //公司图标
        CompanyName: CompanyName, //公司名
        Sculpture: Sculpture, //法人代表头像
        CompanyPerson: CompanyPerson, //法人代表
        UserName: UserName, //账号
        UserPassword: UserPassword, //密码
        Introduce: Introduce, //公司介绍
        CompanyAddress: CompanyAddress, //公司地址
        CompanyType: CompanyType, //公司类型
        Range: Range, //经营范围
        RegisteredAddress: RegisteredAddress, //注册地址
        Condition: Condition, //经营状态
        Time: Time, //成立时间
        Capital: Capital, //注册资本
        Website:Website, //公司网站
    })
}

//修改company表
exports.Companyupdate = function (id,Icon,CompanyName,Sculpture,CompanyPerson,UserName,UserPassword,Introduce,CompanyAddress,CompanyType,Range,RegisteredAddress,Condition,Time,Capital,Website) {
    return Company.update({
        Icon: Icon, //公司图标
        CompanyName: CompanyName, //公司名
        Sculpture: Sculpture, //法人代表头像
        CompanyPerson: CompanyPerson, //法人代表
        UserName: UserName, //账号
        UserPassword: UserPassword, //密码
        Introduce: Introduce, //公司介绍
        CompanyAddress: CompanyAddress, //公司地址
        CompanyType: CompanyType, //公司类型
        Range: Range, //经营范围
        RegisteredAddress: RegisteredAddress, //注册地址
        Condition: Condition, //经营状态
        Time: Time, //成立时间
        Capital: Capital, //注册资本
        Website:Website, //公司网站
    },{
        'where': {'id' : id }
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
