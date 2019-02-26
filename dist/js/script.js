let Toggle = document.getElementById("toggle");
Toggle.innerHTML = "menu";
Toggle.addEventListener("click", function() {
  let current = Toggle.innerHTML;
  if (current === "menu") {
    Toggle.innerHTML = "close";
  } else {
    Toggle.innerHTML = "menu";
  }
});

let Nav = document.getElementsByClassName("scroll");
for (i = 0; i < Nav.length; i++) {
  Nav[i].addEventListener("click", function() {
    Toggle.innerHTML = "menu";
  });
}

let tableLine = document.getElementsByTagName("tr");
for (i = 0; i < tableLine.length; i++) {
  if (i % 2 == 1) {
    tableLine[i].style.background = "rgb(16, 24, 48)";
  } else {
    tableLine[i].style.background = "rgb(18, 28, 59)";
  }
}
