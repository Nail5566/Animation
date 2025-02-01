let imgElement = new Image();
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

document.getElementById("uploadImage").addEventListener("change", function(e) {
  let reader = new FileReader();
  reader.onload = function(event) {
    imgElement.src = event.target.result;
    imgElement.onload = function() {
      ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
    }
  };
  reader.readAsDataURL(e.target.files[0]);
});

function startAnimation() {
  let x = 0;
  let y = 0;
  let dx = 2;
  let dy = 2;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgElement, x, y, 100, 100);
    x += dx;
    y += dy;

    // Bounce animation
    if (x + 100 > canvas.width || x < 0) dx = -dx;
    if (y + 100 > canvas.height || y < 0) dy = -dy;

    requestAnimationFrame(animate);
  }

  animate();
}
