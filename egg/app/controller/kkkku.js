const { Controller } = require('egg');

class KkkkuIndex extends Controller {
    //分页查询
    async getKkkku() {
        const { ctx } = this
        const { page } = ctx.query
        const { pageSize = '5' } = ctx.request.body || {}
        const res = await ctx.service.kkkku.getKkkku({
            page: Number(page),
            pageSize: Number(pageSize)
        })
        ctx.emit(200, res)
    }
}

module.exports = KkkkuIndex;