import { apiUrl } from "../../config";

export async function getLoserData() {
  const response = await fetch(apiUrl + "loser");
  const responseObject = await response.json();
  return responseObject.message;
}
