import { Schema, model, Document } from "mongoose";
const crypto = require("crypto");
import * as bcrypt from "bcryptjs";

interface IUser extends Document {
  userName: string;
  name: string;
  email: string;
  password: string;
  isValidated: boolean;
  validateEmailToken: string;
  passwordResetToken: string;
  passwordResetExpires: Date;
}

const UserSchema = new Schema<IUser>({
  userName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  isValidated: {
    type: Boolean,
    default: false,
    select: false,
  },
  validateEmailToken: {
    type: String,
    default: crypto.randomBytes(20).toString("hex"),
    select: false,
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
});

UserSchema.pre<IUser>("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(this.password, salt);

  this.password = hash;

  next();
});

export default model<IUser>("User", UserSchema);
