// node buffer
// protocol buffer规范编解码
// protocolbuffers  数据协议编码

//
const fs = require("fs");

fs.readFile(
  "fs.js",
  {
    encoding: "utf-8",
  },
  function (err, data) {
    console.log('err', err)
    if (err) return;
    console.log("data", data);
    // console.log('object', Buffer.from(data))
  }
);

// alloc 分配内存空间
const buffer = Buffer.from([1, 2, 3, 4]);
console.log("buffer1", buffer);

buffer.writeInt16BE(1, 0); //低位在前
console.log("buffer2", buffer);
buffer.writeInt16LE(3, 0); // 高位在前
console.log("buffer3", buffer);
