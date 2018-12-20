var appzip = require('appmetrics-zipkin')({
    host: '51.141.44.34',
    port: 9411,
    serviceName:"microservice-two",
    sampleRate: 1.0
  });


const server = require('./lib/server')
const pkg = require ('./package.json')
const PORT = process.env.PORT || 8001
const log = require('./lib/log')



server.listen(PORT, () => {
    log().info(`${pkg.name}is running on port ${PORT}`)
})

