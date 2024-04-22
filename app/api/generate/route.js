import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';


const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export async function POST(request){

  
  const {message} = await request.json();

  try {

    if(!message) return NextResponse.json({ error: "Please provide a message" })


    const model = genAI.getGenerativeModel({model:"gemini-pro"})
    
    const prompt = message + "is the competitor price. Suggest competitive price"
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ answer: text})


  } catch (error) {
    
    return NextResponse.json({ error: error.message })

  }

}