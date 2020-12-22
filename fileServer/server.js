const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const formidable = require("formidable");
const util = require("util");
const path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/upload", function (req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    if (err) {
      console.error(err.message);
      return;
    }
    
    var saveTo = path.join(__dirname,'temp/', path.basename(files.file.name));
    // 从文件暂存位置创建可读流
    var readStream = fs.createReadStream(files.file.path);
    // 创建可写流
    var writeStream = fs.createWriteStream(saveTo);
    //监听可读流
    readStream.on("data", function (chunk) {
      // 写入数据
      writeStream.write(chunk);
    });
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("received upload:\n\n");

    // This last line responds to the form submission with a list of the parsed data and files.

    res.end(util.inspect({ fields: fields, files: files }));
  });
});
app.listen(2000, function name(params) {
  console.log("server start");
});
