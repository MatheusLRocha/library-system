import PageButton from "../components/PageButton";

export default function Home() {
  return (
    <main className="flex flex-1 content-center p-2">
        <div className="flex flex-col gap-10 w-3/4 h-2/4 bg-blue-500/30 border-2 border-blue-600 absolute top-20 left-15 rounded-md p-4 ">
          <h1 className="text-4xl text-white font-bold">HOME</h1>

          <div className="flex gap-3 pl-5">
            <PageButton linkUrl="/users" title="Usuários Cadastrados"/>
            <PageButton linkUrl="/create" title="Cadastrar Usuário"/>
          </div>
        </div>
    </main>
  );
}
