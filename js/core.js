const currentPage = window.location.pathname.split("/").pop();
console.log(currentPage);
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const isAuthenticated = currentUser ? true : false;

// Fetch data and store in localStorage

if (isAuthenticated) {
  const logoutBtn = `<li><a id="logout" style="cursor: pointer;">Logout</a></li>`;
  const editButton = `<li><a id="openEditor" style="cursor: pointer;">Edit Content 📝</a></li>`;
  document.querySelector(".menu").insertAdjacentHTML("beforeend", editButton);
  document.querySelector(".menu").insertAdjacentHTML("beforeend", logoutBtn);
  document
    .getElementById("openEditor")
    .addEventListener("click", openEditorPopup);
  document.getElementById("logout").addEventListener("click", logout);
} else {
  const loginBtn = `<li><a href="login.html">Login</a></li>`;
  document.querySelector(".menu").insertAdjacentHTML("beforeend", loginBtn);
}

// Add event listener for the dynamically created button

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

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
  alert("You have been logged out");
}

const newsletterEmail = document.getElementById("newsletterEmail");
const subscribeBtn = document.getElementById("subscribe");

subscribeBtn.addEventListener("click", () => {
  if (newsletterEmail.value) {
    let newsletterData =
      JSON.parse(localStorage.getItem("newsletterData")) || [];
    newsletterData.push(newsletterEmail.value);
    localStorage.setItem("newsletterData", JSON.stringify(newsletterData));
    alert("Subscribed successfully!");
  } else {
    alert("Please enter your email address");
  }
});
