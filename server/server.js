const express = require('express');
const OpenAI = require('openai');
const app = express();
const cors = require('cors');

const openai = new OpenAI({
  apiKey: 'your-api-key-here',  
});

app.use(express.json());
app.use(cors());

app.post('/chat', async (req, res) => {
  try {
    const input = `Provide as much information about ${req.body.prompt} in points, also add links to help them. Also give them the use of it and the subject in which it is being used`;
    const response = await main(input);
    res.json({ output: response });
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/chats', async (req, res) => {
  try {
    const input = `Provide latest steps to solve- ${req.body.prompt} with details and references.`;
    const response = await main(input);
    res.json({ output: response });
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function main(input) {
  const messages = [{ role: "user", content: input }];
  const completions = await openai.chat.completions.create({
    messages: messages,
    model: 'gpt-3.5-turbo',
  });
  return completions.choices[0].message.content;
}

const server = app.listen(9000, () => {
  console.log('Express server is listening on port 9005');
});
