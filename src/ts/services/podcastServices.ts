import axios from "axios";
import { IPodcast } from "../models/IPodcast";
import { ISrResponse } from "../models/ISrResponse";
import * as dotenv from "dotenv";
dotenv.config();

export function getPodcasts(): Promise<IPodcast[]> {
  const apiLink = process.env.API_LINK || "";
  console.log(apiLink);

  try {
    return axios.get<ISrResponse>(apiLink).then((response) => {
      console.log(response.data.programs);
      return response.data.programs;
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch podcasts");
  }
}
