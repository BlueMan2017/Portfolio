import "../scss/main.scss";
import { wheel, handle } from "./_scrollSpeed";
import { gridGallery } from "./_grid2";
import { titleAnimation } from "./_titleAnimation";
import { customCursor } from "./_customCursor";
import { moveOnHover } from "./_moveOnHover";
// import { canvasAnim } from "./_canvas";
import { rollingText } from "./_rollingText";

// import { horizontalScroll } from "./_horizontalScroll";

document.addEventListener("DOMContentLoaded", function() {
  // if (window.addEventListener)
  //   window.addEventListener("DOMMouseScroll", wheel, false);
  // window.onmousewheel = document.onmousewheel = wheel;
  // canvasAnim();

  // animation();
  // titleAnimation(".illustrations__title", "ILLUSTRATIONS");
  titleAnimation(".websites__title", "WEBSITES");
  titleAnimation(".print__title", "PRINT");
  // rollingText("illustrations", ".title__illustrations");
  rollingText();
  gridGallery();
  customCursor();

  // moveOnHover();
  // horizontalScroll();
  // gallery();
});
