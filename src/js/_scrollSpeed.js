import $ from "jquery";
import velocity from "velocity-animate";
export function wheel(event) {
  let delta = 0;
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;

  handle(delta);
  //   if (event.preventDefault) event.preventDefault();
  //   event.returnValue = false;
}

function handle(delta) {
  const time = 1000;
  const distance = 300;

  console.log("scroll");

  $("html, body")
    .stop()
    .velocity(
      {
        scrollTop: $(window).scrollTop() - distance * delta
      },
      time
    );
}
