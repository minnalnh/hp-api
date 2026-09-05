import { sendResponse } from "../../../responses/index.mjs";
import { houses } from "../../../data/houses.mjs";

export const handler = async (event) => {
  return sendResponse(200, {
    success: true,
    houses,
  });
};
