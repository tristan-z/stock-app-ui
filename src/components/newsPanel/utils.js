import { apiUrl } from "../../config";

export async function getNewsData() {
  const response = await fetch(apiUrl + "news");
  const responseObject = await response.json();
  return responseObject.message;
}
