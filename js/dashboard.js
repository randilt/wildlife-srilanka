if (!localStorage.getItem("currentUser")) {
  alert("You are not logged in. Redirecting to login page");
  window.location.href = "login.html";
}

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const subscriptions = JSON.parse(localStorage.getItem("newsletterData")) || [];
document.getElementById(
  "welcomeMessage"
).textContent = `Welcome ${currentUser.username}, Your Role: ${currentUser.role}`;

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
  alert("You have been logged out");
}
document.getElementById("logoutBtn").addEventListener("click", logout);

if (currentUser.role === "admin") {
  document.getElementById("subscriptionsList").innerHTML = subscriptions
    .map((email) => `<li>${email}</li>`)
    .join("");
}
