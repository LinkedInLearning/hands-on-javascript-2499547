/**
 * Add date to output.
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 */

import data from "./data.js"; // Import API data from data.js

const mainContent = document.querySelector(".main-content"); // Selects main article element

const Card = (data) => {
    // Creates a function to create the card
    const imgData = data[0]; // Selects the first image from the data array
    const date = new Date(imgData.created_at); // Creates a new date object from the image date

    /**
     * Creates a template literal to create the card markup.
     * The template literal uses the data from the API to create the card.
     * The template literal also uses the date object to create the date.
     * The template literal uses the toLocaleString() method to format the date.
     */
    const markup = `
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
            Photo by
            <time class="image__time" datetime="${imgData.created_at}">
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

    mainContent.innerHTML = markup; // Adds the markup to the main article element
};

Card(data); // Calls the Card function and passes the data as an argument to the function to create the card markup and add it to the page when the page loads for the first time (when the script is run)
