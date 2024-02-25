const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');

const app = express();
const port = 9005;
const cors = require('cors');
app.use(cors());
// Initialize OpenAI API with your API key
const openai = new OpenAI('YOUR_API_KEY_HERE');

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to handle user queries and generate AI responses
app.post('/ask', async (req, res) => {
    try {
        const { prompt } = req.body;

        // Construct the input prompt for the AI
        const inputPrompt = `User: ${prompt}\nAI:`;

        // Generate AI response
        const response = await openai.complete({
            engine: 'gpt-3.5-turbo', // Replace 'davinci' with the desired model, e.g., 'text-davinci-002'
            prompt: inputPrompt,
            maxTokens: 150,
            temperature: 0.7,
            topP: 1,
            presencePenalty: 0,
            frequencyPenalty: 0,
            bestOf: 1,
            n: 1,
            stream: false,
            stop: '\n'
        });

        // Extract and send the AI response to the client
        res.json({ response: response.choices[0].text.trim() });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
