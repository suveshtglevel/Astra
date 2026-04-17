import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    messages: [
        {
            role: {
                type: String,
                enum: ['user', 'model'],
                required: true
            },
            text: {
                type: String,
                required: true
            },
            timestamp: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true
});

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
