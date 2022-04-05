import http from "http";
import SocketIO from "socket.io";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";
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
httpServer.listen(3000, handleListen);