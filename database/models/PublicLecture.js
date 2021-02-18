const {Sequelize, sequelize} = require('../init')
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




//添加发布宣讲活动
exports.PublicLecturecreate = function (CompanyId,date,school,address,link,introduction) {
    return PublicLecture.create({
        CompanyId: CompanyId,//公司名
        date: date,//起止时间
        school: school,//学校
        address: address,//具体地址
        link: link,//宣讲连接
        introduction: introduction//宣讲简介
    })
}



PublicLecture.sync().then(() => {
    console.log('jobfairs表模型已经同步')
});