import { getUser } from "@/src/api";
import Book from "@/src/components/Book";
import UserMenu from "@/src/components/UserMenu";
import type { User } from "@/src/api";

export default async function PageUser({ params }: { params: Promise<{id: string}> }) {
    const { id } = await params;

    const user: User = await getUser(id);

    return (
        <>    
            <UserMenu user={user}/>

            <div className="flex flex-wrap content-start bg-blue-500/30 w-full rounded-md border-2 border-blue-600 p-3 gap-5">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
        </>
    );
}