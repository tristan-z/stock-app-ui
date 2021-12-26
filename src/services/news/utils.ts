import { apiUrl } from "../../config";
import { GetNewsResponse } from "./types";
import { ApiResponse } from "../../types";

export async function getNewsData(
  limit: number,
  index: number
): Promise<ApiResponse<GetNewsResponse[]>> {
  const params = new URLSearchParams({
    limit: String(limit),
    index: String(index),
  }).toString();
  const response = await fetch(apiUrl + "news?" + params);
  return response.json();
  //const responseObject = await response.json();
  //return responseObject.message;
}
