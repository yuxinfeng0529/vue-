const { Service } = require('egg')

class kuku extends Service {
        // 查询
        async fidKuku() {
            const { app } = this
            const list = await app.model.Kuku.findAll()
            return list
        }
}
module.exports = kuku