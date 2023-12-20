const { Service } = require('egg')

class user extends Service {
    // 增加
    async addUser(userInfo) {
        const { app } = this
        const list = await app.model.User.create(userInfo)
        return list
    }
    // 删除
    async delUser(id) {
        const { app } = this
        const res = await app.model.User.destroy({
            where: {
                id,
            }
        })
        return res
    }
    // 分页查询
    async getUSer(userInfo) {
        const { app } = this
        const { page, pageSize } = userInfo
        const data = await app.model.User.findAndCountAll({
            order: [['id', 'ASC']],// ASC升序  DESC降序
            limit: pageSize,
            offset: (page - 1) * pageSize
        })
        return {
            data
        }
    }
}
module.exports = user