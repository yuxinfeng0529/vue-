const { Controller } = require('egg');

class userIndex extends Controller {
    //增加
    async addUser() {
        const { ctx } = this
        const { body } = ctx.request
        const res = await ctx.service.user.addUser(body)
        ctx.emit(200, res)
    }
    //删除
    async delUser() {
        const { ctx } = this
        const { body } = ctx.request
        const res = await ctx.service.user.delUser(body.id)
        if (res == 0) {
            return ctx.emit('00', '0', '没有查询到此用户')
        }
        ctx.emit(200, res)
    }
    //分页查询
    async getUSer() {
        const { ctx } = this
        const { page } = ctx.query
        const { pageSize = '10' } = ctx.request.body || {}
        const res = await ctx.service.user.getUSer({
            page: Number(page),
            pageSize: Number(pageSize)
        })
        ctx.emit(200, res)
    }
}

module.exports = userIndex;