const fastify = require('fastify')
const pluginOne = require('./plugin')

const app = fastify({
    logger: process.env.NODE_ENV !== 'production'
})

const middOne = async (req, res, next) => {
    app.log.info('middOne')
    next()
}
const middTwo = async (req, res, next) => {
    app.log.info('middTwo')
    next()
}

app.use(middOne)
app.use(middTwo)
app.use(pluginOne) // fastify plugin as a middleware

app.get('/', async (req, res) => {
    return 'hello fastify'
})

;(async () => {
    app.register(pluginOne)
    await app.ready()
    await app.listen(process.env.PORT||3000)
})()