import { sendResponse } from "../../../responses/index.mjs";
import { houses } from "../../../data/houses.mjs";

export const handler = async (event) => {
  console.log("EVENT:", JSON.stringify(event));
  const { id } = event.pathParameters;
  const house = houses.find((h) => h.id === Number(id));

  if (house) {
    return sendResponse(200, {
      success: true,
      house,
    });
  } else {
    return sendResponse(404, {
      success: false,
      message: "No house with corresponding ID found",
    });
  }
};
