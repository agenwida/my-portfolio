
// import { GoogleGenAI } from "@google/genai";
// import { SYSTEM_INSTRUCTION } from "../constants.tsx";

// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
//   try {
//     const response = await ai.models.generateContent({
//       model: 'gemini-3-flash-preview',
//       contents: [
//         ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: h.parts })),
//         { role: 'user', parts: [{ text: message }] }
//       ],
//       config: {
//         systemInstruction: SYSTEM_INSTRUCTION,
//         temperature: 0.7,
//         topP: 0.9,
//       },
//     });

//     return response.text || "I'm sorry, I couldn't process that request.";
//   } catch (error) {
//     console.error("Gemini Error:", error);
//     return "The assistant is currently unavailable. Please try again later.";
//   }
// }
