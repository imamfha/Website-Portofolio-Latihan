
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getGeminiResponse = async (messages: ChatMessage[]) => {
  try {
    const history = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));
    
    const lastMessage = messages[messages.length - 1].content;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: `You are an AI assistant for a professional portfolio website named "Portafo". Help users understand the features, design, and projects shown here. Be professional, sleek, and helpful. ${lastMessage}` }] }
      ]
    });

    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to AI assistant.";
  }
};
