import {Sequelize} from "sequelize";

const sequelize = new Sequelize("db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established.");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
