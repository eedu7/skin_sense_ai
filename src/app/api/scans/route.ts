import { hugging_client } from "@/lib/hugging_client";
import { openrouter } from "@/lib/openrouter";
import { NextRequest, NextResponse } from "next/server";

const HF_INFERENCE_MODEL = process.env.HF_INFERENCE_MODEL;
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL;

if (!HF_INFERENCE_MODEL || !OPENROUTER_MODEL) {
    throw new Error("Missing required environment variables: HF_INFERENCE_MODEL or OPENROUTER_MODEL");
}

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const image = formData.get("image") as File | null;

        if (!image) {
            return NextResponse.json(
                { error: "No image provided" },
                { status: 400 }
            );
        }

        // 1. Analyze the image using Hugging Face
        const output = await hugging_client.imageClassification({
            data: image,
            model: HF_INFERENCE_MODEL,
            provider: "hf-inference"
        });

        // 2. Format the diagnosis (User role used to ensure compatibility with all models)
        const explanation = await openrouter.chat.send({
            model: OPENROUTER_MODEL,
            messages: [
                {
                    role: "user",
                    content: `INSTRUCTIONS: 
                    You are a professional yet deeply kind health assistant. Your job is to translate technical skin scan data for a regular person (age 10-50).
                    
                    CRITICAL RULE:
                    If the data suggests a form of cancer (like Melanoma, Basal Cell Carcinoma, etc.), you MUST inform the user clearly but gently. Do not hide the finding, but do not use an alarmist tone.
                    
                    DATA: ${JSON.stringify(output)}
                    
                    HOW TO RESPOND:
                    - If the result is likely benign/safe: "This looks like a common skin feature, but keep an eye on it."
                    - If the result suggests cancer/concern: "The scan has picked up some features that are often seen in [Condition Name]. It is important not to worry, but you should definitely show this to a doctor soon for a professional look."
                    - Always use simple, non-scary words.
                    - Keep it under 3 sentences.
                    - End with a supportive closing.`
                }
            ]
        });

        const messageText = explanation.choices[0].message.content;

        // 3. Simulated processing delay for user trust
        const delay = Math.floor(Math.random() * 2000) + 3000;
        await new Promise((res) => setTimeout(res, delay));

        return NextResponse.json({
            message: messageText ?? "Your scan is complete. For your peace of mind, please share these results with a healthcare professional.",
        });

    } catch (error) {
        console.error("Analysis Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}