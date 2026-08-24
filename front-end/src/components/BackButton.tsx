import Link from "next/link";

type Props = {
    linkUrl: string;
    title: string;
}

export default function HomeButton(data: Props) {
    return (
        <Link href={data.linkUrl} className='
            w-30 h-8
            bg-red-600/70
            border-[1.5px]
            border-red-400
            rounded-md
            text-[1.2rem]
            font-bold
            absolute
            top-20
            right-5
            text-white
            text-center'
        >
            {data.title}
        </Link>
    );
}