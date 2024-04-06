// Fetch data and store in localStorage
fetch("data/users.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("usersData", JSON.stringify(data));
  })
  .catch((error) => console.error("Error fetching data:", error));

// Authentication logic
function authenticate(username, password) {
  const usersData = JSON.parse(localStorage.getItem("usersData"));
  if (usersData) {
    const user = usersData.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }
  }
  return false;
}

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const isAuthenticated = authenticate(username.value, password.value);
  if (isAuthenticated) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
});
