//招聘会信息
const {Sequelize, sequelize} = require('../init')
//JobFair表

const JobFair = sequelize.define('jobfair', {
    //招聘会标题
    JobFireTitle: {
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
    //具体地址
    address: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //招聘企业数
    num1: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //招聘职位数
    num2: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //招聘会简介
    introduction: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
})
//添加招聘会
exports.JobFaircreate = function (JobFireTitle,date,address,num1,num2,introduction) {
    return JobFair.create({
        JobFireTitle: JobFireTitle,//招聘会标题
        date: date,//起止时间
        address: address,//具体地址
        num1:num1,//招聘企业数
        num2:num2,//招聘职位数
        introduction: introduction//招聘会简介
    })
}





JobFair.sync().then(() => {
    console.log('JobFair表模型已经同步')
});
