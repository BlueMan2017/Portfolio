import $ from "jquery";

export function canvasAnim() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  let w, h;

  document.getElementById("logos").appendChild(canvas);

  function addContext() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = 600;
    ctx.fillStyle = "#222222";
    ctx.font = "bold 80px Roboto Condensed";
    ctx.fillText("LOGOS", w / 2, h / 2);
  }
  addContext();

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect();
  }
}
