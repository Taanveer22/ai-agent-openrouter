import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

// ======= TASK 01 =============
async function main() {
  const completion = await openai.chat.completions.create({
    model: "openrouter/free",
    messages: [
      {
        role: "user",
        content:
          "How to build an it service agency now based on web development, graphics design, digital marketing, video editing, ai automaiton?",
      },
    ],
  });

  console.log(completion.choices[0].message.content);
}
// main();

// ======= TASK 02 =============
const analyzeGoal = async () => {
  const goal = "Build an books e-commerce in bangladesh";
  const duration = "30";

  const systemPrompt = `You have completed CSE in honours and completed MBA in masters. You are a founder and developer of an it comapany. Also you have a lot of industry expertness in it business. Give structured, scalable, realistic business deep thoughts and analysis with proper guidance for new comers in it industry.`;

  const userPrompt = `I want to ${goal} in ${duration} days. Create a structured learning plan & execution plan.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "openrouter/free",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.7,
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.log(error);
  }
};

analyzeGoal();
