import axios from "axios";
import { IPodcast } from "../models/IPodcast";
import { ISrResponse } from "../models/ISrResponse";
import * as dotenv from "dotenv";
dotenv.config();
const apiLink = process.env.API_LINK as string;

export async function getPodcasts(): Promise<IPodcast[]> {
  try {
    return axios.get<ISrResponse>(apiLink).then((response) => {
      console.log(response.data.programs);
      return response.data.programs;
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}
