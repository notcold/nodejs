const net = require("net");
// rcp 通信
// tcp 沾包，同时发送的数据会自动合并
// 全双工通信标记请求来去区分
const client = new net.Socket({});
client.connect({
  host: "127.0.0.1",
  port: "4000",
});
let count = 1;
client.on("data", function (params) {
  console.log("client", params.toString());
  if (count < 3) {
    count++
    client.write(Buffer.from(`${count}`));
  }
});
client.write(Buffer.from(`${count}`));
