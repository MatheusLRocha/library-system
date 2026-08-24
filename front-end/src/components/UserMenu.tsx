import Link from "next/link";
import BackButton from "@/src/components/BackButton";

interface Props {
    title: string
}

export default function UserMenu({ title }: Props) {
    return (
        <div className="flex bg-blue-500/30 w-md rounded-md border-2 border-blue-600 justify-center relative">
            
            <h1 className="text-2xl text-white font-bold">{ title }</h1>

            <BackButton linkUrl="/users" title="Voltar"/>
            
        </div>
    )
}