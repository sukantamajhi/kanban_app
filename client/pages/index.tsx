import Image from 'next/image'
import { io } from "socket.io-client";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: [ 'latin' ] })

const socket = io("http://localhost:9000");

socket.on("connect", () => {
  console.log(socket.id, "<<-- socket id");
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

export default function Home() {
  return (
    <div>Hello world</div>
  )
}
