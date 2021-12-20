import { apiUrl } from "../../config";
import { GetGainerResponse } from "./types";

export async function getGainerData(): Promise<GetGainerResponse[]> {
  const response = await fetch(apiUrl + "gainer");
  const responseObject = await response.json();
  return responseObject.message;
}
