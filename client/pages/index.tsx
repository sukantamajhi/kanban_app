import Image from 'next/image'
import {io} from "socket.io-client";

import {Inter} from 'next/font/google'
import Task from "@/components/task";

const inter = Inter({subsets: ['latin']})

export default function Home({socket}) {
    return (
        <Task socket={socket}/>
    )
}
