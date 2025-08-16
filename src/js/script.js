console.log("Script loaded successfully!");

function exibirDropdown() {
  var x = document.getElementById("links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    x.style.flexDirection = "column";
    x.style.gap = "1rem"
    x.style.position = "absolute";
    x.style.top = "64px";
    x.style.left = "0";
    x.style.width = "100%";
    x.style.padding = "1rem";
    x.style.backgroundColor = "#fff";
  }
}
