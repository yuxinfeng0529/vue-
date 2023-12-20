const { Service } = require('egg')

class kuku extends Service {
    // 分页查询
    async getKkku(userInfo) {
        const { app } = this
        const { page, pageSize } = userInfo
        const data = await app.model.Kkku.findAndCountAll({
            order: [['id', 'ASC']],// ASC升序  DESC降序
            limit: pageSize,
            offset: (page - 1) * pageSize
        })
        return {
            data
        }
    }
}
module.exports = kuku