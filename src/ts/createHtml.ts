import { IPodcast } from "./models/IPodcast";
import { getPodcasts } from "./services/podcastServices";

const podCastContainer: HTMLDivElement = document.getElementById(
  "podcast__wrapper"
) as HTMLDivElement;

let i: number = 0;

export async function createHtml1() {
  const podCasts: IPodcast[] = await getPodcasts();

  podCasts.forEach((podcast: IPodcast) => {
    i++;

    const innerPodDiv: HTMLDivElement = document.createElement("div");
    innerPodDiv.setAttribute("class", "section__podDiv--container");
    if (podCastContainer) podCastContainer.appendChild(innerPodDiv);

    const imgPlacement: HTMLImageElement = document.createElement("img");
    imgPlacement.setAttribute("src", podCasts[i].socialimage);
    // imgPlacement.setAttribute("width", "100");
    // imgPlacement.setAttribute("height", "100");
    imgPlacement.alt = podCasts[i].name;
    innerPodDiv.appendChild(imgPlacement);

    const textDiv: HTMLDivElement = document.createElement("div");
    textDiv.setAttribute("class", "section__podDiv--innerDiv");
    innerPodDiv.appendChild(textDiv);

    const headerPlacement: HTMLHeadingElement = document.createElement("h2");
    const programName: Text = document.createTextNode(podCasts[i].name);
    headerPlacement.appendChild(programName);
    textDiv.appendChild(headerPlacement);

    const descPlacement: HTMLParagraphElement = document.createElement("p");
    const desc: Text = document.createTextNode(podCasts[i].description);
    descPlacement.appendChild(desc);
    textDiv.appendChild(descPlacement);

    const linkPlacement: HTMLAnchorElement = document.createElement("a");
    const linkText: Text = document.createTextNode("Lyssna här");
    linkPlacement.setAttribute("href", podCasts[i].programurl);
    linkPlacement.className = "pod__link";
    linkPlacement.appendChild(linkText);
    textDiv.appendChild(linkPlacement);
  });
}
