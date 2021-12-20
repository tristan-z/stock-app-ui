import { apiUrl } from "../../config";
import { GetLoserResponse } from "./types";

export async function getLoserData(): Promise<GetLoserResponse[]> {
  const response = await fetch(apiUrl + "loser");
  const responseObject = await response.json();
  return responseObject.message;
}
