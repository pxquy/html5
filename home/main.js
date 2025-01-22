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




$(document).ready(function () {
    imageSlick('.top-slider-content', '.top-slider-thumb');
    //Infinity loading product item
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > $(document).height() - $(window).height() - 1500) {
    //         var position = Math.round(($(document).height() - $(window).height() - 1000) / 1000);
    //         if (position > currrentPage && !loading) {
    //             loadMore(1);
    //         }
    //     }
    // });
});

//slider banner
imageSlick = function (imagePreviewSelector, imageThumbSelector) {

    var $imagePreview = $(imagePreviewSelector);
    // var $imageThumb = $(imageThumbSelector);

    // Kiểm tra và khởi tạo carousel cho .slider-banner nếu tồn tại
    if ($imagePreview.length) {
        $imagePreview.slick({
            slidesToShow: 1, // Số slide cần hiển thị
            slidesToScroll: 1, // Số slide muốn cuộn
            arrows: true, // Hiển thị mũi tên điều hướng
            autoplay: true, // Chế độ tự động chạy
            autoplaySpeed: 2500, // Tự động chạy theo mini giây
            dots: true, // Hiển thị các chấm tròn thể hiện số trang
            // pauseOnFocus: true,
            // pauseOnHover: true,
            // pauseOnDotsHover: true,
            // asNavFor: $imageThumb, // Liên kết với carousel có class là .slick-thumb
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false // Loại bỏ mũi tên điều hướng ở breakpoint 768px
                    }
                }
            ],
            prevArrow: '<button type="button" data-role="none" class="slick-product-prev icon-leftar" aria-label="Previous" tabindex="0" role="button"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-product-next icon-rightar" aria-label="Next" tabindex="0" role="button"><ion-icon name="chevron-forward-outline"></ion-icon></button>'
        });

        $imagePreview.slick('setPosition');

        // Gắn sự kiện click bên trong slider-banner để đảm bảo không thay đổi kích thước
        $imagePreview.on('click', '.slick-slide', function (event) {
            event.stopPropagation();
        });
    }

    // Kiểm tra và khởi tạo carousel cho .slick-thumb nếu tồn tại
    // if ($imageThumb.length) {
    //     var slidesToShow = 4; // Số slide cần hiển thị ban đầu
    //     var slideCount = $imageThumb.children().length;

    //     // Nếu số lượng slide ít hơn hoặc bằng slidesToShow thì disable transform
    //     if (slideCount <= slidesToShow) {
    //         $imageThumb.addClass('none-transform');
    //     }

    //     $imageThumb.slick({
    //         slidesToShow: slidesToShow, // Số slide cần hiển thị
    //         slidesToScroll: 1, // Số slide muốn cuộn
    //         asNavFor: $imagePreview, // Liên kết với carousel có class là .slider-banner
    //         centerMode: false, // Chế độ trung tâm
    //         focusOnSelect: true, // Tập trung vào việc lựa chọn
    //         arrows: false, // Không hiển thị mũi tên điều hướng
    //         infinite: false, // Không vô hạn lăp lại các slide
    //         dots: true,
    //         swipeToSlide: true, // Cho phép cuộn slide khi vuốt trên màn hình cảm ứng
    //     });
    // }
}

// Thay đổi ảnh khi hover vào ảnh mạng xã hội
function changesrc(src) {
    var source = $(src).attr("src");
    if (source.endsWith("active.png")) source = source.replace("_active.png", ".png")
    else source = source.replace(".png", "_active.png")
    $(src).attr("src", source);
  }