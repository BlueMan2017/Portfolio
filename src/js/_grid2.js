import $ from "jquery";
import { debounce } from "./_debounce";
import pic1 from "../img/me_in_280.jpg";
import pic2 from "../img/pic1.jpg";
import pic3 from "../img/pic2.jpg";

export function gridGallery() {
  let $viewWidth = $(window).width();
  let imageNum = 1;
  let columnNum = 1;
  let rowNum = 1;
  const images = [pic1, pic2, pic3];

  const randomNum = max => {
    let num = Math.floor(Math.random() * max + 1);
    return num;
  };

  const addImage = n => {
    const randomImg = images[Math.floor(Math.random() * images.length)];
    $(`.img-${n}`).append(`<img src=${randomImg}/>`);
  };

  const createGrid = ({ col, row, src }) => {
    $(".about__images").empty();
    $(".about__images").css({
      "grid-template-columns": `repeat(${col}, 140px)`,
      "grid-template-rows": `repeat(${row}, 140px)`
    });

    let num = col * row;

    for (let i = 1; i <= num; i++) {
      $(".about__images").append(`<div class='img-${i}'></div`);
    }

    addImage(randomNum(4));
    addImage(randomNum(8));
    addImage(randomNum(10));
    addImage(randomNum(12));
  };

  if ($viewWidth > 1260) {
    createGrid({
      col: 4,
      row: 3
    });
  } else if ($viewWidth > 1080) {
    createGrid({
      col: 3,
      row: 3
    });
  } else if ($viewWidth > 900) {
    createGrid({
      col: 2,
      row: 3
    });
  } else {
    createGrid({
      col: 1,
      row: 2
    });
  }

  $(window).on(
    "resize",
    debounce(function() {
      $viewWidth = $(window).width();
      if ($viewWidth > 1260) {
        createGrid({
          col: 4,
          row: 3
        });
      } else if ($viewWidth > 1080) {
        createGrid({
          col: 3,
          row: 3
        });
      } else if ($viewWidth > 900) {
        createGrid({
          col: 2,
          row: 3
        });
      } else {
        createGrid({
          col: 1,
          row: 2
        });
      }
    }, 500)
  );

  $(window).scroll(() => {
    const $scrollPos = $(window).scrollTop();
    $viewWidth = $(window).width();
    if ($scrollPos === 0) {
      if ($viewWidth > 1260) {
        createGrid({
          col: 4,
          row: 3
        });
      } else if ($viewWidth > 1080) {
        createGrid({
          col: 3,
          row: 3
        });
      } else if ($viewWidth > 900) {
        createGrid({
          col: 2,
          row: 3
        });
      } else {
        createGrid({
          col: 1,
          row: 2
        });
      }
    }
  });
}
