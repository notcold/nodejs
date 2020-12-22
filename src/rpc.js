const net = require("net");
// 多路复用的 rpc 通信
//

const data = {
  1: "a",
  2: "b",
  3: "c",
};
const server = net.createServer((socket) => {
  socket.on("data", function (params) {
    console.log("params", params.toString());
    socket.write(Buffer.from(data[params.toString()]));
  });
});

server.listen("4000");
