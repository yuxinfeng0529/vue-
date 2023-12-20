const { Controller } = require('egg');

class dingidIndex extends Controller {
    //查询
    async fidDingid() {
        const { ctx } = this
        const res = await ctx.service.dingid.fidDingid()
        ctx.emit(200, res)
    }
    //增加
    async addDingid() {
        const { ctx } = this
        const { body } = ctx.request
        const res = await ctx.service.dingid.addDingid(body)
        ctx.emit(200, res)
    }
}

module.exports = dingidIndex;