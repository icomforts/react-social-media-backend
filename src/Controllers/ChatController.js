import ChatModel from "../Models/ChatModel.js";

//create chat room
export const createChat = async (req, res) => {
  // const newChat = new ChatModel(req.body);
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const result = await newChat.save();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

//get user all chat rooms
export const getUserChatRooms = async (req, res) => {
  try {
    const chatRooms = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chatRooms);
  } catch (error) {
    res.status(500).json(error);
  }
};

//get chat room by users id
export const getChatRoomById = async (req, res) => {
  try {
    const chatRoom = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chatRoom);
  } catch (error) {
    res.status(500).json(error);
  }
};
