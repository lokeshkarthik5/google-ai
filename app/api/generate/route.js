import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export async function POST(req){
    const model = genAI.getGenerativeModel({model:"gemini-pro"})

    try {
        
        const prompt = req.body.json()

        const result = await model.generate(prompt)
        const response = await result.response
        const text = response.text()

        return NextResponse.json({text})

    } catch (error) {
        return NextResponse.json(error)
    }
}