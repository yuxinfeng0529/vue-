const { Service } = require('egg')

class dingid extends Service {
    // 查询
    async fidDingid() {
        const { app } = this
        const list = await app.model.Dingid.findAll()
        return list
    }
    // 增加
    async addDingid(userInfo) {
        const { app } = this
        const list = await app.model.Dingid.create(userInfo)
        return list
    }
}
module.exports = dingid