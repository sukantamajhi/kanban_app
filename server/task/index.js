const express = require("express")
const { socket } = require("../server")

const taskSocket = () => {
    socket.on("task", (message) => {
        console.log(message, "<<-- message")
    })
}