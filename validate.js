const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const pswInput = document.querySelector("#psw");
const pswrepeatInput = document.querySelector("#psw-repeat");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let emailPattern = /^\S+@\S+\.\S+$/;
  if (!emailPattern.test(emailInput.value)) {
    alert("Please enter a valid email address");
    emailInput.focus();
    return false;
  }

  if (pswInput.value.trim() === "") {
    alert("Please enter the password");
    nameInput.focus();
    return false;
  }

  if (
    pswrepeatInput.value.trim() === "" ||
    pswInput.value.trim() !== pswrepeatInput.value.trim()
  ) {
    alert("Password mismatch");
    nameInput.focus();
    return false;
  }

  form.submit();
});
