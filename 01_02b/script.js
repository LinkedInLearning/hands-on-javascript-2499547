/**
 * Break down a complex function:
 * - Create a new function to build the <img> element.
 * - Make srcset entries conditional on data being available.
 */

import data from "./data.js";

const mainContent = document.querySelector(".main-content");

const Card = (data) => {
  const imgData = data[0];
  const date = new Date(imgData.created_at);

  const markup = `
  <article class="main-content">
    <figure class="image">
      <img
        srcset="
          ${imgData.urls.full} ${imgData.width}w,
          ${imgData.urls.regular} 1080w,
          ${imgData.urls.small} 400w
        "
        sizes="(max-width: 450px) 400px, (max-width: 800) 1080px"
        src="${imgData.urls.regular}"
        width="${imgData.width}"
        height="${imgData.height}"
        alt="${imgData.description}"
        loading="lazy"
      />
      <figcaption class="image__caption">
        <h3 class="image__title">${imgData.description}</h3>
        <div class="image__meta">
          <p>
            Photo by
            <span class="image__photog">${imgData.user.name}</span>.
          </p>
          <p>
            Uploaded on
            <time class="image__date" datetime="${imgData.created_at}">
            ${date.toLocaleString("default", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            </time>.
          </p>
          <p>
            <a href="${imgData.links.self}" class="image__link">
              View it on Unsplash.
            </a>
          </p>
        </div>
      </figcaption>
    </figure>
  `;

  mainContent.innerHTML = markup;
};

Card(data);
