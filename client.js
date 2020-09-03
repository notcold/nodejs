const net = require('net')

const client = new net.Socket({})
client.connect({
    host:'127.0.0.1',
    port:'4000'
})

client.on('data',function (params) {
        console.log('client', params.toString())
})
client.write('test data')