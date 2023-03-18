import axios from "axios";
import { IPodcast } from "../models/IPodcast";
import { ISrResponse } from "../models/ISrResponse";

// export async function getPodcasts() {
//   return await fetch(
//     "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false"
//   )
//     .then((data) => data.json())
//     .then((json) => json)
//     .catch((error) => {
//       console.error("nått blev fel:", error);
//       return null;
//     });
// }

export function getPodcasts(): Promise<IPodcast[]> {
  return axios
    .get<ISrResponse>(
      "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false"
    )
    .then((response) => {
      console.log(response.data.programs);
      return response.data.programs;
    });
}
