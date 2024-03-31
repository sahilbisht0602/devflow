"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tag.model";
import User from "@/database/user.model";

export async function getQuestions() {
  try {
    connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });
    return { questions };
  } catch (error) {
    console.log("Error in fetching questions", error);
  }
}

// server action which will create a question on DB
export async function createQuestion(params:any) {
  try {
    // connext to DB
    connectToDatabase();
    const { title, content, author, tags } = params;
    // create a question
    const question = await Question.create({
      title,
      content,
      author,
    });
    const tagDocument = [];
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        {
          name: { $regex: new RegExp(`^${tag}$`, "i") },
        },
        // if it not find the document depending on above filter then only setoninsert will work i.e for inserting new document, so in other case of updating the doc only push will work and as doc is already there it will update the array of question
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );
      console.log(question._id);
      console.log(question._id.toString());

      tagDocument.push(existingTag._id);
    }
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocument } },
    });
    // revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
