import axios from "axios";

const url = "http://localhost:5000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (e) {
    console.log("Error while addUser is ", e.message);
  }
};
