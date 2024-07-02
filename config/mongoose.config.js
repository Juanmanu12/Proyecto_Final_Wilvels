import mongoose from "mongoose";

mongoose.connect(process.env.ConectionBD);

//mongoose.connect("mongodb://localhost:27017/");

export default mongoose;
