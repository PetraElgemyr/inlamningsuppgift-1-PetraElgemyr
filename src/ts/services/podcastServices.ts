import axios from "axios";
import { IPodcast } from "../models/IPodcast";
import { ISrResponse } from "../models/ISrResponse";
import * as dotenv from "dotenv";
dotenv.config();
const apiLink = process.env.API_LINK as string;

export async function getPodcasts(): Promise<IPodcast[]> {
  console.log(apiLink);

  try {
    return axios.get<ISrResponse>(apiLink).then((response) => {
      console.log(response.data.programs);
      return response.data.programs;
    });
  } catch (error) {
    console.error(error);
    return [];
    // throw new Error("Failed to fetch podcasts");
  }
}

// export async function getPodcasts(): Promise<IPodcast[]> {
//   const apiLink = process.env.API_LINK || "";
//   console.log(apiLink);

//   try {
//     const response = await axios.get<ISrResponse>(apiLink);
//     console.log(response.data.programs);
//     // createHtml(response.data.programs);
//     return response.data.programs;
//   } catch (error) {
//     // if (axios.isAxiosError(error)) {
//     //   console.log(error);
//     // showErrorMessage(error.message, error.name);
//     return [];
//   }
// }
