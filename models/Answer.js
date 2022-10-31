import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    body: {
      type: String,
      required: [true, "provied a content"],
      minlength: [10, "Please provide minimum 10 character"],},
  
    likes: {
      types: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
      ],
    },
  
    user: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    ],
  
    question: {
      type: mongoose.Schema.ObjectId,
      ref: "Question",
      required: true,
    },
  });

  export default mongoose.model("Answer", answerSchema);