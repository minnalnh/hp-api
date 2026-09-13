import { db } from "./db.mjs";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import createError from "http-errors";

export const getCharacter = async (character) => {
  try {
    const command = new GetCommand({
      TableName: "hp-characters",
      Key: {
        character: character,
      },
    });

    const { Item } = await db.send(command);
    return Item;
  } catch (error) {
    console.log("ERROR:", error);
    throw createError(500, error.message);
  }
};

export const addCharacter = async (character) => {
  try {
    const command = new PutCommand({
      TableName: "hp-characters",
      Item: character,
    });

    await db.send(command);
    return true;
  } catch (error) {
    console.log("ERROR:", error);
    throw createError(500, error.message);
  }
};
