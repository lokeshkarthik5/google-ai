import { Montserrat } from "next/font/google"
import { cn } from '@/lib/utils';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/public/Logo.png"
import Image from "next/image";
import Gemini from "@/public/gemini.png"

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
        <Image src={Gemini} alt="Gemini" className="w-[300px] h-[80px] mt-5" />
        </div>
        <div className="mt-20 font-semibold">
        <h2>We use the latest gemini pro model <span className="text-blue-700">To</span> generate</h2>
        <h2>We've given instruction to give you the best result ever</h2>
        </div>
      </div>
      <div className="mb-12 text-xl">
        <h1>What you can do with our platform:</h1>
        <h1>Upload your document in PDF form</h1>
        <h1>Get a summary of the document</h1>
        <h1>Our site gives you insights and even suggests you better terms</h1>

      </div>
    </main>
  );
}



