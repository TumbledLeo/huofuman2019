'use strict';

$(function () {
    function tabCtrl(ele) {
        $(ele + ' .tabContents .tabContent').hide().eq(0).show();
        $(ele + ' .tabs .tab').eq(0).addClass('active');
        $(ele + ' .tabs .tab').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if ($(this).hasClass('active')) {
                return;
            }
            $(this).addClass('active').siblings().removeClass('active');
            var me = $(this);
            var index = 0;
            $(ele + ' .tabs .tab').each(function (i) {
                if (me.get(0) === $(this).get(0)) {
                    index = i;
                }
            });
            $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn();
        });
    }
    tabCtrl('.boom');
    tabCtrl('.zczy');
    tabCtrl('.ldsx');
    tabCtrl('.mhtm');
    function tabCtrl1(ele) {
        $(ele + ' .contents .content').hide().eq(0).show();
        $(ele + ' .tochs .toch').eq(0).addClass('active');
        $(ele + ' .tochs .toch').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if ($(this).hasClass('active')) {
                return;
            }
            $(this).addClass('active').siblings().removeClass('active');
            var me = $(this);
            var index = 0;
            $(ele + ' .tochs .toch').each(function (i) {
                if (me.get(0) === $(this).get(0)) {
                    index = i;
                }
            });
            $(ele + ' .contents .content').hide().eq(index).fadeIn();
        });
    }
    tabCtrl1('.sml');
    //音乐
    var music = document.getElementById('aud');
    var music1 = document.getElementById('aud1');
    var music2 = document.getElementById('aud2');
    var music3 = document.getElementById('aud3');
    var music4 = document.getElementById('aud4');
    var music5 = document.getElementById('aud5');
    var music6 = document.getElementById('aud6');
    $('.music_bg').click(function () {
        if ($(this).hasClass('play')) {
            music.pause();
            $(this).find('img').attr("src", "images/play.png");
            $(this).removeClass('play');
        } else {
            music.play();
            music1.pause();
            music2.pause();
            music3.pause();
            music4.pause();
            music5.pause();
            music6.pause();
            $(this).addClass('play');
            $(this).find('img').attr("src", "images/music.png");
            $('.pl').find('img').attr("src", "images/sj.png");
            $('.pl').find('img').removeClass('show');
        }
    });
    $('.pl1').click(function () {
        music.pause();
        music2.pause();
        music3.pause();
        music4.pause();
        music5.pause();
        music6.pause();
        $('.music_bg').removeClass('play');
        if ($(this).find('img').hasClass('show')) {
            $(this).find('img').attr("src", "images/sj.png");
            $(this).find('img').removeClass('show');
            music1.pause();
        } else {
            $(this).find('img').addClass('show');
            $('.pl img').attr("src", "images/sj.png");
            $(this).find('img').attr("src", "images/sj1.png");
            $('.music_bg').find('img').attr("src", "images/play.png");
            music1.play();
        }
    });
    $('.pl2').click(function () {
        music.pause();
        music1.pause();
        music3.pause();
        music4.pause();
        music5.pause();
        music6.pause();
        $('.music_bg').removeClass('play');
        if ($(this).find('img').hasClass('show')) {
            $(this).find('img').attr("src", "images/sj.png");
            $(this).find('img').removeClass('show');
            music2.pause();
        } else {
            $(this).find('img').addClass('show');
            $('.pl img').attr("src", "images/sj.png");
            $(this).find('img').attr("src", "images/sj1.png");
            $('.music_bg').find('img').attr("src", "images/play.png");
            music2.play();
        }
    });
    $('.pl3').click(function () {
        music.pause();
        music1.pause();
        music2.pause();
        music4.pause();
        music5.pause();
        music6.pause();
        $('.music_bg').removeClass('play');
        if ($(this).find('img').hasClass('show')) {
            $(this).find('img').attr("src", "images/sj.png");
            $(this).find('img').removeClass('show');
            music3.pause();
        } else {
            $(this).find('img').addClass('show');
            $('.pl img').attr("src", "images/sj.png");
            $(this).find('img').attr("src", "images/sj1.png");
            $('.music_bg').find('img').attr("src", "images/play.png");
            music3.play();
        }
    });
    $('.pl4').click(function () {
        music.pause();
        music1.pause();
        music2.pause();
        music3.pause();

        music5.pause();
        music6.pause();
        $('.music_bg').removeClass('play');
        if ($(this).find('img').hasClass('show')) {

            $(this).find('img').attr("src", "images/sj.png");
            $(this).find('img').removeClass('show');
            music4.pause();
        } else {
            $(this).find('img').addClass('show');
            $('.pl img').attr("src", "images/sj.png");
            $(this).find('img').attr("src", "images/sj1.png");
            $('.music_bg').find('img').attr("src", "images/play.png");
            music4.play();
        }
    });
    $('.pl5').click(function () {
        music.pause();
        music1.pause();
        music2.pause();
        music3.pause();
        music4.pause();

        music6.pause();
        $('.music_bg').removeClass('play');
        if ($(this).find('img').hasClass('show')) {

            $(this).find('img').attr("src", "images/sj.png");
            $(this).find('img').removeClass('show');
            music5.pause();
        } else {
            $(this).find('img').addClass('show');
            $('.pl img').attr("src", "images/sj.png");
            $(this).find('img').attr("src", "images/sj1.png");
            $('.music_bg').find('img').attr("src", "images/play.png");
            music5.play();
        }
    });
    $('.pl6').click(function () {
        music.pause();
        music1.pause();
        music2.pause();
        music3.pause();
        music4.pause();
        music5.pause();

        $('.music_bg').removeClass('play');
        if ($(this).find('img').hasClass('show')) {

            $(this).find('img').attr("src", "images/sj.png");
            $(this).find('img').removeClass('show');
            music6.pause();
        } else {
            $(this).find('img').addClass('show');
            $('.pl img').attr("src", "images/sj.png");
            $(this).find('img').attr("src", "images/sj1.png");
            $('.music_bg').find('img').attr("src", "images/play.png");
            music6.play();
        }
    });
    //导航跳转
    $('.nav_list li').click(function () {
        // $(this).addClass('active').siblings().removeClass('active');
        $('.nav_list').fadeOut();
        document.body.style.position = '';
        $("body").css("top", '');
        $('html,body').animate({ scrollTop: $('.' + $(this).attr('data')).offset().top - 100 }, 800);
    });
    var scrollTop2 = null;
    $('.nav_list .close').click(function () {
        $('.nav_list').fadeOut();
        document.body.style.position = '';
        $("body").css("top", '');
        window.scrollTo(0, scrollTop2);
    });
    $('.nav').click(function () {
        $('.nav_list').fadeIn();
        scrollTop2 = window.scrollY;
        document.body.style.position = 'fixed';
        $("body").css("top", -scrollTop2);
    });
});