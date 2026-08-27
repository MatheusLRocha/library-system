'use client'

import { SubmitEvent, useState } from "react";
import { CreateUserBody, updateUser } from "../api";

type Props = {
    id: string,
    user: CreateUserBody;
}

export default function FormEdit({ id, user }: Props) {
    const [name, setName] = useState<string>(user.name);
    const [ra, setRa] = useState<string>(user.ra);
    const [email, setEmail] = useState<string>(user.email);

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log('SUBMIT FUNCIONOU');

        const userBody: CreateUserBody = {name, ra, email};

        await updateUser(id, userBody);

        console.log('UPDATE FUNCIONOU');

        alert('Usuário editado com sucesso!');

        resetForm();
    }

    function resetForm() {
        setName('');
        setRa('');
        setEmail('');
    }

    return (
        <form className="flex flex-col gap-10 p-4" onSubmit={handleSubmit}>

            <div className="flex flex-col gap-3">

                <label className="text-white font-bold text-2xl">Nome</label>
                <input type="text" name="userName" id="userName" className="bg-blue-300/50 p-1 h-10 rounded-md outline-none focus:border-2 focus:border-blue-200  text-white text-[1.2rem]" value={name} onChange={(e) => setName(e.target.value)}/>

            </div>

            <div className="flex flex-col gap-3">

                <label className="text-white font-bold text-2xl">RA</label>
                <input type="text" name="userRa" id="userRa" className="bg-blue-300/50 h-10 rounded-md p-1 outline-none focus:border-2 focus:border-blue-200 text-white text-[1.2rem]" value={ra} onChange={(e) => setRa(e.target.value)}/>

            </div>

            <div className="flex flex-col gap-3">

                <label className="text-white font-bold text-2xl">Email</label>
                <input type="email" name="userEmail" id="userEmail" className="bg-blue-300/50 h-10 rounded-md p-1 outline-none focus:border-2 focus:border-blue-200  text-white text-[1.2rem]" value={email} onChange={(e) => setEmail(e.target.value)}/>

            </div>

            <div className="flex gap-10 relative">

                <button className='w-30 h-8 bg-green-400/70 border-[1.5px] border-green-700 rounded-md text-[1.2rem] font-bold absolute top-20 right-40 text-white hover:bg-green-700
                '>
                    Editar
                </button>

                <button className="w-30 h-8 bg-red-400/70 hover:bg-red-700 rounded-md text-[1.2rem] font-bold absolute top-20 right-5 text-white" type="button" onClick={resetForm}>
                    Limpar
                </button>

            </div>

        </form>
    );
}