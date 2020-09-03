const net = require('net')

const server = net.createServer((socket)=>{
    console.log('socket', socket)
    socket.on('data',function (params) {
            console.log('params', params.toString())
            socket.write('恢复')
    })
})

server.listen('4000')