import { apiUrl } from "../../config";
// import { URLSearchParams } from "url";

export async function getNewsData(limit, index) {
  const params = new URLSearchParams({ limit, index }).toString();
  const response = await fetch(apiUrl + "news?" + params);
  const responseObject = await response.json();
  return responseObject.message;
}
