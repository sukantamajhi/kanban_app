import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {io} from "socket.io-client";

export default function App({Component, pageProps}: AppProps) {
    const socketIo = io("http://localhost:9000");

    socketIo.on("connect", (socket) => {
        console.log(socket.id, "<<-- A user has been connected")
    });

    socketIo.on("disconnect", (socket) => {
        console.log(socket.id);
    });
    return <Component {...pageProps} socket={socket}/>
}
