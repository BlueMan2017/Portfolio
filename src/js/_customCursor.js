import $ from "jquery";

export function customCursor() {
  const $cursor = $("<div class='cursor'></div>");
  $("body").append($cursor);

  $("body").on("mousemove", e => {
    $cursor.css({ top: e.pageY + "px", left: e.pageX + "px" });
  });

  $("img, .language a")
    .mouseenter(() => {
      $cursor.css({
        background: "orangered",
        height: "10px",
        width: "10px"
      });
    })
    .mouseleave(() => {
      $cursor.css({
        background: "transparent",
        height: "60px",
        width: "60px"
      });
    });
}
