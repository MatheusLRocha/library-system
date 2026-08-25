import Link from "next/link";

type Props = {
    id: string;
}

export default function EditButton({ id }: Props) {
    return (
        <Link href={`/users/edit/${id}`} className="bg-green-500 w-20 p-0.5 text-center rounded-md font-bold hover:bg-green-700 transition-all text-white">
            Editar
        </Link>
    );
}