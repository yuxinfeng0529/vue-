const { Controller } = require('egg');

class kukuIndex extends Controller {
    //查询
    async fidKuku() {
        const { ctx } = this
        const res = await ctx.service.kuku.fidKuku()
        ctx.emit(200, res)
    }
}

module.exports = kukuIndex;