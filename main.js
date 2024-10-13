const btn = document.querySelectorAll(".share");

const profile = document.querySelector(".user__profile");
const social = document.querySelector(".user__social");
const socialBtn = document.querySelector(".social__share");
const profileBtn = document.querySelector(".profile__share");

for (let i = 0; i <= btn.length - 1; i++) {
  btn[i].addEventListener("click", () => {
    profile.classList.toggle("profileInactive");
    social.classList.toggle("socialInactive");
    social.classList.toggle("bgActive");
    socialBtn.classList.toggle("btnActive");
  });
}

document.addEventListener("click", (e) => {
  if (!social.contains(e.target) && !profileBtn.contains(e.target)) {
    social.classList.add("socialInactive");
    social.classList.remove("bgActive");
    profile.classList.remove("profileInactive");
    socialBtn.classList.remove("btnActive");
  }
});
