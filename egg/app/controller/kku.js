const { Controller } = require('egg');

class KkuIndex extends Controller {
    //分页查询
    async getKku() {
        const { ctx } = this
        const { page  } = ctx.query
        const { pageSize = '5' } = ctx.request.body || {}
        const res = await ctx.service.kku.getKku({
            page: Number(page),
            pageSize: Number(pageSize)
        })
        ctx.emit(200, res)
    }
}

module.exports = KkuIndex;