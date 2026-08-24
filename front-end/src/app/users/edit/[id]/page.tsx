import BackButton from "@/src/components/BackButton";

export default function PageEditUser() {
    return (
        <main className="flex flex-col justify-center items-center flex-1 content-center gap-20 p-2">

            <div className="w-5xl h-160 bg-blue-500/30 border-2 border-blue-600 p-4 rounded-md">

                <form className="flex flex-col gap-10 p-4">

                    <div className="flex flex-col gap-3">

                        <label className="text-white font-bold text-2xl">Nome</label>
                        <input type="text" name="userName" id="userName" className="bg-blue-300/50 h-10 rounded-md"/>

                    </div>

                    <div className="flex flex-col gap-3">

                        <label className="text-white font-bold text-2xl">RA</label>
                        <input type="text" name="userRa" id="userRa" className="bg-blue-300/50 h-10 rounded-md"/>

                    </div>

                    <div className="flex flex-col gap-3">

                        <label className="text-white font-bold text-2xl">Email</label>
                        <input type="email" name="userEmail" id="userEmail" className="bg-blue-300/50 h-10 rounded-md"/>

                    </div>

                    <div className="flex gap-10 relative">

                        <button className="
                            w-30 h-8
                            bg-green-400/70
                            border-[1.5px]
                            border-green-700
                            rounded-md
                            text-[1.2rem]
                            font-bold
                            absolute
                            top-20
                            right-40
                            text-white"

                        >
                            Cadastrar
                        </button>
                        <BackButton linkUrl="/" title="Cancelar"/>

                    </div>

                </form>

            </div>

        </main>
    );
}