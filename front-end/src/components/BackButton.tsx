import Link from "next/link";

type Props = {
    linkUrl: string;
}

export default function BackButton(data: Props) {
    return (
        <Link href={data.linkUrl} className='w-30 h-8 bg-red-600/70 rounded-md text-[1.2rem] font-bold text-white text-center hover:bg-red-900'>
            voltar
        </Link>
    );
}