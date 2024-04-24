import { Montserrat } from "next/font/google"
import { cn } from '@/lib/utils';
import Link from "next/link";
import { Button } from "@/components/ui/button";

const monstserrat = Montserrat({
  weight: "700",
  subsets:["cyrillic"]
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className={cn("text-3xl w-[550px]",monstserrat.className)}>Legal Contract Summarizer and <span className="text-blue-700">Analyzer</span> </h1>
        <Button className="mt-10"><Link href="/dashboard">Get started</Link></Button>
        <div className="mt-20 font-semibold">
        <h2>Just upload your contract in <span className="text-blue-700">PDF</span> Format</h2>
        <h2>Get Insights about document and we'll even figure out better terms for you</h2>
        </div>
      </div>
    </main>
  );
}

