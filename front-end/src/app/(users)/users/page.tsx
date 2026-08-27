import { getUsers } from "@/src/api";
import UserCard from "@/src/components/UserCard";

export default async function PageUsers() {
    const users = await getUsers();

    return (
        <div className="flex flex-wrap justify-center self-center content-baseline bg-blue-500/30 border-2 border-blue-600 p-4 rounded-md w-[95%] h-180 gap-10 drop-shadow-2xl drop-shadow-black overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600">
            
            {
                users?.map(user => (
                    <UserCard key={user.id} user={user}/>
                ))
            }
            
        </div>
    );
}