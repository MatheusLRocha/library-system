import "../globals.css";
import { Metadata } from "next";
import BackButton from '../../components/BackButton'

export const metadata: Metadata = {
  title: 'Library Home'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="min-h-full flex flex-col gap-5 bg-blue-950">

        <header className="w-[95%] text-2xl flex justify-between font-bold text-white bg-blue-500/30 border-2 border-blue-600 self-center p-2 mt-5 rounded-md">

          <h1>LIBRARY</h1>

          <BackButton linkUrl="/" />

        </header>
        

        <main className="flex justify-center flex-1 gap-10 p-2">
          {children}
        </main>
        
      </body>
    </html>
  );
}
