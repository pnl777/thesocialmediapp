import UserModel from "../models/UserModel.js";

// GET ALL USERS
const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.findAll();
    return res.status(200).json({
      users,
    });
  } catch (error) {
    next(error);
  }
};

export {getAllUsers};
