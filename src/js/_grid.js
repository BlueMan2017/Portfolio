import $ from "jquery";
import { debounce } from "./_debounce";
import pic1 from "../img/me_in_280.jpg";
import pic2 from "../img/pic1.jpg";
import pic3 from "../img/pic2.jpg";

export function gridGallery() {
  let $viewWidth = $(window).width();
  let figureNum = 1;
  let columnNum = 1;
  let rowNum = 1;
  const images = [pic1, pic2, pic3];

  const randomNum = max => {
    let num = Math.floor(Math.random() * max + 1);
    return num;
  };

  const createGrid = ({ fig, col, row, pic }) => {
    const $figure = $(`<figure class="figure-${fig}">
      <img src="${pic}" class="figure-img" /></figure>`);
    $figure.css({
      "grid-column": `${col}/${col}`,
      "grid-row": `${row}/${row}`
    });
    $(".about__images").append($figure);
  };

  const addRandomGrid = (fig, col, row, pic) => {
    $(".about__images").empty();

    figureNum = randomNum(fig);
    for (let i = 1; i <= figureNum; i++) {
      const randomImg = images[Math.floor(Math.random() * images.length)];
      columnNum = randomNum(col);
      rowNum = randomNum(row);
      createGrid({
        fig: i,
        col: columnNum,
        row: rowNum,
        pic: randomImg
      });
    }
  };

  if ($viewWidth > 1260) {
    addRandomGrid(6, 4, 3);
  } else if ($viewWidth > 1080) {
    addRandomGrid(5, 3, 3);
  } else if ($viewWidth > 900) {
    addRandomGrid(4, 2, 3);
  } else {
    addRandomGrid(2, 1, 2);
  }

  $(window).on(
    "resize",
    debounce(function() {
      $viewWidth = $(window).width();
      if ($viewWidth > 1260) {
        addRandomGrid(6, 4, 3);
      } else if ($viewWidth > 1080) {
        addRandomGrid(5, 3, 3);
      } else if ($viewWidth > 900) {
        addRandomGrid(4, 2, 3);
      } else {
        addRandomGrid(2, 1, 2);
      }
    }, 500)
  );

  $(window).scroll(function() {
    if ($(window).scrollTop() === 0) {
      if ($viewWidth > 1260) {
        addRandomGrid(6, 4, 3);
      } else if ($viewWidth > 1080) {
        addRandomGrid(5, 3, 3);
      } else if ($viewWidth > 900) {
        addRandomGrid(4, 2, 3);
      } else {
        addRandomGrid(2, 1, 2);
      }
    }
  });
}
