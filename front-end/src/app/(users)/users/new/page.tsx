'use client'

import { createUser } from "@/src/api";
import { SubmitEvent, useState } from "react";

export default function PageNewUser() {
    const [name, setName] = useState<string>('');
    const [ra, setRa] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const id = Math.floor(Math.random() * 10) + 1;

        await createUser({
            id: id.toString(),
            name,
            ra,
            email
        });

        resetForm();

        alert('Usuário Cadastrado');
    }

    function resetForm() {
        setName('');
        setRa('');
        setEmail('');
    }

    return (
        <main className="flex justify-center items-center flex-1 content-center gap-20 p-2">

            <div className="w-5xl h-160 bg-blue-500/30 border-2 border-blue-600 p-4 rounded-md">

                <form className="flex flex-col gap-10 p-4" onSubmit={handleSubmit}>

                    <div className="flex flex-col gap-3">

                        <label className="text-white font-bold text-2xl">Nome</label>
                        <input type="text" name="userName" id="userName" required className="bg-blue-300/50 p-1 h-10 rounded-md outline-none focus:border-2  focus:border-blue-200 text-white text-[1.2rem]" onChange={(e) => setName(e.target.value)} value={name}/>

                    </div>

                    <div className="flex flex-col gap-3">

                        <label className="text-white font-bold text-2xl">RA</label>
                        <input type="text" name="userRa" id="userRa" required className="bg-blue-300/50 h-10 rounded-md p-1 outline-none focus:border-2 focus:border-blue-200  text-white text-[1.2rem]" onChange={(e) => setRa(e.target.value)} value={ra}/>

                    </div>

                    <div className="flex flex-col gap-3">

                        <label className="text-white font-bold text-2xl">Email</label>
                        <input type="email" name="userEmail" id="userEmail" required className="bg-blue-300/50 h-10 rounded-md p-1 outline-none focus:border-2  focus:border-blue-200 text-white text-[1.2rem]" onChange={(e) => setEmail(e.target.value)} value={email}/>

                    </div>

                    <div className="flex gap-10 relative">

                        <button className="w-30 h-8 bg-green-400/70 hover:bg-green-700 rounded-md text-[1.2rem] font-bold absolute top-20 right-40 text-white" type="submit">
                            Cadastrar
                        </button>

                        <button className="w-30 h-8 bg-red-400/70 hover:bg-red-700 rounded-md text-[1.2rem] font-bold absolute top-20 right-5 text-white" onClick={resetForm} type="button">
                            Limpar
                        </button>

                    </div>

                </form>

            </div>

        </main>
    );
}