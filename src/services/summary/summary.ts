import { apiUrl } from "../../config";
import { DaySummaryResponse } from "./types";

export async function getDaySummary(): Promise<DaySummaryResponse[]> {
  const response = await fetch(apiUrl + "day-summary");
  const responseObject = await response.json();
  return responseObject.message;
}
