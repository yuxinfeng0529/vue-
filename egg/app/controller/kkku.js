const { Controller } = require('egg');

class KkkuIndex extends Controller {
    //分页查询
    async getKkku() {
        const { ctx } = this
        const { page } = ctx.query
        const { pageSize = '5' } = ctx.request.body || {}
        const res = await ctx.service.kkku.getKkku({
            page: Number(page),
            pageSize: Number(pageSize)
        })
        ctx.emit(200, res)
    }
}

module.exports = KkkuIndex;