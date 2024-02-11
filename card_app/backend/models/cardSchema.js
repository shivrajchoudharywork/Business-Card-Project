import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  interests: {
    type: [String],
    required: true,
  },
  socialMedias: {
    type: [{ name: String, url: String }],
    required: true,
  },
});

const Card = mongoose.model("card", cardSchema);

export default Card;
