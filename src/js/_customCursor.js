import $ from "jquery";

export function customCursor() {
  const $cursor = $("#cursor");
  const $svg = $cursor.find("circle");

  $("body").on("mousemove", e => {
    $cursor.css({ top: e.pageY + "px", left: e.pageX + "px" });
  });

  $("img, .language a")
    .mouseenter(() => {
      $cursor.css({ transform: "scale(0.3)" });
      $svg.css({
        fill: "orangered"
      });
    })
    .mouseleave(() => {
      $cursor.css({ transform: "scale(1)" });
      $svg.css({
        fill: "none"
      });
    });
}
