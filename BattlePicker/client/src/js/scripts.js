import $ from 'jquery';

// раскрытие меню поиска(закрывается, если нажать вне его области)
$(".playmenu-btn").on('click', function() {
    $('.playmenubox').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".playmenu").length) {
        $('.playmenubox').hide();
    }
    e.stopPropagation();
});

// раскрытие бургерменю(закрывается, если нажать вне его области)
$(".menu-btn").on('click', function() {
    $('.menubox').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".burger-menu").length) {
        $('.menubox').hide();
    }
    e.stopPropagation();
});

// раскрытие списка друзей(закрывается, если нажать вне его области)
$(".friendlist-btn").on('click', function() {
    $('.friendlistbox').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".friendlist").length) {
        $('.friendlistbox').hide();
    }
    e.stopPropagation();
});

// смена кнопок поиска
$(function () {
    $(".cancelsearch-btn").hide();
    $(".start").on('click', function() {
        $(".startsearch-btn").hide();
        $(".cancelsearch-btn").show()
    });
    $(".cancel").on('click', function() {
        $(".cancelsearch-btn").hide();
        $(".startsearch-btn").show()
    });
});