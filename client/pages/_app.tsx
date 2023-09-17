import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {io} from "socket.io-client";

export default function App({Component, pageProps}: AppProps) {
    const socket = io("http://localhost:9000");

    socket.on("connect", () => {
        console.log(socket.id, "<<-- socket id");
    });

    socket.on("disconnect", () => {
        console.log(socket.id); // undefined
    });
    return <Component {...pageProps} socket={socket}/>
}
