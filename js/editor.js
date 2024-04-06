const urlParams = new URLSearchParams(window.location.search);
const localStorageKey = urlParams.get("key");
const jsonData = JSON.parse(localStorage.getItem(localStorageKey));

function renderInputs(data, parentElement) {
  for (const key in data) {
    const newParentElement = document.createElement("div");
    parentElement.appendChild(newParentElement);

    if (typeof data[key] === "object" && !Array.isArray(data[key])) {
      newParentElement.innerHTML = `<h3>${key}</h3>`;
      renderInputs(data[key], newParentElement);
    } else if (Array.isArray(data[key])) {
      const arrayElement = document.createElement("div");
      arrayElement.innerHTML = `<h4>${key}</h4>`;
      newParentElement.appendChild(arrayElement);

      data[key].forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `<label>${key} ${index + 1}</label>`;

        const newElement = document.createElement("input");
        newElement.setAttribute("type", "text");
        newElement.setAttribute("value", JSON.stringify(item)); // Convert object to string
        newElement.addEventListener("input", (e) => {
          data[key][index] = JSON.parse(e.target.value); // Parse string back to object
        });

        itemElement.appendChild(newElement);
        arrayElement.appendChild(itemElement);
      });
    } else {
      const newElement =
        data[key].length > 50
          ? document.createElement("textarea")
          : document.createElement("input");

      newElement.setAttribute(
        "type",
        data[key].length > 50 ? "textarea" : "text"
      );
      newElement.value = data[key];
      newElement.addEventListener("input", (e) => {
        data[key] = e.target.value;
      });

      const labelElement = document.createElement("label");
      labelElement.textContent = key;
      newParentElement.appendChild(labelElement);
      newParentElement.appendChild(newElement);
    }
  }
}

const container = document.getElementById("container");
renderInputs(jsonData, container);

document.getElementById("update").addEventListener("click", () => {
  localStorage.setItem(localStorageKey, JSON.stringify(jsonData));
  alert("Data updated successfully!");
});
