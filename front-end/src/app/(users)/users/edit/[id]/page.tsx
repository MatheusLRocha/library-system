import { getUser } from "@/src/api";
import { CreateUserBody } from "@/src/api";
import FormEdit from "@/src/components/FormEdit";

export default async function PageEditUser({ params }: { params: Promise<{id: string}> }) {
    const { id } = await params;

    const user: CreateUserBody = await getUser(id);

    return (
        <div className="w-5xl h-160 bg-blue-500/30 border-2 self-center border-blue-600 p-4 rounded-md">

            <FormEdit id={id} user={ user }/>

        </div>
    );
}