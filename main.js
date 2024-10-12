const btn = document.querySelectorAll(".share");

const profile = document.querySelector(".user__profile");
const social = document.querySelector(".user__social");
const bgActive = document.querySelector(".user");

for (let i = 0; i <= btn.length - 1; i++) {
  btn[i].addEventListener("click", () => {
    profile.classList.toggle("inactive");
    social.classList.toggle("inactive");
    bgActive.classList.toggle("bgActive");
  });
}
