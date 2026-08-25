'use client'

import { getUsers } from "@/src/api";
import BackButton from "@/src/components/BackButton";
import UserCard from "@/src/components/UserCard";
import { useEffect, useState } from "react";

type User = {
    id: string,
    name: string,
    ra: string,
    email: string,
}

export default function PageUsers() {
    const [users, setUsers] = useState<User[]>();

    async function loadUsers() {
        try {
            setUsers(await getUsers());
        } catch(err) {
            console.log(`Usuários não encontrados: ${err}`);
        }
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <main className="flex flex-col flex-1 relative content-center gap-20 p-2 overflow-hidden">

            <h1 className="text-3xl text-white font-bold relative left-10 top-5">
                Users Page
            </h1>

            <div className="
                flex 
                flex-wrap 
                justify-center 
                self-center 
                content-baseline
                bg-blue-500/30 
                border-2 
                border-blue-600 
                p-4 
                rounded-md 
                w-[95%] 
                h-180
                gap-10
                drop-shadow-2xl
                drop-shadow-black
                overflow-y-auto
                scrollbar-thin
                scrollbar-thumb-blue-600
            ">
                
                {
                    users?.map(user => (
                        <UserCard key={user.id} user={user}/>
                    ))
                }
                
            </div>

            <BackButton linkUrl="/" title="Voltar"/>

        </main>
    );
}