const { Service } = require('egg')

class ding extends Service {
    // 查询
    async fidDing() {
        const { app } = this
        const list = await app.model.Ding.findAll()
        return list
    }

    // 分页查询
    async getDing(userInfo) {
        const { app } = this
        const { page, pageSize } = userInfo
        const data = await app.model.Ding.findAndCountAll({
            order: [['id', 'ASC']],// ASC升序  DESC降序
            limit: pageSize,
            offset: (page - 1) * pageSize
        })
        return {
            data
        }
    }
    // 增加
    async addDing(userInfo) {
        const { app } = this
        const list = await app.model.Ding.create(userInfo)
        return list
    }
}
module.exports = ding