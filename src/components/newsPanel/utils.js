import { apiUrl } from "../../config";

export async function getNewsData(limit, index) {
  const params = new URLSearchParams({ limit, index }).toString();
  const response = await fetch(apiUrl + "news?" + params);
  return response.json();
  //const responseObject = await response.json();
  //return responseObject.message;
}
