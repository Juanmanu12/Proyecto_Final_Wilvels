import mongoose from "mongoose";

const usersSchema = mongoose.schema({
  id: String,
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
