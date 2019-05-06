import "../scss/main.scss";
import $ from "jquery";
import { gridGallery } from "./_grid2";
import { titleAnimation } from "./_titleAnimation";
import { customCursor } from "./_customCursor";
// import { gallery } from "./_gallery";
// import { horizontalScroll } from "./_horizontalScroll";

$(function() {
  // animation();
  titleAnimation(".illustrations__title");
  titleAnimation(".websites__title");
  // rollingText("illustrations", ".title__illustrations");
  gridGallery();
  customCursor();
  // horizontalScroll();
  // gallery();
});
