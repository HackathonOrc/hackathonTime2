import { Schema, model } from "mongoose";

interface IPost {
  userName: string;
  content: string;
  date: Date;
  likes: string[];
}

const PostSchema = new Schema<IPost>({
  userName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
  likes: [
    {
      type: String,
      required: true,
    },
  ],
});

export default model<IPost>("Post", PostSchema);
