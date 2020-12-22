import express from "express";

// server创建
const app = express();

app.get("/", function (req, res) {
  res.write("end");
  res.end();
  return res;
});
