import { IPodcast } from "./models/IPodcast";
import { getPodcasts } from "./services/podcastServices";

const podCastContainer: HTMLDivElement = document.getElementById(
  "podcast__wrapper"
) as HTMLDivElement;

export async function createHtml() {
  const podcasts: IPodcast[] = await getPodcasts();

  // if (podcasts.length < 1) {
  //   showErrorMessage();
  // }

  if (podcasts.length > 0) {
    podcasts.forEach((podcast: IPodcast) => {
      const podcastDiv: HTMLDivElement = createPodcastDiv();
      createImg(podcast, podcastDiv);
      const podcastTextBox: HTMLDivElement = createTextDiv(podcastDiv);
      createHeader(podcast, podcastTextBox);
      createParagraph(podcast, podcastTextBox);
      createLink(podcast, podcastTextBox);
    });
  }
}

function createPodcastDiv() {
  const podcastDiv: HTMLDivElement = document.createElement("div");
  podcastDiv.setAttribute("class", "podlist__podcast");
  if (podCastContainer) podCastContainer.appendChild(podcastDiv);
  return podcastDiv;
}

function createImg(podcast: IPodcast, podcastDiv: HTMLDivElement) {
  const podImg: HTMLImageElement = document.createElement("img");
  podImg.setAttribute("src", podcast.socialimage);
  podImg.alt = podcast.name;
  podcastDiv.appendChild(podImg);
}

function createTextDiv(podcastDiv: HTMLDivElement) {
  const podcastTextBox: HTMLDivElement = document.createElement("div");
  podcastTextBox.setAttribute("class", "podlist__podcast--textbox");
  podcastDiv.appendChild(podcastTextBox);
  return podcastTextBox;
}

function createHeader(podcast: IPodcast, podcastTextBox: HTMLDivElement) {
  const podcastHeader: HTMLHeadingElement = document.createElement("h2");
  const programName: Text = document.createTextNode(podcast.name);
  podcastHeader.appendChild(programName);
  podcastTextBox.appendChild(podcastHeader);
}

function createParagraph(podcast: IPodcast, podcastTextBox: HTMLDivElement) {
  const podcastDescription: HTMLParagraphElement = document.createElement("p");
  const description: Text = document.createTextNode(podcast.description);
  podcastDescription.appendChild(description);
  podcastTextBox.appendChild(podcastDescription);
}

function createLink(podcast: IPodcast, podcastTextBox: HTMLDivElement) {
  const podLink: HTMLAnchorElement = document.createElement("a");
  const linkText: Text = document.createTextNode("Lyssna här");
  podLink.setAttribute("href", podcast.programurl);
  podLink.className = "pod__link";
  podLink.appendChild(linkText);
  podcastTextBox.appendChild(podLink);
}

// export function showErrorMessage() {
//   // const errorName: HTMLParagraphElement = document.createElement("p");
//   const errorMessage: HTMLParagraphElement = document.createElement("p");
//   // errorName.innerHTML = name;
//   errorMessage.innerHTML = "Tyvärr gick något fel i hämtningen av data! :(";
//   const bigBox: HTMLElement = document.getElementById("root") as HTMLElement;

//   bigBox.append(errorMessage);
// }
