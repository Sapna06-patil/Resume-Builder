import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  firstName: String,
  lastName: String,
  profession: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  experiences: [
    {
      employer: String,
      company: String,
      address: String,
      role: String,
      start: String,
      finish: String,
      currentlyWork: Boolean,
      description: String,
    },
  ],
});

export default mongoose.model("Profile", ProfileSchema);
