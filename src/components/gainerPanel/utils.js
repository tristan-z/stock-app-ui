import { apiUrl } from "../../config";

export async function getGainerData() {
  const response = await fetch(apiUrl + "gainer");
  const responseObject = await response.json();
  return responseObject.message;
}
