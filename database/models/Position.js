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
})

//查询position表 all
exports.findPositionall = function () {
    return Position.findAll({
        raw: true,
    })
}


Position.sync().then(() => {
    console.log('position表模型已经同步')
});