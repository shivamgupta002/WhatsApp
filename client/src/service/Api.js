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
    console.log(e.message);
  }
};
