/*
============================================
CODE FOR HOME PAGE START HERE
============================================
*/

// Fetch JSON data
fetch("data/home.json")
  .then((response) => response.json())
  .then((data) => {
    // Store JSON data in localStorage
    localStorage.setItem("homeData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const data = JSON.parse(localStorage.getItem("homeData"));

//rendering the text data
document.getElementById("headingP1").innerHTML = data.homeTexts[0].headingP1;
document.getElementById("headingP2").innerHTML = data.homeTexts[0].headingP2;
document.getElementById("homeP3").innerHTML = data.homeTexts[0].homeP3;
document.getElementById("homeP4").innerHTML = data.homeTexts[0].homeP4;

const homeGrid = document.getElementById("homeGrid");

//rendering images for the home page grid
homeGrid.innerHTML = data.homeImages
  .map((image) => {
    return `<img
              class="${image.styles}"
              src="${image.image}"
              alt="${image.alt}"
            />`;
  })
  .join("");

const leopardFactsList = document.getElementById("leopardFactsList");

leopardFactsList.innerHTML = data.leopardFacts
  .map((fact) => {
    return fact;
  })
  .join("");

document.getElementById("wildlifeTitle").innerHTML = data.wildlifeSection.title;
document.getElementById("highlights").innerHTML =
  data.wildlifeSection.highlights;
document.getElementById("highlightsList").innerHTML =
  data.wildlifeSection.highlightsList
    .map((highlight) => {
      return `<li>
            ${highlight}
          </li>`;
    })
    .join("");
document.getElementById("wildlifeDescription").innerHTML =
  data.wildlifeSection.description;
