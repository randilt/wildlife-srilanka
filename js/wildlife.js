/*
============================================
CODE FOR SRILANKAN WILDLIFE PAGE START HERE
============================================
*/

// Fetch JSON data
fetch("data/wildlife.json")
  .then((response) => response.json())
  .then((data) => {
    // Store JSON data in localStorage
    if (!localStorage.getItem("wildlifeData")) {
      localStorage.setItem("wildlifeData", JSON.stringify(data));
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const wildlifeData = JSON.parse(localStorage.getItem("wildlifeData"));

console.log(wildlifeData);

//rendering the text data

document.getElementById("hortonTitle").innerHTML =
  wildlifeData.wildlifeLocations[0].title;
document.getElementById("hortonsLocation").innerHTML =
  wildlifeData.wildlifeLocations[0].location;
document.getElementById("hortonsMap").innerHTML = `<iframe
          src="${wildlifeData.wildlifeLocations[0].mapSrc}"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>`;

document.getElementById(
  "hortonImages"
).innerHTML = `<img src=${wildlifeData.wildlifeLocations[0].images[0]}><img src=${wildlifeData.wildlifeLocations[0].images[1]}>`;

document.getElementById("hortonParas").innerHTML =
  wildlifeData.wildlifeLocations[0].description
    .map((para) => {
      return `<p>${para}</p>`;
    })
    .join("");
document.getElementById("sinharajaTitle").innerHTML =
  wildlifeData.wildlifeLocations[1].title;
document.getElementById("sinharajaLocation").innerHTML =
  wildlifeData.wildlifeLocations[1].location;
document.getElementById("sinharajaMap").innerHTML = `<iframe
          src="${wildlifeData.wildlifeLocations[1].mapSrc}"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>`;
document.getElementById(
  "sinharajaImages"
).innerHTML = `<img src=${wildlifeData.wildlifeLocations[1].images[0]}><img src=${wildlifeData.wildlifeLocations[1].images[1]}>`;
document.getElementById("sinharajaParas").innerHTML =
  wildlifeData.wildlifeLocations[1].description
    .map((para) => {
      return `<p>${para}</p>`;
    })
    .join("");

const tableBody = document.querySelector(".details table tbody");
wildlifeData.interestingFacts.data.forEach((fact) => {
  const row = `
        <tr>
          <td>${fact.wildlifeLocation}</td>
          <td>
            ${fact.animalName} <br />
            <img src="${fact.animalImage}" alt="" />
          </td>
          <td>${fact.interestingFacts}</td>
        </tr>
      `;
  tableBody.innerHTML += row;
});
