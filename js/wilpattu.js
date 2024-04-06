/*
============================================
CODE FOR wilpattu PAGE START HERE
============================================
*/

// Fetch JSON data
fetch("data/wilpattu.json")
  .then((response) => response.json())
  .then((data) => {
    // Store JSON data in localStorage
    localStorage.setItem("wilpattuData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const wilpattuData = JSON.parse(localStorage.getItem("wilpattuData"));
console.log(wilpattuData);

document.getElementById("wilpattuTitle").innerHTML =
  wilpattuData.wilpattuNationalPark.title;
document.getElementById("wilpattuImage").src =
  wilpattuData.wilpattuNationalPark.intro.image;
document.getElementById("wilpattuDesc").innerHTML =
  wilpattuData.wilpattuNationalPark.intro.description;
document.getElementById("tipsDesc").innerHTML =
  wilpattuData.wilpattuNationalPark.visitorTips.description;
document.getElementById("tips").innerHTML =
  wilpattuData.wilpattuNationalPark.visitorTips.tips.map((tip) => tip).join("");
