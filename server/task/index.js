const express = require("express")
const { socket } = require("../server")

const createTask = () => {
    socket.on("task", (message) => {
        console.log(message, "<<-- message")
    })
}