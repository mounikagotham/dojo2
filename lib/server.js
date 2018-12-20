//import log from 'roarr';
const express = require ('express')
const app = express ()
const pkg = require ('../package.json')
const log = require('./log')

app.get('/', async (req, res) => {
    //console.log('someone hit my server')
    //let ua = req.get('User-Agent')
    log().info(`${pkg.name} hit`)
    let data = await request({
        uri: 'http://51.141.38.219/',
        method: 'GET'
    })
    res.send(`Microservice one said : ${data}`)

    
    //res.send('THIS IS COOLER')
})
const listen = (port, done) => {
  return app.listen(port,done)

} 

module.exports = {
    listen
}