const express = require("express")

const taskSocket = (socket) => {
  socket.on("task", (message) => {
	console.log(message, "<<-- message")
  })
}
module.exports = taskSocket