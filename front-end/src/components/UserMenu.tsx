import { User } from "../api";

type Props = {
    user: User,
}

export default function UserMenu({ user }: Props) {
    return (
        <div className="flex flex-col bg-blue-500/30 w-md rounded-md border-2 border-blue-600 items-center gap-20 relative">
            
            <h1 className="text-3xl text-white font-bold mt-5">{ user.name }</h1>
            
            <div className="flex flex-col gap-2">
                <h3 className="text-white"><strong>RA:</strong> {user.ra}</h3>
                <h3 className="text-white"><strong>Email:</strong> {user.email}</h3>
            </div>
        </div>
    )
}