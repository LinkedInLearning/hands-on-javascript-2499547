/**
 * Use object destructuring to pick relevant properties from the data object.
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

const buildImage = (imgData) => {
  let srcset = `${imgData.urls.full} ${imgData.width}w`;
  if (imgData.urls.regular) {
    srcset = srcset + `, ${imgData.urls.regular} 1080w`;
  }
  if (imgData.urls.small) {
    srcset = srcset + `, ${imgData.urls.small} 400w`;
  }

  const img = `
    <img
          srcset="${srcset}"
          sizes="(max-width: 450px) 400px, (max-width: 800) 1080px"
          src="${imgData.urls.regular}"
          width="${imgData.width}"
          height="${imgData.height}"
          alt="${imgData.description}"
          loading="lazy"
        />
    `;
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

const Card = (imgData) => {
  return `
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
            Uploaded on <time class="image__date" datetime="${
              imgData.created_at
            }">${getDate(imgData)}</time>.
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
};

export default Card;
