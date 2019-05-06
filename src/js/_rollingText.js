import $ from "jquery";
// import "../scss/main.scss";
import { debounce } from "./_debounce";

export function rollingText(title) {
  const canvas = document.createElement("canvas");
  let $introWidth = $(".about").width();

  canvas.width = $introWidth;
  const ctx = canvas.getContext("2d");

  ctx.font = "bold 60px Roboto Condensed";
  ctx.textBaseline = "top";
  ctx.strokeText("ILLUSTRATIONS", ($introWidth / 3) * 0, 0);
  ctx.strokeText("ILLUSTRATIONS", ($introWidth / 3) * 1, 0);
  ctx.strokeText("ILLUSTRATIONS", ($introWidth / 3) * 2, 0);
  ctx.strokeText("ILLUSTRATIONS", ($introWidth / 3) * 3, 0);
  const sectionTitle = document.querySelector(".title__illustrations");
  let step,
    steps = 0;
  const delay = 20;
  const textAnimation = () => {
    step++;
  };

  sectionTitle.appendChild(canvas);
}

// export function rollingText(text, element) {
//   let $viewWidth = $(window).width();

//   $(window).on("resize", function debounce() {
//     $viewWidth = $(window).width();
//     return $viewWidth;
//   });

//   setInterval(() => {
//     const $placeholder = $(element);
//     let $title = $(`<h1>${text}</h1>`);
//     $title.css("left", $viewWidth);

//     $title.animate({ left: "-500px" }, 20000, "linear", function() {
//       $(this).remove();
//     });

//     $placeholder.append($title);
//   }, (1 / $viewWidth) * 2000 * 3000);
// }
