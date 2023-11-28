import express from "express";
import { addUser, getUser } from "../controller/user-controller.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUser);

export default route;
