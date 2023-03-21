import { IPodcast } from "./models/IPodcast";
import { getPodcasts } from "./services/podcastServices";

const podCastContainer: HTMLDivElement = document.getElementById(
  "podcast__wrapper"
) as HTMLDivElement;

export async function createHtml() {
  const podCasts: IPodcast[] = await getPodcasts();

  podCasts.forEach((podcast: IPodcast) => {
    const innerPodDiv: HTMLDivElement = document.createElement("div");
    innerPodDiv.setAttribute("class", "podlist__podcast");
    if (podCastContainer) podCastContainer.appendChild(innerPodDiv);

    createImg(podcast, innerPodDiv);
    const textDiv: HTMLDivElement = createTextDiv(innerPodDiv);
    createHeader(podcast, textDiv);
    createParagraph(podcast, textDiv);
    createLink(podcast, textDiv);
  });
}

function createImg(podcast: IPodcast, innerPodDiv: HTMLDivElement) {
  const imgPlacement: HTMLImageElement = document.createElement("img");
  imgPlacement.setAttribute("src", podcast.socialimage);
  imgPlacement.alt = podcast.name;
  innerPodDiv.appendChild(imgPlacement);
}

function createTextDiv(innerPodDiv: HTMLDivElement) {
  const textDiv: HTMLDivElement = document.createElement("div");
  textDiv.setAttribute("class", "podlist__podcast--textbox");
  innerPodDiv.appendChild(textDiv);
  return textDiv;
}

function createHeader(podcast: IPodcast, textDiv: HTMLDivElement) {
  const headerPlacement: HTMLHeadingElement = document.createElement("h2");
  const programName: Text = document.createTextNode(podcast.name);
  headerPlacement.appendChild(programName);
  textDiv.appendChild(headerPlacement);
}

function createParagraph(podcast: IPodcast, textDiv: HTMLDivElement) {
  const descPlacement: HTMLParagraphElement = document.createElement("p");
  const desc: Text = document.createTextNode(podcast.description);
  descPlacement.appendChild(desc);
  textDiv.appendChild(descPlacement);
}

function createLink(podcast: IPodcast, textDiv: HTMLDivElement) {
  const linkPlacement: HTMLAnchorElement = document.createElement("a");
  const linkText: Text = document.createTextNode("Lyssna här");
  linkPlacement.setAttribute("href", podcast.programurl);
  linkPlacement.className = "pod__link";
  linkPlacement.appendChild(linkText);
  textDiv.appendChild(linkPlacement);
}
