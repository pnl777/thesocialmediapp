import UserModel from "../models/UserModel.js";
import CustomErrorHandler from "../utils/CustomErrorHandler.js";

// Route: /api/users
// Description: Retrieve all users on users table.
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

// Route: /api/register
// Description: Registration for new users
const registerUser = async (req, res, next) => {
  const {username, email, password, firstname, lastname} = req.body;
  if (![username, email, password, firstname, lastname].every(Boolean))
    return next(
      new CustomErrorHandler("All fields are required. Try again.", 401)
    );

  try {
    const userNameExists = await UserModel.findOne({where: {username}});
    const emailExists = await UserModel.findOne({where: {email}});

    if (userNameExists) {
      return next(new CustomErrorHandler("Username is already in use.", 409));
    }

    if (emailExists) {
      return next(new CustomErrorHandler("Email is already in use.", 409));
    }

    await UserModel.create({
      username,
      email,
      password,
      firstname,
      lastname,
    });

    res.status(201).json({
      success: true,
      message: "Congratulations! You have successfully set up your account.",
    });
  } catch (error) {
    next(error);
  }
};

export {getAllUsers, registerUser};
