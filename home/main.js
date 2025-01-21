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


// Xử lý cuộn trang -> stick header
let lastScrollTop = 0; // Vị trí cuộn trang trước đó
const header = $('header');

window.addEventListener('scroll', function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > 100) {
        if (currentScroll > lastScrollTop) {
            // Nếu cuộn xuống, ẩn header
            header.addClass('hidden');
            $('.nav-full').removeClass('moveDown');
        } else {
            // Nếu cuộn lên, hiện lại header
            header.removeClass('hidden');
            $('.nav-full').addClass('moveDown');
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Đảm bảo không cuộn qua phần đầu trang
});
// End header