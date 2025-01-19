import { NextResponse } from "next/server";
import axios from "axios";

interface ChatRequest {
  message: string;
}

interface OpenAIResponse {
  choices: { message: { content: string } }[];
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body: ChatRequest = await req.json();
    if (!body.message) {
      return NextResponse.json({ message: "Message is required" }, { status: 400 });
    }

    const response = await axios.post<OpenAIResponse>(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: body.message }],
        max_tokens: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return NextResponse.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching response", error: (error as Error).message },
      { status: 500 }
    );
  }
}
