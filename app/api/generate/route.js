import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';


const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export async function POST(request){

  
  const {message} = await request.json();

  try {

    if(!message) return NextResponse.json({ error: "Please provide a message" })


    const model = genAI.getGenerativeModel({model:"gemini-pro"})
    
    const prompt = message + "Summarize the text and provide insights, risks, legality, capacity, contract period, key terms, termination and renewal terms, default terms, important dates and deadlines and suggest better terms in heading and a paragraph form."
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    let formattedText = text.replace(/\n\n/g, '</p><p>');
    formattedText = text.replace(/\n\n/g, '<br></br> ');
    formattedText.replace(/\n/g, '<h2>');
    formattedText = text.replace(/\*\*/g, ':');
    formattedText = text.replace(/\#\#/g, ':');
    formattedText = text.replace(/\*/g, '<br>');
    formattedText = formattedText.replace('<h2>', '<h2>', 1);
    return NextResponse.json({ answer: formattedText})


  } catch (error) {
    
    return NextResponse.json({ error: error.message })

  }

}