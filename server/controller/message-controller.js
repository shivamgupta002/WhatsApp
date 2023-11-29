import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

// Save Message
export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    return res.status(200).json("Message has been sent successfully");
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

// Get Message
export const getMessages = async (req, res) => {
  try {
    const message = await Message.find({ conversationId: req.params.id });
    return res.status(200).json(message);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};
