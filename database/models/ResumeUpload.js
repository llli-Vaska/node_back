//简历投递表
const {Sequelize, sequelize} = require('../init')
const ResumeUpload = sequelize.define('resumeupload',{
    // 学生用户id
    student_id: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    // 投递职业id
    position_id: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    // 简历url
    resume_url: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    // 公司id
    company_id: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
})

exports.ResumeUploadAdd = function (student_id,position_id,resume_url,company_id) {
    return ResumeUpload.create({
        student_id: student_id,
        position_id: position_id,
        resume_url: resume_url,
        company_id:company_id
    })
}
//查询该职位是否已经投递过简历
exports.findResumeUploadExist = function (student_id,position_id) {
    return ResumeUpload.findOne({
        where:{
            student_id:student_id,
            position_id:position_id
        }
    })
}
exports.ResumeUploadfindall = function (e) {
    return ResumeUpload.findAll(e)
}
ResumeUpload.sync().then(() => {
    console.log('ResumeUpload表模型已经同步')
});