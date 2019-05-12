import $ from "jquery";
export function moveOnHover() {
  const $images = $("img");

  $(document).on("mousemove", function(e) {
    var ax = -($(window).innerWidth() / 2 - e.pageX) / 100;
    var ay = ($(window).innerHeight() / 2 - e.pageY) / 100;
    $images.each((i, e) => {
      $(e).attr(
        "style",
        "transform: rotateY(" +
          ax +
          "deg) rotateX(" +
          ay +
          "deg);-webkit-transform: rotateY(" +
          ax +
          "deg) rotateX(" +
          ay +
          "deg);-moz-transform: rotateY(" +
          ax +
          "deg) rotateX(" +
          ay +
          "deg)"
      );
    });
  });
}
