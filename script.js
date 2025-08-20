document.addEventListener("DOMContentLoaded", function () {
  // Get top ul item
  const expander = document.getElementById("toggle");
  const expandIcon = document.getElementById("menu-expand");
  const collapseIcon = document.getElementById("menu-collapse");
  const menu = document.getElementById("menu");

  // Add click listener to top of menu
  expander.addEventListener("click", function () {
    console.log("Toggling");
    menu.classList.toggle("expand");
    expandIcon.classList.toggle("hide");
    collapseIcon.classList.toggle("hide");
  });
});
