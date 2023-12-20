const { Controller } = require('egg');

class rootIndex extends Controller {
    //查询
    async fidRood() {
        const { ctx } = this
        const res = await ctx.service.root.fidRood()
        ctx.emit(200, res)
    }
    //增加
    async addRoot() {
        const { ctx } = this
        const { body } = ctx.request
        const res = await ctx.service.root.addRoot(body)
        ctx.emit(200, res)
    }
}

module.exports = rootIndex;