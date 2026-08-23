import Link from "next/link";

type Props = {
    linkUrl: string,
    title: string
}

export default function PageButton(data: Props) {
    return (
        <Link href={data.linkUrl} className="
            bg-blue-300/30 
            border 
            border-blue-400 
            p-2 rounded-md 
            text-white 
            font-bold 
            hover:bg-blue-300 
            hover:scale-105 
            transition-all
        ">
            {data.title}
        </Link>
    );
}