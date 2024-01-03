import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

//input
document.querySelector("input").addEventListener("keyup", (e) => {
  e.target.value = e.target.value.toUpperCase();

  if (e.key == 3) {
    document.querySelector("body").style.background = "blue";
  }
});

//

document.querySelector(".btn").addEventListener("click", (e) => {
  console.log("Seni de alacağız. Çok yakında!");
});

document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    e.target.style.filter = "grayscale(1)";
  });

  element.addEventListener("mouseout", (e) => {
    e.target.style.filter = null;
  });
});

document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("dblclick", (e) => {
    e.target.style.transform = "scale(0.5)";
  });

  element.addEventListener("click", (e) => {
    e.target.style.transform = null;
  });
});

window.addEventListener("load", (e) => {
  setTimeout(() => {}, 2000);
});

const theInput = document.createElement("input");
theInput.setAttribute("type", "text");

theInput.addEventListener("focus", (e) => {
  e.target.value = "text";
  e.target.style.border = "5px solid blue";
});
document.querySelector(".content-section").append(theInput);

//navbar-focus
navBar.forEach((element) => {
  element.addEventListener("focus", (e) => {
    e.target.style.fontSize = "2rem";
  });

  element.addEventListener("blur", (e) => {
    e.target.style.fontSize = null;
  });
});

//

//content-section
document.querySelectorAll(".content-section").forEach((element) => {
  element.addEventListener("mousseover", () => {
    element.style.background = "lightblue";
  });

  item.addEventListener("mouseout", () => {
    item.style.background = null;
  });
});

//

//button buttons
document.querySelectorAll(".btn").forEach((element) => {
  element.addEventListener("click", (e) => {
    e.style.backgroundcolor = "black";
    e.style.color = "white";
  });
});

//
