import "../scss/main.scss";
import $ from "jquery";

$(function() {
  rollingText("illustrations", ".title__illustrations");
});

function rollingText(text, element) {
  let $viewWidth = $(window).width();
  $(window).resize(() => {
    $viewWidth = $(window).width();
    console.log($viewWidth);
    return $viewWidth;
  });

  console.log($viewWidth);

  setInterval(() => {
    const $placeholder = $(element);
    let $title = $(`<h1>${text}</h1>`);
    $title.css("left", $viewWidth);

    $title.animate({ left: "-500px" }, 20000, "linear", function() {
      $(this).remove();
    });

    $placeholder.append($title);
    console.log((1 / $viewWidth) * 2000 * 1000);
  }, (1 / $viewWidth) * 2000 * 3000);
}
