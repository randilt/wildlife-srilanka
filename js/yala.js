/*
============================================
CODE FOR yala PAGE START HERE
============================================
*/

// Fetch JSON data
fetch("data/yala.json")
  .then((response) => response.json())
  .then((data) => {
    // Store JSON data in localStorage
    if (!localStorage.getItem("yalaData")) {
      localStorage.setItem("yalaData", JSON.stringify(data));
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const yalaData = JSON.parse(localStorage.getItem("yalaData"));
console.log(yalaData);

document.getElementById("yalaTitle").innerHTML =
  yalaData.yalaNationalPark.title;
document.getElementById("yalaDesc").innerHTML =
  yalaData.yalaNationalPark.intro.description;
document.getElementById("yalaImage").src =
  yalaData.yalaNationalPark.intro.image;
document.getElementById("parksDesc").innerHTML =
  yalaData.yalaNationalPark.visitorTips.description;
document.getElementById("tips").innerHTML =
  yalaData.yalaNationalPark.visitorTips.tips.map((tip) => tip).join("");
