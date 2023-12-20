const { Controller } = require('egg');

class KuIndex extends Controller {
    //分页查询
    async getKu() {
        const { ctx } = this
        const { page } = ctx.query
        const { pageSize = '5' } = ctx.request.body || {}
        const res = await ctx.service.ku.getKu({
            page: Number(page),
            pageSize: Number(pageSize)
        })
        ctx.emit(200, res)
    }
    // 删除
    async delKu() {
        const { ctx } = this
        const { body } = ctx.request
        const res = await ctx.service.user.delKu(body.id)
        if (res == 0) {
            return ctx.emit('00', '0', '没有查询到此用户')
        }
        ctx.emit(200, res)
    }
    // 更改
    async upKu() {
        const { ctx } = this
        const { body } = ctx.request
        const res = await ctx.service.ku.upKu(body)
        ctx.emit(200, res)
    }
}

module.exports = KuIndex;