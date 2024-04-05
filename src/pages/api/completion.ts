// Import necessary dependencies
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import openai from "../../utils/openai"; // Importing openai utility module

// Define handler function for API route
export default async function handler(
  req: NextApiRequest, // Request object
  res: NextApiResponse // Response object
) {
  // Destructure prompt from request body
  const { prompt } = req.body;

  // Check if request method is not POST, return error if true
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Invalid request" });
  }

  // Initialize OpenAI instance with API key from environment variables
  const openaiInstance = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Generate chat completion using OpenAI's GPT-3.5-turbo model
  const chatCompletion = await openaiInstance.chat.completions.create({
    messages: [{ role: "user", content: prompt }], // User's prompt
    model: "gpt-3.5-turbo", // Model to use for completion
  });

  // Extract response from completion result
  const response = chatCompletion.choices[0].message.content;

  // Send response with completed chat message
  res.status(200).json({ response });
}
