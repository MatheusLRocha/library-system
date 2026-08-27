'use client'

import { useRouter } from "next/navigation";
import { deleteUser } from "../api";

type Props = {
    id: string
}

export default function DeleteButton({ id }: Props) {
    const router = useRouter();

    function handleClick() {
        const text = 'Tem certeza que deseja deletar o usuário?'; 
        if (!confirm(text)) {
            return;
        }

        deleteUser(id);

        router.refresh();
    }

    return (
        <button onClick={handleClick} className="bg-red-700 w-20 p-0.5 rounded-md font-bold hover:bg-red-900 transition-all text-white">
            Deletar
        </button>
    );
}