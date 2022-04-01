import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (rep, res) => res.render("home"));
app.get("/*", (rep, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http:localhost:3000`);

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", socket => {
  socket.on("enter_room", (msg, done) => {
    console.log(msg),
    setTimeout(() => {
      done();
    }, 10000);
  });
})

// without socket io 
// const wss = new WebSocket.Server({ server });
// const sockets = [];

// wss.on("connection", (socket) => {
//   sockets.push(socket);
//   socket["nickname"] = "Anon";
//   console.log("Connected to Browser");
//   socket.on("close", () => console.log("Disconnected from the Browser"));
//   socket.on("message", (msg) => {
//     const message = JSON.parse(msg.toString("utf8"));
//     switch (message.type) {
//       case "new_message":
//         sockets.forEach(aSocket => aSocket.send(`${socket.nickname}: ${message.payload.toString("utf8")}`));
//         break;
//       case "nickname":
//         socket["nickname"] = message.payload;
//         break;
//     }
//     // if (message.type === "new_message") {
//     //   sockets.forEach(aSocket => aSocket.send(message.payload.toString("utf8")));
//     // } else if(message.type === "nickname") {
//     //   console.log(message.payload.toString("utf8"))
//     // }
//   });
// });

httpServer.listen(3000, handleListen);