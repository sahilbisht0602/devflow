"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

export async function getUserById(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;
    console.log(userId);
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(userParams: any) {
  try {
    connectToDatabase();
    const newUser = await User.create(userParams);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error
  }
}

export async function updateUser(params: any) {
  const { clerkId, updatedData, path } = params;
  try {
    connectToDatabase();
    await User.findOneAndUpdate(
      {
        clerkId,
      },
      updatedData,
      { new: true }
    );
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(params: any) {
  const { clerkId } = params;
  try {
    connectToDatabase();
    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("User not found");
    }
    // delete user from database
    // and questions,answers,comments etc
  } catch (error) {
    console.log(error);
    throw error;
  }
}
