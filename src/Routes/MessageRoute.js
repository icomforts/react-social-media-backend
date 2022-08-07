import express from "express";
import { addMessage, getMessages } from "../Controllers/MessageController.js";

const router = express.Router();

//add message to chat room
router.post("/", addMessage);
//get all messages from chat room
router.get("/:chatRoomId", getMessages);

export default router;
