import { sendResponse } from "../../../responses/index.mjs";
import { characters } from "../../../data/characters.mjs";

export const handler = async (event) => {
  const house = event.queryStringParameters?.house?.toLowerCase();

  if (house) {
    const filtered = characters.filter((c) =>
      c.house?.toLowerCase().includes(house),
    );
    return sendResponse(200, {
      success: true,
      characters: filtered,
    });
  } else {
    return sendResponse(200, {
      success: true,
      characters,
    });
  }
};
