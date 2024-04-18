import {DataTypes} from "sequelize";
import {sequelize} from "../config/db.js";
import bcrypt from "bcryptjs";

const UserModel = sequelize.define("users", {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.SMALLINT,
    defaultValue: 0,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.SMALLINT,
    defaultValue: 0,
    allowNull: false,
  },
  resetToken: {
    type: DataTypes.STRING(100),
    defaultValue: null,
  },
  refreshToken: {
    type: DataTypes.STRING(100),
    defaultValue: null,
  },
});

UserModel.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(15);
  const hashPassword = await bcrypt.hash(user.password, salt);
  user.password = hashPassword;
});

// UserModel.sync(); // Reset User Table:

export default UserModel;
