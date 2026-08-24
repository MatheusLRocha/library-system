import { getPost } from "@/src/api";
import Book from "@/src/components/Book";
import UserMenu from "@/src/components/UserMenu";

type User = {
    id: string,
    name: string,
    ra: string,
    email: string,
}

export default async function PageUser({ params }: { params: Promise<{id: string}> }) {
    const { id } = await params;

    const user: User = await getPost(id);

    return (
        <main className="flex flex-1 content-center gap-20 p-2">
            
            <UserMenu title={`${user.name}`}/>

            <div className="flex flex-wrap content-start bg-blue-500/30 w-full rounded-md border-2 border-blue-600 p-3 gap-5">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
            
        </main>
    );
}