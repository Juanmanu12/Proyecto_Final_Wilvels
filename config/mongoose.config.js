import mongoose from "mongoose";

mongoose.connect(process.env.ConectionBD);

export default mongoose;
