const fp = require('fastify-plugin')

module.exports = fp(async (fastify, opt, next) => {
    await setTimeout(() => {
        fastify.log.info('pluginOne')
        next()
    }, 10000)
}, {
    name: 'pluginOne'
})