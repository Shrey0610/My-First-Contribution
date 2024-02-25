import React, { useState, useEffect } from 'react';
import * as openai from 'openai';

const Community = () => {
    const [selectedTopic, setSelectedTopic] = useState('');
    const [aiResponse, setAiResponse] = useState(null);
    const topics = {
        "Communication": {
            "description": "Improve verbal and written communication skills.",
            "resources": ["Books", "Online courses", "Public speaking clubs"],
            "exercises": ["Practice giving presentations", "Write essays or articles"],
        },
        // Add more topics as needed
    };

    // Initialize OpenAI API with your API key
    const openaiApi = new openai.default('Your-OpenAI-API-Key-Here');

    useEffect(() => {
        if (selectedTopic) {
            // Generate AI response based on the selected topic
            openaiApi.complete({
                engine: 'text-davinci-003',
                prompt: `Aspiring to improve ${selectedTopic.toLowerCase()} skills. Provide personalized advice or scenarios.`,
                maxTokens: 100,
                stop: ['\n'],
            }).then((response) => {
                setAiResponse(response.data.choices[0].text.trim());
            }).catch((error) => {
                console.error('Error generating AI response:', error);
            });
        }
    }, [selectedTopic, openaiApi]);

    const handleTopicSelection = (topic) => {
        setSelectedTopic(topic);
        setAiResponse(null); // Reset AI response when selecting a new topic
    };

    return (
        <div>
            <h2>Soft Skills and Professional Development Program</h2>
            <h3>Available Topics:</h3>
            <ul>
                {Object.keys(topics).map((topic, index) => (
                    <li key={index}>
                        <button onClick={() => handleTopicSelection(topic)}>{topic}</button>
                    </li>
                ))}
            </ul>
            {selectedTopic && (
                <div>
                    <h3>{selectedTopic}</h3>
                    <p><strong>Description:</strong> {topics[selectedTopic].description}</p>
                    <p><strong>Resources:</strong></p>
                    <ul>
                        {topics[selectedTopic].resources.map((resource, index) => (
                            <li key={index}>{resource}</li>
                        ))}
                    </ul>
                    <p><strong>Exercises:</strong></p>
                    <ul>
                        {topics[selectedTopic].exercises.map((exercise, index) => (
                            <li key={index}>{exercise}</li>
                        ))}
                    </ul>
                    {aiResponse && (
                        <div>
                            <h3>AI-Generated Advice:</h3>
                            <p>{aiResponse}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Community;
