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
