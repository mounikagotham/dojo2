//import log from 'roarr';
const express = require ('express')
const app = express ()
const pkg = require ('../package.json')
const log = require('./log')

app.get('/', (req, res) => {
    //console.log('someone hit my server')
    let ua = req.get('User-Agent')
    log().info(`${pkg.name} hit`)
    res.send('The microservice two')

    
    //res.send('THIS IS COOLER')
})
const listen = (port, done) => {
  return app.listen(port,done)

} 

module.exports = {
    listen
}