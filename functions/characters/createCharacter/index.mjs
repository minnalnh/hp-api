import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";
import { characters } from "../../../data/characters.mjs";
import { sendResponse } from "../../../responses/index.mjs";

export const handler = middy(async (event) => {
  const character = {
    id: Math.max(...characters.map((c) => c.id)) + 1,
    ...event.body,
  };
  characters.push(character);

  return sendResponse(200, {
    success: true,
    message: "New character created successfully",
    character,
    characters,
  });
})
  .use(httpJsonBodyParser())
  .use(errorHandler());
