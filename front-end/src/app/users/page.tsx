import BackButton from "@/src/components/BackButton";
import UserCard from "@/src/components/UserCard";

export default function PageUsers() {
    return (
        <main className="flex flex-col flex-1 relative content-center gap-20 p-2 overflow-hidden">

            <h1 className="text-3xl text-white font-bold relative left-10 top-5">
                Users Page
            </h1>

            <div className="
                flex 
                flex-wrap 
                justify-center 
                self-center 
                bg-blue-500/30 
                border-2 
                border-blue-600 
                p-4 
                rounded-md 
                w-[95%] 
                gap-10
                drop-shadow-2xl
                drop-shadow-black
            ">
                
                <UserCard id={'1'}/>
                <UserCard id={'2'}/>
                <UserCard id={'3'}/>
                <UserCard id={'4'}/>
                <UserCard id={'5'}/>
                
            </div>

            <BackButton linkUrl="/" title="Voltar"/>

        </main>
    );
}