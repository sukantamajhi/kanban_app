const express = require("express")
// const http = require("http")
const {createServer} = require('node:http');
const cors = require("cors")
const helmet = require("helmet")
const {Server} = require("socket.io");
const router = require("./routes");
const db = require("./database");
const taskSocket = require("./task")

require("dotenv").config()

const app = express()

const server = createServer(app);
const io = new Server(server, {
  cors: "localhost:3000"
});

app.use(cors())
app.use(helmet())

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", router)

io.on('connection', (socket) => {
  console.log(socket.id, '<<-- a user connected');
  taskSocket(socket)
  socket.on('disconnect', () => {
	console.log('user disconnected');
  });
});


server.listen(process.env.PORT, () => {
  console.log(`################################################
🛡️  Server listening on port: ${process.env.PORT} 🛡️ 
################################################`)
})