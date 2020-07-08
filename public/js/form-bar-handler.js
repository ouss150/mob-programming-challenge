const form = document.getElementById("form-bar");
const inputName = document.getElementById("name");
const inputDesc = document.getElementById("description");
const inputs = form.querySelectorAll(".input");
const btn = form.querySelector(".btn");

function sendForm() {
  axios
    .post("/api/bar", {
      name: inputName.value,
      description: inputDesc.value,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

btn.onclick = sendForm;
