import $ from "jquery";

export function titleAnimation(section) {
  const $titleWrapper = $(`${section}`);
  // const title = "ILLUSTRATIONS".split("");

  // const createLetter = () => {
  //   console.log(title);
  //   title.forEach(e => {
  //     let $span = $(`<span>${e}</span>`);
  //     $titleWrapper.append($span);
  //   });
  // };

  // createLetter();

  const textApear = elem => {
    if ($titleWrapper.css("opacity") !== 0) {
      $(elem).each((i, e) => {
        $(e).css("transform", "matrix(1, 0, 0, 1, 0, 0)");
      });
    } else {
      $(elem).each((i, e) => {
        $(e).css("transform", "matrix(1, 0, 0, 1, 0, 100)");
      });
    }
  };

  $(window).scroll(function() {
    const $scrollPos = $(window).scrollTop();
    const $winHeight = $(window).height();
    const $header = $titleWrapper.find("h1");
    const $spans = $titleWrapper.find("span");
    if ($scrollPos >= $winHeight / 2) {
      $titleWrapper.css("opacity", 1);
      textApear($header);
      textApear($spans);
    } else if ($(window).scrollTop() == 0) {
      $titleWrapper.css("opacity", 0);
      textApear($spans);
    }
  });
}

// TweenMax.globalTimeScale(4);
// const t1 = new TimelineLite({
//   paused: true,
//   delay: 0.5,
//   onComplete: function() {
//     console.log("done");
//   }
// });

// const $elem = $titleWrapper.find("span");
// for (let i = 0; i < $elem.length; i++) {
//   const elem = $elem[i];
//   t1.add(
//     TweenLite.to(elem, 0.1, {
//       y: 0,
//       autoAlpha: 1,
//       ease: Power1.easeOut,
//       delay: i * 0.1
//     })
//   );
// }
