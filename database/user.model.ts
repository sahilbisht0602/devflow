import { Schema, model, models, Document } from "mongoose";
import { number } from "zod";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  bio?: string;
  username: string;
  password?: string;
  joinedAt: Date;
  reputation: number;
  picture: string;
  location?: string;
  saved: Schema.Types.ObjectId[];
  portfolioWebsite?: string;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  password: { type: String },
  bio: { type: String },
  picture: { type: String, required: true },
  location: { type: String },
  portfolioLink: { type: String },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  joinedAt:{type:Date,default:Date.now}
});

const User = models.User || model("User", UserSchema);

export default User;
