const passwordBox = document.getElementById("password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const number = "0123456789";
const symbol = "@#$%^&*()~|}{[]></-=";

const allchars = upperCase + lowerCase + number + symbol;

console.log(lowerCase);

function createPassword() {
  password = "";
  while (12 > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  return password;
}

document.querySelector(".container button").addEventListener("click", () => {
  passwordBox.value = createPassword();
});

function copyPassword() {
  const str = passwordBox.value;
  return str;
}

document.querySelector("#copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyPassword());
    console.log("Copied");
  } catch (err) {
    console.log("Failed to copy " + err);
  }
});
