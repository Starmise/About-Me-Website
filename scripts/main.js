let emptyElement = document.querySelector(".about .empty");
let titleElement = document.querySelector(".about .title");

let figureElements = document.querySelectorAll(".service figure");

window.alert("Koromaru Supremacy");

// figureElements.forEach(function (element) {
//   console.log(element);

//   element.style.background = "green";
//   emptyElement.style.background = "red";
// });

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) {
  console.log(event.clientX);
  emptyElement.style.flexBasis = event.clientX + "px";
  titleElement.style.flexBasis = event.clientY / 2 + "px";

  figureElements.forEach(function (element) {
    element.style.flexBasis = event.clientX + "px";
    // element.style.flexBasis (window.innerWidth - event.clientX) + 'px'; // Efecto "invertido"
  });
}
