function randomGridGallery() {
  let figure = 1;
  let column = 1;
  let row = 1;

  $(window).resize(() => {
    $viewWidth = $(window).width();
    if ($viewWidth > 1280) {
      figure = Math.floor(Math.random() * 6 + 1);
      column = Math.floor(Math.random() * 4 + 1);
      row = Math.floor(Math.random() * 3 + 1);
    }
  });
}
