import model from '../config/gemini.js';

export const generateResponse = async (chatHistory, userMessage) => {
    try {
        // Format chat history for Gemini
        const history = chatHistory.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        const chat = model.startChat({
            history: history,
        });

        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        if (!response || !response.text) {
            throw new Error('AI response was empty or invalid');
        }
        return response.text();
    } catch (error) {
        console.error('Gemini AI Service Error:', error);
        throw error; // Let the controller handle the error message
    }
};
