'use client'

import { Button } from '@/components/ui/button';
import pdfToText from "react-pdftotext";
import { useState } from 'react';


export default function GeminiPrompt() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');
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
        setAnswer(data.answer);
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
    <div className='flex flex-col'>
      <form onSubmit={handleSubmit} className='flex flex-col'>

        <input type="file" accept="application/pdf" onChange={handleFileUpload} />
          
        <Button type="submit" disabled={loading} >Submit</Button>
      </form>
      {answer && <div className='text-black'>{answer}</div>}
    </div>
  );
}