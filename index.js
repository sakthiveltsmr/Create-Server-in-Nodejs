const http = require("http");
// const post = [
//   {
//     id: 1,
//     title: "sakthi",
//     body: "fullstack developer",
//   },
//   {
//     id: 2,
//     title: "siva",
//     body: "web developer",
//   },
// ];
const server = http.createServer((req, res) => {
  res.write("wellcome to NodeJs");
  res.write("iam sakthi");

  res.end("Full stack Developer");
  console.log(req.url);
});
server.listen(3001);
console.log("Server running at port 3001");
