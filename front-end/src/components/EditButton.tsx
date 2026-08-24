import Link from "next/link";

export default function EditButton() {
    return (
        <Link href='/users/edit' className="
            bg-green-500 w-20 p-0.5 text-center rounded-md font-bold hover:bg-green-700 transition-all text-white
        ">
            Editar
        </Link>
    );
}