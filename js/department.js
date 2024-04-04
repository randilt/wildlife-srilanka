/*
============================================
CODE FOR DEPARTMENT PAGE START HERE
============================================
*/

// Fetch JSON data
fetch("data/department.json")
  .then((response) => response.json())
  .then((data) => {
    // Store JSON data in localStorage
    localStorage.setItem("departmentData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const departmentData = JSON.parse(localStorage.getItem("departmentData"));

console.log(departmentData);

document.getElementById("title").innerHTML = departmentData.department.title;
document.getElementById("description").innerHTML =
  departmentData.department.description;
document.getElementById("mission").innerHTML =
  departmentData.department.mission;
document.getElementById("highlights").innerHTML =
  departmentData.department.highlights
    .map((highlight) => {
      return `<li>${highlight}</li>`;
    })
    .join("");
document.getElementById("iframe").innerHTML = `<iframe
          src="${departmentData.iframe.src}"
          width=${departmentData.iframe.width}
          height=${departmentData.iframe.height}
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>`;
document.getElementById("leopardTitle").innerHTML =
  departmentData.leopardFacts.title;
document.getElementById("leopardDesc").innerHTML =
  departmentData.leopardFacts.description;
document.getElementById("galleryRow1").innerHTML =
  departmentData.protectedAreas.images
    .slice(0, 3)
    .map((image) => `<img src=${image} alt="" />`)
    .join("");
document.getElementById("galleryRow2").innerHTML =
  departmentData.protectedAreas.images
    .slice(3, 6)
    .map((image) => `<img src=${image} alt="" />`)
    .join("");
