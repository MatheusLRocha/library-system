import BackButton from "@/src/components/BackButton";

export default async function PageEditUser({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <main className="flex justify-center items-center flex-1 content-center gap-20 p-2">

            <div className="w-5xl h-160 bg-blue-500/30 border-2 border-blue-600 p-4 rounded-md">

                <form className="flex flex-col gap-10 p-4">

                    <div className="flex flex-col gap-3">

                        <label className="text-white font-bold text-2xl">Nome</label>
                        <input type="text" name="userName" id="userName" className="bg-blue-300/50 p-1 h-10 rounded-md outline-none focus:border-2 focus:border-blue-200  text-white text-[1.2rem]"/>

                    </div>

                    <div className="flex flex-col gap-3">

                        <label className="text-white font-bold text-2xl">RA</label>
                        <input type="text" name="userRa" id="userRa" className="bg-blue-300/50 h-10 rounded-md p-1 outline-none focus:border-2 focus:border-blue-200 text-white text-[1.2rem]"/>

                    </div>

                    <div className="flex flex-col gap-3">

                        <label className="text-white font-bold text-2xl">Email</label>
                        <input type="email" name="userEmail" id="userEmail" className="bg-blue-300/50 h-10 rounded-md p-1 outline-none focus:border-2 focus:border-blue-200  text-white text-[1.2rem]"/>

                    </div>

                    <div className="flex gap-10 relative">

                        <button className='w-30 h-8 bg-green-400/70 border-[1.5px] border-green-700 rounded-md text-[1.2rem] font-bold absolute top-20 right-40 text-white hover:bg-green-700
                        '>
                            Editar
                        </button>
                        <BackButton linkUrl="/" title="Cancelar"/>

                    </div>

                </form>

            </div>

        </main>
    );
}