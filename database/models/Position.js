// 职位position表
const {Sequelize, sequelize} = require('../init')

const Position =  sequelize.define('position', {
    // 职位名称
    TitlePosition: {
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
    // 学历要求
    Degree: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    // 薪资
    Salary: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    // 公司补贴，福利
    Welfare: {
        type: Sequelize.TEXT,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    // 技术要求
    Technology: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    // 岗位职责 // 任职要求
    Duty: {
        type: Sequelize.TEXT,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    // 全国地区
    Region: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    // 招聘人数
    Number: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //审核状态
    state: {
        type: Sequelize.STRING,
        notEmpty: true,
        allowNull: false,
        defaultValue: '申请中'
    }
})

//查询position表 all
exports.findPositionall = function () {
    return Position.findAll({
        raw: true,
    })
}
//查询position表 (offset limit)
exports.findExamine = function (offset,limit) {
    return Position.findAll({
        raw: true,
        offset: offset,
        limit: limit
    })
}
//jfe单条删除
exports.PositionDelete = function (TitlePosition,CompanyName,Degree,Salary,Welfare,Technology,Duty,Region,Number,state) {
    return Position.destroy({
        where :{
            TitlePosition: TitlePosition,//职位名
            CompanyName: CompanyName,//公司名
            Degree: Degree,//学历要求
            Salary: Salary,//薪资
            Welfare: Welfare,//福利待遇
            Technology: Technology,//技术要求
            Duty: Duty,//工作职责
            Region: Region,//公司所在区域
            Number: Number,//招收人数
            state:state//审核状态（0：未通过审核 1：通过审核 2:申请中）
        }
    })
}
//查询通过审核的position
exports.Positionadopt = function () {
    return Position.findAll({
        where: {
            state: '审核通过'
        }
    })
}
//修改position表
exports.Positionupdate = function (TitlePosition,CompanyName,Degree,Salary,Welfare,Technology,Duty,Region,Number,state) {
    return Position.update({
        TitlePosition: TitlePosition,//职位名
        CompanyName: CompanyName,//公司名
        Degree: Degree,//学历要求
        Salary: Salary,//薪资
        Welfare: Welfare,//福利待遇
        Technology: Technology,//技术要求
        Duty: Duty,//工作职责
        Region: Region,//公司所在区域
        Number: Number,//招收人数
        state:state//审核状态（0：未通过审核 1：通过审核 2:申请中）
    },{
        'where': {'TitlePosition': TitlePosition,//职位名
            'CompanyName': CompanyName,//公司名
            'Degree': Degree,//学历要求
            'Salary': Salary,//薪资
            'Welfare': Welfare,//福利待遇
            'Technology': Technology,//技术要求
            'Duty': Duty,//工作职责
            'Region': Region,//公司所在区域
            'Number': Number,//招收人数
             }
    })
}

Position.sync().then(() => {
    console.log('position表模型已经同步')
});