import User from "../model/User.js";
export const addUser = async (req, res) => {
  //   console.log(req.body);
  try {
    let exist = await User.findOne({ sub: req.body.sub });
    if (exist) {
      return res.status(200).json({ msg: "User Already exist" });
    } else {
      const newUser = new User(req.body);
      await newUser.save();
      return res.status(200).json(newUser);
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json(e);
  }
};
export const getUser = async (req, res) => {
  try {
    let users = await User.find({});
    return res.status(200).json(users);
  } catch (e) {
    console.log("Error while fetching user data ", e.message);
    return res.status(500).json(e.message);
  }
};
