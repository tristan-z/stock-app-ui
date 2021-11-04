import { apiUrl } from "../../config";

export async function getTileData() {
  const response = await fetch(apiUrl);
  const responseObject = await response.json();
  return responseObject.message;
}
