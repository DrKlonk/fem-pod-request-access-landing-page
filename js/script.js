const emailInput = document.querySelector(".pod-request__input");
const emailLabel = document.querySelector(".pod-request__label");
const submitButton = document.querySelector(".pod-request__button");
const warningColor = "#fb3e3e";
const successColor = "#54e6af";

submitButton.addEventListener("click", checkInput);

function checkInput(e) {
  // Prevent relocating
  e.preventDefault();

  processEmailInput(emailInput.value);

  showLabel();
}

function processEmailInput(email) {
  if (!email) {
    emailLabel.innerText = "Oops! Please add your email";
    emailLabel.style.color = warningColor;
  } else if (!validateEmail(email)) {
    emailLabel.innerText = "Oops! Please check your email";
    emailLabel.style.color = warningColor;
  } else {
    // This is the place to do something with the input
    emailLabel.innerText = "Your email address has been registered";
    emailLabel.style.color = successColor;
    emailInput.value = ""; // Reset the input value
  }
}

function showLabel() {
  emailLabel.classList.add("visible");

  setTimeout(() => {
    emailLabel.classList.remove("visible");
  }, 4000);
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
