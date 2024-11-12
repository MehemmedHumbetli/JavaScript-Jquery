$(document).ready(function() {
    const images = [
        "images/image1.jpeg",
        "images/image2.webp",
        "images/image3.png",
        "images/image4.jpg",
        "images/image5.png"
    ];
    
    let currentIndex = 0;
    
    $('#mainImage').attr('src', images[currentIndex]);
    $('.thumbnail').each(function(index) {
        $(this).attr('src', images[index]);
    });

    $('.prev').click(function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateMainImage();
    });

    $('.next').click(function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateMainImage();
    });

    $('.thumbnail').click(function() {
        currentIndex = $(this).data('index');
        updateMainImage();
    });

    function updateMainImage() {
        $('#mainImage').attr('src', images[currentIndex]);
        $('.thumbnail').removeClass('active');
        $('.thumbnail').eq(currentIndex).addClass('active');
    }
});
