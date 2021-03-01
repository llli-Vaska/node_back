const {Sequelize, sequelize} = require('../init')
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
//单条删除
exports.StudentDelete = function (number,name,sex,phone,password,department,major) {
    return Student.destroy({
        where :{
            number: number,
            name: name,
            sex:sex,
            phone: phone,
            password: password,
            department: department,
            major: major
        }
    })
}

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

//查询student表 all
exports.findStudentall = function () {
    return Student.findAll({
        raw: true,
    })
}
//查询student表 login
exports.findStudentlogin = function (number,password) {
    return Student.findOne({
        raw: true,
    },{
        where: {
            number: number,
            password: password
        }
    })
}
//student添加表中token
// exports.Studenttokenupdate = function (number,password,studenttoken) {
//     return Student.update({
//         studenttoken: studenttoken
//     },{
//         'where': {
//             'number': number,
//             'password': password
//         }
//     })
// }
//查询student表 (offset limit)
exports.findStudent = function (offset,limit) {
    return Student.findAll({
        raw: true,
        offset: offset,
        limit: limit
    })
}

//修改student表
exports.Studentupdate = function (id,number,name,sex,phone,password,department,major) {
    return Student.update({
        number: number,
        name: name,
        sex:sex,
        phone: phone,
        password: password,
        department: department,
        major: major
    },{
        'where': {'id' : id }
    })
}

// 分页  跳过指定数量信息 限制数量提取信息
exports.StudentPage = function (offset, limit) {
    return Student.findAll({
        offset: offset,
        limit: limit
    })
}


Student.sync().then(() => {
    console.log('student表模型已经同步')
})