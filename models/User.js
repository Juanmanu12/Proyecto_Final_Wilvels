import mongoose from "../config/mongoose.config.js";

const usersSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
});

const User = mongoose.model("User", usersSchema);

export default User;
