/*
============================================
CODE FOR leopard PAGE START HERE
============================================
*/

// Fetch JSON data
fetch("data/leopard.json")
  .then((response) => response.json())
  .then((data) => {
    // Store JSON data in localStorage
    localStorage.setItem("leopardData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const leopardData = JSON.parse(localStorage.getItem("leopardData"));
console.log(leopardData);

document.getElementById("venuesHeading").innerHTML =
  leopardData.leopardInfo.title;
document.getElementById("habitat1").innerHTML = `<div class="habitat-desc">
            <h3 class="heading-main">${leopardData.leopardInfo.habitat[0].name}</h3>
            <p>
             ${leopardData.leopardInfo.habitat[0].description}
            </p>
          </div>
          <div class="habitat-img">
            <img src=${leopardData.leopardInfo.habitat[0].image} alt="" />
          </div>`;

document.getElementById("habitat2").innerHTML = ` <div class="habitat-img">
            <img src=${leopardData.leopardInfo.habitat[1].image} alt="" />
          </div>
          <div class="habitat-desc">
            <h3 class="heading-main">${leopardData.leopardInfo.habitat[1].name}</h3>
            <p>
              ${leopardData.leopardInfo.habitat[1].description}
            </p>
          </div>`;

document.getElementById("habitat3").innerHTML = ` <div class="habitat-desc">
            <h3 class="heading-main">${leopardData.leopardInfo.habitat[2].name}</h3>
            <p>
              ${leopardData.leopardInfo.habitat[2].description}
            </p>
          </div>
          <div class="habitat-img">
            <img src=${leopardData.leopardInfo.habitat[2].image} alt="" />
          </div>`;
document.getElementById("threatsTitle").innerHTML =
  leopardData.leopardFacts.title;
document.getElementById("threat1").innerHTML = `<div class="habitat-desc">
            <h3 class="heading-main">${leopardData.leopardFacts.threats[0].name}</h3>
            ${leopardData.leopardFacts.threats[0].description}
            <em>Check out:</em>
            <a href="https://facebook.com/wildlife.lk" class="leopard-button"
              >Wildlife Conservation Society of Galle</a
            >
          </div>
          <div class="habitat-img">
            <img src=${leopardData.leopardFacts.threats[0].image} alt="" />
          </div>`;
document.getElementById("threat2").innerHTML = ` <div class="habitat-img">
            <img src=${leopardData.leopardFacts.threats[1].image} alt="" />
          </div>
          <div class="habitat-desc">
            <h3 class="heading-main">${leopardData.leopardFacts.threats[1].name}</h3>
            ${leopardData.leopardFacts.threats[1].description}
            <em>Check out:</em>
            <a href="https://www.slwcs.org/" class="leopard-button button-2"
              >Sri Lanka Wildlife Conservation Society</a
            >
          </div>`;
