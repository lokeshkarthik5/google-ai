'use client'
import React,{useState} from 'react';

const DashboardPage = () => {

    const [prompt, setPrompt] = useState('')
    const [final,setFinal] = useState('')


    const handleChange = (e) => {
        setPrompt(e.target.value)
    }

    const handleSubmit = async()=>{

        const response = await fetch('/api/generate',{
            method:'POST',
            body:JSON.stringify({prompt}),
            headers:{
                'Content-Type':'application/json'
            }
            
        })

        const data = await response.json()
        setFinal(data)
    }


  return (
    <div className='text-x'>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter prompt" onChange={handleChange} className='text-black' />
        <button type='submit'>Submit</button>
      </form>
        <div className='text-zinc'>
            {final}
        </div>
    </div>
  );
}  
            

export default DashboardPage;