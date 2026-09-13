import { sendResponse } from "../../../responses/index.mjs";
import { getCharacter } from "../../../services/characters.mjs";
import { sendResponse } from "../../../responses/index.mjs";
import httpErrorHandler from "@middy/http-error-handler";

export const handler = middy(async (event) => {
  const result = await getCharacter();

  if (result.length > 0) {
    return sendResponse(200, { characters: result });
  } else {
    return sendResponse(404, { message: "No characters found" });
  }
}).use(httpErrorHandler());

// const house = event.queryStringParameters?.house?.toLowerCase();

// if (house) {
//   const filtered = characters.filter((c) =>
//     c.house?.toLowerCase().includes(house),
//   );
//   return sendResponse(200, {
//     success: true,
//     characters: filtered,
//   });
// } else {
//   return sendResponse(200, {
//     success: true,
//     characters,
//   });
// }
