import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';

const MODEL_NAME = 'gemini-1.5-pro-latest';
const API_KEY = 'AIzaSyA3C7V2Dlq5Kd0Lffe8-hE3mjMVxitaong'; // Ensure you use the correct and secure way to manage API keys

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({model: MODEL_NAME});

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  // This needs to be modified according to the API's expected format
  const safetySettings = {
    safety_categories: [
      // Changed from 'harmCategories' based on typical error feedback
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ],
  };

  try {
    const chat = await model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });
    const result = await chat.sendMessage(prompt);
    console.log(result.text); // Adjust based on actual API response structure
  } catch (error) {
    console.error('Error during chat generation:', error);
  }
}

export default runChat;
