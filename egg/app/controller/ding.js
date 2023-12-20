const { Controller } = require('egg');

class dingIndex extends Controller {
    //查询
    async fidDing() {
        const { ctx } = this
        const res = await ctx.service.ding.fidDing()
        ctx.emit(200, res)
    }

    //分页查询
    async getDing() {
        const { ctx } = this
        const { page } = ctx.query
        const { pageSize = '5' } = ctx.request.body || {}
        const res = await ctx.service.ding.getDing({
            page: Number(page),
            pageSize: Number(pageSize)
        })
        ctx.emit(200, res)
    }
    //增加
    async addDing() {
        const { ctx } = this
        const { body } = ctx.request
        const res = await ctx.service.ding.addDing(body)
        ctx.emit(200, res)
    }
}

module.exports = dingIndex;
