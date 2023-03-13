function showTooltip(event) {
  let tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = event.target.alt;
  tooltip.style.top = event.pageY + 10 + "px";
  tooltip.style.left = event.pageX + "px";
  tooltip.style.display = "block";
}

function hideTooltip() {
  let tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
