'use client';
import { useState } from 'react';

const DashBoard = () => {
  
  const [text, setText] = useState('');
  const [messages, setMessages] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setMessages(data.text);
  }
  
  return(

    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className='text-black' value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div>
        {messages}
      </div>
    </div>

  )
}

export default DashBoard;