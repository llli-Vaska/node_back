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
//查询该职位是否已经被该用户收藏
exports.findCollectionExist = function (student_id,position_collect_id) {
    return Collection.findOne({
        where:{
            student_id:student_id,
            position_collect_id:position_collect_id
        }
    })
}
//添加收藏
exports.Collectioncreate = function (student_id,position_collect_id) {
    return Collection.create({
        student_id: student_id,
        position_collect_id: position_collect_id
    })
}
//取消收藏
//单条删除
exports.CollectionDelete = function (student_id,position_collect_id) {
    return Collection.destroy({
        where :{
            student_id: student_id,
            position_collect_id: position_collect_id
        }
    })
}
Collection.sync().then(() => {
    console.log('collection表模型已经同步')
});