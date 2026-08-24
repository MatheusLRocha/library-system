import Link from "next/link";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

type Props = {
    id: string;
}

export default function UserCard({ id }: Props) {
    return (
        <div 
            className="
                flex flex-col 
                gap-4 w-136 
                hover:scale-105
                transition-all 
                rounded-md h-40 
                bg-blue-200/20
                p-2
        ">

            <Link 
                href={`/users/user/${id}`}
                className="
                    flex flex-col 
                    gap-4 w-lg 
                    hover:scale-110 
                    transition-all 
                    rounded-md h-40 
                    self-center
                    bg-white 
                    p-2
            ">
                
                
                <h1 className="relative text-2xl font-bold">User Card</h1>

                <div>
    
                    <h3>
                        <strong>RA:</strong>{}
                    </h3>
                    <h3>
                        <strong>Email:</strong>{}
                    </h3>

                </div>
                
            </Link>
            
            
            <div className="relative left-2 flex gap-4">
                
                <EditButton id='1'/>
                <DeleteButton />
                
            </div>

        </div>
    );
}