const {Sequelize, sequelize} = require('../init')
// number: '1830630505',
//     name: '王小虎',
//     sex: '男',
//     phone:'15680823501',
//     password:'123456',
//     department: '计算机系',
//     major:'计算机应用技术'
//student表
const Student = sequelize.define('student', {
    number: {
        type: Sequelize.STRING,
        notEmpty :true,
        validateL: {
            //不为空
            notEmpty: true
        }
    },
    name: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            //不为空
            notEmpty: true
        }
    },
    sex: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            //不为空
            notEmpty: true
        }
    },
    phone: {
        type: Sequelize.STRING,
        notEmpty :true,
        validateL: {
            //不为空
            notEmpty: true
        }
    },
    password: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            //不为空
            notEmpty: true
        }
    },
    department: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            //不为空
            notEmpty: true
        }
    },
    major: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            //不为空
            notEmpty: true
        }
    },
    studenttoken: {
        type: Sequelize.STRING,
        notEmpty: false,
        validateL: {
            notEmpty: false
        }
    }

})

//添加用户
exports.Studentcreate = function (number,name,sex,phone,password,department,major) {
    return Student.create({
        number: number,
        name: name,
        sex:sex,
        phone: phone,
        password: password,
        department: department,
        major: major

    })
}

//查询student表
exports.findStudent = function () {
    return Student.findAll({raw: true})
}

Student.sync().then(() => {
    console.log('student表模型已经同步')
})