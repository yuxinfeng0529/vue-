const { Service } = require('egg')

class root extends Service {
    // 查询
    async fidRood() {
        const { app } = this
        const list = await app.model.Root.findAll()
        return list
    }
    // 增加
    async addRoot(userInfo) {
        const { app } = this
        const list = await app.model.Root.create(userInfo)
        return list
    }

}
module.exports = root