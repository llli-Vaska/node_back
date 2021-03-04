// 用户职位收藏Collection表
const {Op} = require("sequelize");
const {Sequelize, sequelize} = require('../init')
const Collection = sequelize.define('collection',{
    // 学生用户id
    student_id: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    },
    //学生收藏的职位id
    position_collect_id: {
        type: Sequelize.STRING,
        notEmpty: true,
        validateL: {
            notEmpty: true
        }
    }
})
//根据student_id查询position_collect_id
exports.findCollectionid = function (result) {
         return Collection.findAll({
            raw:true,
            attributes:['position_collect_id'],
            where: {
                student_id:result
            }
        })

}



Collection.sync().then(() => {
    console.log('collection表模型已经同步')
});