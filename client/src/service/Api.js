import axios from "axios";

const url = "http://localhost:5000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (e) {
    console.log("Error while addUser is ", e.message);
  }
};
export const getUsers = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    return response.data;
  } catch (e) {
    console.log("Error while getUser is ", e.message);
  }
};
export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (e) {
    console.log("Error while setConversation is ", e.message);
  }
};
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (e) {
    console.log("Error while gettingConversation is ", e.message);
  }
};
export const newMessage = async (data) => {
  try {
    let response = await axios.post(`${url}/message/add`, data);
    return response.data;
  } catch (e) {
    console.log("Error while New message api is ", e.message);
  }
};
export const getMessage = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (e) {
    console.log("Error while getting message api is ", e.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.get(`${url}/file/upload`, data);
  } catch (e) {
    console.log("Error while uploading file api is ", e.message);
  }
};
