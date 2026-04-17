import express from 'express';
const router = express.Router();
import { getChatResponse, getChatHistory } from '../controllers/chat.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

/**
 * @swagger
 * /api/chat:
 *   post:
 *     summary: Send a message to the AI
 *     tags: [Chat]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: AI response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reply:
 *                   type: string
 *       401:
 *         description: Not authorized
 */
router.post('/', protect, getChatResponse);

/**
 * @swagger
 * /api/chat/history:
 *   get:
 *     summary: Get chat history
 *     tags: [Chat]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Chat history
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   role:
 *                     type: string
 *                   text:
 *                     type: string
 *                   timestamp:
 *                     type: string
 *       401:
 *         description: Not authorized
 */
router.get('/history', protect, getChatHistory);

export default router;
