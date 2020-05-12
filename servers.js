var express = require("express");
var app1 = express();
var app2 = express();
var app3 = express();
app1.get("/app1/*", function (req, res) {
  res.send("Hello from Server 1");
});
app2.get("/app2/*", function (req, res) {
  res.send("Hello from Server 2");
});
app3.get("/app3/*", function (req, res) {
  res.send("Hello from Server 3");
});
app1.listen(3001);
app2.listen(3002);
app3.listen(3003);
