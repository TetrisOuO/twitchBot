const { chat_gpt_api_key } = require("../../../config");
const fetch = require("node-fetch");

async function callChatGPT(message) {
  const apiURL = "https://api.openai.com/v1/chat/completions";

  const requestBody = {
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: message,
      },
    ],
  };

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${chat_gpt_api_key}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    const modelResponse = responseData.choices[0]?.message?.content;

    console.log("Model Response:", modelResponse);
    return modelResponse;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

const userInput = "Who won the world series in 2020?";
callChatGPT(userInput);
