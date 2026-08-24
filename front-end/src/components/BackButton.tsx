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
            rounded-md
            text-[1.2rem]
            font-bold
            absolute
            top-20
            right-5
            text-white
            text-center
            hover:bg-red-900
        '>
            {data.title}
        </Link>
    );
}