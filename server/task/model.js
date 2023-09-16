const mongoose = require("mongoose")

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: String,
    comment: [
        { type: string }
    ],
    createdAt: Number,
    updatedAt: Number
})

module.exports = mongoose.model("tasks", taskSchema)