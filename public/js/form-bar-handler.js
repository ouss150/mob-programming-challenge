const allBars = document.getElementById("all-bars");
const form = document.getElementById("form-bar");
const inputName = form.querySelector("#name");
const inputDesc = form.querySelector("#description");
const btnPost = form.querySelector(".btn");
const btnGet = document.getElementById("btn-get-all-bars");

function sendForm() {
  axios
    .post("/api/bar", {
      name: inputName.value,
      description: inputDesc.value,
    })
    .then((response) => {
      displayNewBar(response.data);
      listenDeleteButtons();
    })
    .catch((error) => console.log(error));
}

function getDataFromServer() {
  axios
    .get("/api/bar/all")
    .then((response) => {
      const allBars = response.data;
      allBars.forEach(displayNewBar);
      listenDeleteButtons();
    })
    .catch((error) => console.log(error));
}

function deleteDataFromServer(evt) {
  const clickedButton = evt.target;
  const barID = clickedButton.getAttribute("data-bar-id");

  axios
    .delete(`/api/bar/${barID}`)
    .then((apiResponse) => {
      removeBar(clickedButton);
    })
    .catch((apiError) => {
      console.log(apiError);
    });
}

function removeBar(previousBtn) {
  previousBtn.parentElement.remove();
}

function displayNewBar(newBar) {
  allBars.innerHTML += `<li>
        <h3>${newBar.name}</h3>
        <p>${newBar.description}</p>
        <button class="btn delete" data-bar-id="${newBar._id}">delete</button>
    </li>`;
}

function listenDeleteButtons() {
  const allBtns = allBars.querySelectorAll(".btn.delete");
  allBtns.forEach((btn) => (btn.onclick = deleteDataFromServer));
}

btnPost.onclick = sendForm;
btnGet.onclick = getDataFromServer;
