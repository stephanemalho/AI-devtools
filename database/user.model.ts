import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  clerlId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture?: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  savad: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema({
  clerlId: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 100,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 100,
  },
  password: {
    type: String,
  },
  bio: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
  picture: {
    type: String,
    maxlength: 1000,
  },
  location: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  portfolioWebsite: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
  reputation: {
    type: Number,
    default: 0,
  },
  saved: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;