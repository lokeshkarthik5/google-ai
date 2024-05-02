import { Montserrat } from "next/font/google"
import { cn } from '@/lib/utils';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/public/Logo.png"
import Image from "next/image";

const monstserrat = Montserrat({
  weight: "700",
  subsets:["cyrillic"]
})

export default function Home() {
  return (
    <main className={cn("flex min-h-screen flex-col items-center justify-between p-24",monstserrat.className)}>
      <div>
        <div className="flex flex-row">
        <Image src={Logo} alt="Logo" className="w-40 h-40" />
        <h1 className={cn("text-3xl w-[550px] mt-[50px]",monstserrat.className)}>Legal Contract Summarizer and <span className="text-blue-700">Analyzer</span> </h1>
        </div>
        <div className="flex flex-col items-center">
        <Button className="mt-10"><Link href="/dashboard">Get started</Link></Button>
        <h2 className="text-blue-700 mr-0 mt-5">Powered by Google AI</h2>
        </div>
        <div className="mt-20 font-semibold">
        <h2>Just upload your contract in <span className="text-blue-700">PDF</span> Format</h2>
        <h2>Get Insights about document and we'll even figure out better terms for you</h2>
        </div>
      </div>
      <div>
      </div>
    </main>
  );
}



