const message = {
    200:'OK',
    401:'我没写token，所以是别的问题',
    '00':'其他问题'
}

module.exports = Options => {
    return async function resHandler(ctx, next) {
        try {
            ctx.emit = (code, data, msg) => {
                ctx.body = {
                    code,
                    data: data || {},
                    msg: msg || message[code]
                }
            }
            await next()
        } catch (error) {
            const { code = '00', msg, data } = error
            console.log('error', error)
            ctx.body = {
                code,
                data,
                msg: msg || message[code]
            }
        }
    }
}