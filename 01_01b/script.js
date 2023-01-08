/**
 * Add date to output.
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 */

import data from "./data.js";

const mainContent = document.querySelector(".main-content");

const buildImage = (imgData) => {
  let srcset = `${imgData.urls.full} ${imgData.width}w`;
  if (imgData.urls.regular) {
    srcset = srcset + `,${imgData.urls.regular} 1080w`;
  }
  if (imgData.urls.small) {
    srcset = srcset + `${imgData.urls.small} 400w`;
  }

  const img = `
  <img
        srcset="
          ${srcset}
        "
        sizes="(max-width: 450px) 400px, (max-width: 800) 1080px"
        src="${imgData.urls.regular}"
        width="${imgData.width}"
        height="${imgData.height}"
        alt="${imgData.description}"
        loading="lazy"
      />`;
  return img;
};

const getDate = (imgData) => {
  const date = new Date(imgData.created_at);
  const niceDate = date.toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return niceDate;
};

const Card = (data) => {
  const imgData = data[0];

  const markup = `
    <figure class="image">
      ${buildImage(imgData)}
      <figcaption class="image__caption">
        <h3 class="image__title">${imgData.description}</h3>
        <div class="image__meta">
          <p>
            Photo by
            <span class="image__photog">${imgData.user.name}</span>.
          </p>
          <p>
          Uploaded on
          <time class="image_date" datetime="${imgData.created_at}">${getDate(
    imgData
  )}</time>
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
