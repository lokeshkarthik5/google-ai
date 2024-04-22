'use client'

import { Button } from '@/components/ui/button';
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

  const handleChange = (e)=>{
    e.preventDefault();
    setMessage(e.target.value)
  }

  return (
    <div className='flex flex-col'>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <textarea
          type='text'
          onChange={handleChange}
          placeholder="Enter your prompt here..."
          rows={10}
        />
          
        <Button type="submit" disabled={loading} >Submit</Button>
      </form>
      {answer && <div className='text-black'>{answer}</div>}
    </div>
  );
}