import { sendResponse } from "../../../responses/index.mjs";
import { characters } from "../../../data/characters.mjs";

export const handler = async (event) => {
  console.log("EVENT:", JSON.stringify(event));
  const { id } = event.pathParameters;
  const character = characters.find((c) => c.id === Number(id));

  if (character) {
    return sendResponse(200, {
      success: true,
      character,
    });
  } else {
    return sendResponse(404, {
      success: false,
      message: "No character with corresponding ID found",
    });
  }
};
