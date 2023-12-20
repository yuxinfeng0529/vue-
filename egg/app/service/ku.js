const { Service } = require('egg')

class kuku extends Service {
    // 分页查询
    async getKu(userInfo) {
        const { app } = this
        const { page, pageSize } = userInfo
        const data = await app.model.Ku.findAndCountAll({
            order: [['id', 'ASC']],// ASC升序  DESC降序
            limit: pageSize,
            offset: (page - 1) * pageSize
        })
        return {
            data
        }
    }
    // 删除
    async delKu(id) {
        const { app } = this
        const res = await app.model.User.destroy({
            where: {
                id,
            }
        })
        return res
    }
    // 更新数据
    async upKu(data) {
        const { app } = this
        const { quantity, id } = data
        const list = await app.model.Ku.update(
            {
                quantity
            },
            {
                where: {
                    id,
                }
            }
        )
        return list
    }
}
module.exports = kuku