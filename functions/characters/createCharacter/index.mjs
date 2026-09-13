import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";

import { authenticateUser } from "../../../middlewares/authenticate.mjs";
import { authorizeRole } from "../../../middlewares/authorize.mjs";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";

import { addCharacter } from "../../../services/characters.mjs";

import { sendResponse } from "../../../responses/index.mjs";

export const handler = middy(async (event) => {
  const character = {
    id: String(Date.now()),
    ...event.body,
  };

  await addCharacter(character);

  return sendResponse(201, {
    success: true,
    message: "New character created successfully",
    character,
  });
})
  .use(httpJsonBodyParser())
  .use(errorHandler())
  .use(authenticateUser())
  .use(authorizeRole("admin"))
  .use(errorHandler());
