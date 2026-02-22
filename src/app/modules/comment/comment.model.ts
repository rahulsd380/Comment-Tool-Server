import { Schema, model } from "mongoose";
import { TComment } from "./comment.interface";

const MessageSchema = new Schema(
  {
    userName: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const CommentSchema = new Schema<TComment>(
  {
    projectId: { type: String, required: true, index: true },
    pageUrl: { type: String, required: true },
    selector: { type: String },
    position: {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
    },
    messages: [MessageSchema],
    status: {
      type: String,
      enum: ["open", "resolved"],
      default: "open",
    },
  },
  { timestamps: true }
);

const Comment = model<TComment>("Comment", CommentSchema);
export default Comment;