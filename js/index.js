window.onscroll = function () {
    let position = window.pageYOffset() || document.documentElement.scrollTop;

    let laptop = document.getElementById("laptopBanner");

    laptop.style.top = position * 0.1 + 'px';

}