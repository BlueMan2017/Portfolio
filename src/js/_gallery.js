import $ from "jquery";

export function gallery() {
  const createGallery = () => {};

  const $galleryContainer = $(".illustrations__gallery");
  const $galleryWrapper = $(".illustrations__items");
  const $winWidth = $(window).width();
  console.log($winWidth);
  $galleryWrapper.css("left", $winWidth);
  //   $galleryContainer.hover(function() {});

  $(window).on("scroll", function() {
    const $scrollPos = $(window).scrollTop();
    const $winHeight = $(window).height();

    const $elemPos = $galleryContainer.position().top;
    console.log($winWidth);

    if ($scrollPos > $elemPos - $winHeight / 2) {
      $galleryWrapper.css("left", $winWidth - $scrollPos * 2);
    }
  });
}
