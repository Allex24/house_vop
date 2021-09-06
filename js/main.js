// Кнопка наверх
var top_show = 400; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function() {
    $(window).scroll(function() { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function() { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

// burger
let menuBtn = document.querySelector('.navbar__togle');
let menu = document.querySelector('.navbar__wrap');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

// якорная ссылка

jQuery(function($) {
    $('a[href*="#"]').on('click.smoothscroll', function(e) {
        var hash = this.hash,
            _hash = hash.replace(/#/, ''),
            theHref = $(this).attr('href').replace(/#.*/, '');
        if (theHref && location.href.replace(/#.*/, '') != theHref) return;
        var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
        if (!$target.length) return;
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 600, 'swing', function() {
            window.location.hash = hash;
        });
    });
});

// navbar-scroll
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    let scrollPos = 200;
    let navbar = document.getElementById('navbar');
    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active')
    }
}