import Chat from '../models/chat.model.js';
import * as aiService from '../services/ai.service.js';

export const getChatResponse = async (req, res) => {
    const { message } = req.body;
    const userId = req.user._id;

    if (!message) {
        return res.status(400).json({ message: 'Message is required' });
    }

    try {
        // 1. Fetch chat history for user
        let chat = await Chat.findOne({ userId });

        if (!chat) {
            chat = new Chat({ userId, messages: [] });
        }

        // 2. Format history for AI (last 10-15 messages)
        const historyLimit = 15;
        const recentMessages = chat.messages.slice(-historyLimit);

        // 3. Get AI response
        const aiResponse = await aiService.generateResponse(recentMessages, message);

        // 4. Update and save chat history
        chat.messages.push({ role: 'user', text: message });
        chat.messages.push({ role: 'model', text: aiResponse });

        // Keep only last 15 pairs (30 messages total) to be safe or as requested
        if (chat.messages.length > historyLimit * 2) {
            chat.messages = chat.messages.slice(-historyLimit * 2);
        }

        await chat.save();

        // 5. Return reply
        res.json({ reply: aiResponse });

    } catch (error) {
        console.error('Chat Controller Error:', error);
        res.status(500).json({ 
            message: 'Internal Server Error',
            error: error.message || 'Failed to get chat response' 
        });
    }
};

export const getChatHistory = async (req, res) => {
    try {
        const chat = await Chat.findOne({ userId: req.user._id });
        res.json(chat ? chat.messages : []);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
