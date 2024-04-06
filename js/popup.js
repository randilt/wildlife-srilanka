const currentPage = window.location.pathname.split("/").pop();
console.log(currentPage);
const isAuthenticated = false;

if (!isAuthenticated) {
  const loginBtn = `<li><a href="login.html">Login</a></li>`;
  document.querySelector(".menu").insertAdjacentHTML("beforeend", loginBtn);
}

if (isAuthenticated) {
  const editButton = `<li><a id="openEditor">Edit Content</a></li>`;
  document.querySelector(".menu").insertAdjacentHTML("beforeend", editButton);
}

// Add event listener for the dynamically created button
document
  .getElementById("openEditor")
  .addEventListener("click", openEditorPopup);

function openEditorPopup() {
  let localStorageKey = "homeData";
  switch (currentPage) {
    case "index.html":
      localStorageKey = "homeData";
      break;
    case "srilankan-wildlife.html":
      localStorageKey = "wildlifeData";
      break;
    case "leopard.html":
      localStorageKey = "leopardData";
      break;
    case "department-of-wildlife-conservation.html":
      localStorageKey = "departmentData";
      break;
    case "animals-in-sl.html":
      localStorageKey = "animalsData";
      break;
    case "yala.html":
      localStorageKey = "yalaData";
      break;
    case "wilpattu.html":
      localStorageKey = "wilpattuData";
      break;
  }
  // or dynamically get this value
  window.open(
    `editor.html?key=${localStorageKey}`, // dynamically set the key
    "Editor",
    "width=600,height=400"
  );
}
