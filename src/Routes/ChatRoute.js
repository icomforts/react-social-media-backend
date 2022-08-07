import express from "express";
import {
  createChat,
  getUserChatRooms,
  getChatRoomById,
} from "../Controllers/ChatController.js";

const router = express.Router();

//create chat room
router.post("/", createChat);
//get user all chat rooms by user id
router.get("/:userId", getUserChatRooms);
//get chat room by users id
router.get("/find/:firstId/:secondId", getChatRoomById);

export default router;
