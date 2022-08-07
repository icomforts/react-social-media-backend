import MessageModel from "../Models/MessageModel.js";

//add message to chat room
export const addMessage = async (req, res) => {
  const newMessage = new MessageModel(req.body);
  try {
    const result = await newMessage.save();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

//get all messages from chat room
export const getMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find({
      chatRoom: req.params.chatRoomId,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};
