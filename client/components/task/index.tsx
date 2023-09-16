import {io} from "socket.io-client";

const socket = io("http://localhost:9000");

socket.on("connect", () => {
    console.log(socket.id, "<<-- socket id");
});

socket.on("disconnect", () => {
    console.log(socket.id); // undefined
});
const Task = ({socket}) => {
    return (
        <p>Hello world</p>
    )
}

export default Task