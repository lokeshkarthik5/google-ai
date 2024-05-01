'use client'

import { Button } from '@/components/ui/button';
import pdfToText from "react-pdftotext";
import { useState } from 'react';
import { Montserrat } from "next/font/google"
import { cn } from '@/lib/utils';
import Link from 'next/link';

const monstserrat = Montserrat({
  weight: "600",
  subsets:["cyrillic"]
})

const extra = Montserrat({
  weight: "900",
  style:['normal'],
  subsets:["cyrillic"]
})


export default function GeminiPrompt() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState([]);
  const [paragraph, setParagraph] = useState('');
  const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (response.ok) {
        setAnswer([data.answer]);
      } else {
        setAnswer(`Error: ${data.error}`);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setAnswer('An error occurred');
    }
  };





  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    pdfToText(file)
        .then((text) => {
            setMessage(text);
        })
        .catch((err) => {
            console.error(err);
        });
  };

  return (
    <div className='flex flex-col items-center'>
      <Button className="ml-10 mr-auto mt-5"><Link href='/'>Home</Link></Button>
      <div className={cn("mb-10 mt-10 text-xl font-extrabold",extra.className)}>Upload PDF file and Ai will do the rest</div>
      <form onSubmit={handleSubmit} className='gap-y-10 flex flex-col '>
        <input type="file" accept="application/pdf" onChange={handleFileUpload} />
        <Button type="submit" disabled={loading} >Submit</Button>
      </form>
      {answer && <div className={cn('text-black mt-10 w-[80%] font-bold',monstserrat.className)}>
      
      <div className='bg-zinc-200 p-4' dangerouslySetInnerHTML={{ __html: answer }} />
      </div>}
    </div>
  );
}


//<
          