var slider_img = document.getElementById('slide');
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var i = 0;

function prev() {
  i = (i - 1 + images.length) % images.length;
  setImg();
}

function next() {
  i = (i + 1) % images.length;
  setImg();
}

function setImg() {
  slider_img.src = "./images/" + images[i];
}
