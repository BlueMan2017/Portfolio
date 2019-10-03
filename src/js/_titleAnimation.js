import $ from "jquery";
import { TweenMax, TimelineMax, Power4 } from "gsap";

export function titleAnimation(section, title) {
  const $titleWrapper = $(`${section}`).find(".title");

  // const titleName = title.split("");

  // const createLetter = () => {
  //   console.log(titleName);
  //   titleName.forEach(e => {
  //     let $span = $(`<span class='hidden'>${e}</span>`);
  //     $titleWrapper.append($span);
  //   });
  // };

  // createLetter();

  const tl = new TimelineMax({});
  tl.staggerTo(".hidden", 1.5, { y: "0", ease: Power4.easeOut }, 0.15);

  const textApear = elem => {
    if ($titleWrapper.css("display") !== "none") {
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
    const $titlePos = $(`${section}`).offset().top;

    const $header = $titleWrapper.find("h1");
    if (
      $scrollPos > $titlePos - $winHeight / 2 &&
      $scrollPos < $titlePos + $winHeight / 8
    ) {
      $titleWrapper.css("display", "block");
      textApear($header);
    } else if (
      $scrollPos > $titlePos + $winHeight / 8 ||
      $scrollPos < $titlePos - $winHeight ||
      $scrollPos == 0
    ) {
      $titleWrapper.css("display", "none");
      textApear($header);
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
