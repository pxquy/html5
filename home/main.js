// Stick header
$(".slide-deal-header").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  loop: true,
});

const menuStick = document.querySelector(".menu_stick");
const nextButton = document.getElementById("icon_next");
const backButton = document.getElementById("icon_back");

let currentOffset = 0; // Vị trí hiện tại
const itemWidth = 200; // Chiều rộng của một mục (bao gồm cả khoảng cách)
const maxOffset = menuStick.scrollWidth - menuStick.parentElement.offsetWidth; // Phần thừa bên phải

nextButton.addEventListener("click", () => {
  if (Math.abs(currentOffset) < maxOffset) {
    currentOffset -= itemWidth;
    menuStick.style.transform = `translateX(${currentOffset}px)`;
  }
});

backButton.addEventListener("click", () => {
  if (currentOffset < 0) {
    currentOffset += itemWidth;
    menuStick.style.transform = `translateX(${currentOffset}px)`;
  }
});

// End stick header

//article image
const images = document.querySelectorAll(".product_image img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentIndex = 0;

const showImages = () => {
  images.forEach((img, index) => {
    img.style.display = index === currentIndex ? "block" : "none";
  });
};

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImages();
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImages();
});

showImages();

//End article image

// Video

const video = document.getElementById("myVideo");

video.addEventListener("ended", () => {
  console.log("Video đã kết thúc."); // In ra console (tuỳ chọn)
  video.currentTime = 0; // Đưa video về đầu
  video.pause(); // Dừng video
});

// end video
