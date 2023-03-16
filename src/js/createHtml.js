import { getPodcasts } from "./api";

const podCastContainer = document.querySelector(".section__podlist--pods");

let i = 0;

export async function createHtml() {
  const podCasts = await getPodcasts();
  podCasts.programs.forEach((podcast) => {
    i++;

    const innerArticle = document.createElement("article");
    innerArticle.setAttribute("class", "section__article--innerarticle");
    innerArticle.setAttribute("tabindex", "1");
    podCastContainer.appendChild(innerArticle);

    const imgPlacement = document.createElement("img");
    imgPlacement.setAttribute("src", podCasts.programs[i].socialimage);
    //lägg in i scss istället!!!
    imgPlacement.setAttribute("width", "100");
    imgPlacement.setAttribute("height", "100");
    imgPlacement.alt = "podcast picture";
    innerArticle.appendChild(imgPlacement);

    const textDiv = document.createElement("div");
    textDiv.setAttribute("class", "section__article--div");
    innerArticle.appendChild(textDiv);

    const headerPlacement = document.createElement("h2");
    const programName = document.createTextNode(podCasts.programs[i].name);
    headerPlacement.appendChild(programName);
    textDiv.appendChild(headerPlacement);

    const descPlacement = document.createElement("p");
    const desc = document.createTextNode(podCasts.programs[i].description);
    descPlacement.appendChild(desc);
    textDiv.appendChild(descPlacement);

    const linkPlacement = document.createElement("a");
    const linkText = document.createTextNode("Lyssna här");
    linkPlacement.setAttribute("href", podCasts.programs[i].programurl);
    linkPlacement.setAttribute("tabindex", "1");
    linkPlacement.className = "pod__link";
    linkPlacement.appendChild(linkText);
    textDiv.appendChild(linkPlacement);
  });
}
