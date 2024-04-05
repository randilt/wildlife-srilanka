/*
============================================
CODE FOR animals PAGE START HERE
============================================
*/

// Fetch JSON data
fetch("data/animals.json")
  .then((response) => response.json())
  .then((data) => {
    // Store JSON data in localStorage
    localStorage.setItem("animalsData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const animalsData = JSON.parse(localStorage.getItem("animalsData"));
console.log(animalsData);

document.getElementById("indigenousTitle").innerHTML =
  animalsData.indigenousAnimals.title;
document.getElementById("indigenousDesc").innerHTML = `
    <p>${animalsData.indigenousAnimals.description[0]}</p>
    <p>${animalsData.indigenousAnimals.description[1]}</p>
    <p>${animalsData.indigenousAnimals.description[2]}</p>
    <p>${animalsData.indigenousAnimals.description[3]}</p>
    <p>${animalsData.indigenousAnimals.description[4]}</p>
    <p>${animalsData.indigenousAnimals.description[5]}</p>
`;
document.getElementById("leopardFacts").innerHTML = `<div class="leopard-bg">
        <div class="leopard-content">
          <h1>${animalsData.wildlifeWonders.title}</h1>
          <br />
          <p>
            ${animalsData.wildlifeWonders.description[0]} <br />
            <br />
            <strong>${animalsData.wildlifeWonders.description[1]}</strong><br />
          </p>
        </div>
      </div>`;
document.getElementById("iconic").innerHTML = animalsData.iconicWildlife.title;
document.getElementById("elephant").innerHTML = `
    <div class="habitat-desc">
              <h3 class="heading-main">${animalsData.iconicWildlife.animals[0].name}</h3>
              <p>
                ${animalsData.iconicWildlife.animals[0].description}
              </p>
            </div>
            <div class="habitat-img">
              <img src= ${animalsData.iconicWildlife.animals[0].image} alt="" />
            </div>`;
document.getElementById("pelican").innerHTML = `<div class="habitat-img">
          <img src=${animalsData.iconicWildlife.animals[1].image} alt="" />
        </div>
        <div class="habitat-desc">
          <h3 class="heading-main">
            ${animalsData.iconicWildlife.animals[1].name}
          </h3>
          <p>
            ${animalsData.iconicWildlife.animals[1].description}
          </p>
        </div>`;
