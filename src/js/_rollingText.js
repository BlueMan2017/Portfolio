import $ from "jquery";
// import "../scss/main.scss";
import { debounce } from "./_debounce";

export function rollingText(section) {
  const $titleContainer = $(".print__title");

  // tworzenie elementu z atrybutami
  const createElem = ({ namespaceURI, qualifiedName, attr, child, text }) => {
    let elem;
    if (namespaceURI) {
      elem = document.createElementNS(namespaceURI, qualifiedName);
    } else {
      elem = document.createElement(qualifiedName);
    }
    if (attr) {
      Object.keys(attr).forEach(key => {
        elem.setAttribute(key, attr[key]);
      });
    }
    if (text) {
      elem.appendChild(document.createTextNode(text));
    }
    if (child) {
      elem.appendChild(child);
    }

    return elem;
  };

  const svgElem = createElem({
    namespaceURI: "http://www.w3.org/2000/svg",
    qualifiedName: "svg",
    attr: { width: 800, height: 400 },
    child: createElem({
      namespaceURI: "http://www.w3.org/2000/svg",
      qualifiedName: "text",
      attr: {
        id: "print-title",
        x: 0,
        y: 100,
        width: 700,
        height: 200,
        fill: "orangered",
        style: "font-size:100px; font-weight:bold"
      },
      text: "LOGOS LOGOS LOGOS LOGOS",
      child: createElem({
        namespaceURI: "http://www.w3.org/2000/svg",
        qualifiedName: "animate",
        attr: {
          attributeName: "x",
          from: "-100%",
          to: "100%",
          dur: "10s",
          repeatCount: "indefinite"
        }
      })
    })
  });

  const headerWrapper = createElem({
    qualifiedName: "h1"
  });
  // const svgRect = createElem({
  //   type: "svg",
  //   attr: { viewBox: "0 0 200 200", xmlns: "http://www.w3.org/2000/svg" },
  //   child: createElem({
  //     type: "rect",
  //     attr: { width: 120, height: 120 }
  //   })
  // });
  // headerWrapper.appendChild(svgElem);
  // svgElem.append(svgRect);
  // $titleContainer.append(headerWrapper);
  // $titleContainer.append(svgRect);
  // canvas.width = $introWidth;
  // const ctx = canvas.getContext("2d");

  // ctx.font = "bold 60px Roboto Condensed";
  // ctx.textBaseline = "top";
  // ctx.strokeText("ILLUSTRATIONS", ($introWidth / 3) * 0, 0);
  // ctx.strokeText("ILLUSTRATIONS", ($introWidth / 3) * 1, 0);
  // ctx.strokeText("ILLUSTRATIONS", ($introWidth / 3) * 2, 0);
  // ctx.strokeText("ILLUSTRATIONS", ($introWidth / 3) * 3, 0);
  // const sectionTitle = document.querySelector(".print__title");
  // let step,
  //   steps = 0;
  // const delay = 20;
  // const textAnimation = () => {
  //   step++;
  // };

  // sectionTitle.appendChild(canvas);
}

// export function rollingText(text, element) {
//   let $viewWidth = $(window).width();

//   $(window).on("resize", function debounce() {
//     $viewWidth = $(window).width();
//     return $viewWidth;
//   });

//   setInterval(() => {
//     const $placeholder = $(element);
//     let $title = $(`<h1>${text}</h1>`);
//     $title.css("left", $viewWidth);

//     $title.animate({ left: "-500px" }, 20000, "linear", function() {
//       $(this).remove();
//     });

//     $placeholder.append($title);
//   }, (1 / $viewWidth) * 2000 * 3000);
// }
