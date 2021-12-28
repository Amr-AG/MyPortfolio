// links list
let lis = document.querySelectorAll("li");
let home = document.querySelector(".main");
let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let projects = document.querySelector(".projects");
let contact = document.querySelector(".contact");
let html = document.querySelector(".H");
let css = document.querySelector(".C");
let js = document.querySelector(".J");
let sass = document.querySelector(".S");
let Github = document.querySelector(".G");

//sections
let centerContent = document.querySelector(".center-content");
let aboutSection = document.querySelector(".about-section");
let skillsSection = document.querySelector(".skills-section");
let projectsSection = document.querySelector(".projects-section");
let contactSection = document.querySelector(".contact-section");

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    //Remove all active
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    //add active to your clicked
    e.currentTarget.classList.add("active");
  });
});

home.onclick = () => {
  centerContent.style.display = "flex";
  html.classList.remove("H-run");
  css.classList.remove("C-run");
  js.classList.remove("J-run");
  sass.classList.remove("S-run");
  Github.classList.remove("G-run");
  html.innerHTML = "";
  css.innerHTML = "";
  js.innerHTML = "";
  sass.innerHTML = "";
  Github.innerHTML = "";
  aboutSection.style.display = "none";
  skillsSection.style.display = "none";
  projectsSection.style.display = "none";
  contactSection.style.display = "none";
};
about.onclick = () => {
  aboutSection.style.display = "flex";
  html.classList.remove("H-run");
  css.classList.remove("C-run");
  js.classList.remove("J-run");
  sass.classList.remove("S-run");
  Github.classList.remove("G-run");
  html.innerHTML = "";
  css.innerHTML = "";
  js.innerHTML = "";
  sass.innerHTML = "";
  Github.innerHTML = "";
  centerContent.style.display = "none";
  skillsSection.style.display = "none";
  projectsSection.style.display = "none";
  contactSection.style.display = "none";
};
skills.addEventListener("click", (e) => {
  skillsSection.style.display = "flex";
  setTimeout(() => {
    html.classList.add("H-run");
    css.classList.add("C-run");
    js.classList.add("J-run");
    sass.classList.add("S-run");
    Github.classList.add("G-run");
    html.innerHTML = "92%";
    css.innerHTML = "90%";
    js.innerHTML = "88%";
    sass.innerHTML = "90%";
    Github.innerHTML = "94%";
  }, 1000);
  aboutSection.style.display = "none";
  centerContent.style.display = "none";
  projectsSection.style.display = "none";
  contactSection.style.display = "none";
});
projects.onclick = () => {
  projectsSection.style.display = "flex";
  html.classList.remove("H-run");
  css.classList.remove("C-run");
  js.classList.remove("J-run");
  sass.classList.remove("S-run");
  Github.classList.remove("G-run");
  html.innerHTML = "";
  css.innerHTML = "";
  js.innerHTML = "";
  sass.innerHTML = "";
  Github.innerHTML = "";

  centerContent.style.display = "none";
  aboutSection.style.display = "none";
  skillsSection.style.display = "none";
  contactSection.style.display = "none";
};
contact.onclick = () => {
  contactSection.style.display = "flex";
  html.classList.remove("H-run");
  css.classList.remove("C-run");
  js.classList.remove("J-run");
  sass.classList.remove("S-run");
  Github.classList.remove("G-run");
  html.innerHTML = "";
  css.innerHTML = "";
  js.innerHTML = "";
  sass.innerHTML = "";
  Github.innerHTML = "";
  centerContent.style.display = "none";
  aboutSection.style.display = "none";
  skillsSection.style.display = "none";
  projectsSection.style.display = "none";
};
window.onload = () => {
  centerContent.style.display = "flex";
  aboutSection.style.display = "none";
  skillsSection.style.display = "none";
  projectsSection.style.display = "none";
  contactSection.style.display = "none";
};
