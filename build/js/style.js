'use strict';

$(function () {
    // tab切换
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
    tabCtrl('.rqbd');
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

    //返回
    $('.top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });

    var vh = 1000;
    $(window).scroll(function () {
        var this_scrollTop = $(this).scrollTop();
        if (this_scrollTop > vh) {
            $(".top").show();
        } else {
            $(".top").fadeOut();
        }
    });

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
    // $('.ro li a').click(function(){
    //     if($(this).find('img').hasClass('show')){
    //         $(this).find('img').attr('src','images/sj.png').removeClass('show');
    //     }else{
    //         $('.ro li a').find('img').attr('src','images/sj.png');
    //         $(this).find('img').attr('src','images/sj1.png').addClass('show');
    //     }

    // });
    //弹窗
    var scrollTop = null;
    $('.swiper-container3 .swiper-slide').click(function (event) {
        $('.fly').fadeIn();
        mySwiper4.slideTo($(this).index());

        scrollTop = window.scrollY;
        document.body.style.position = 'fixed';
        $("body").css("top", -scrollTop);
    });
    $('.close').click(function () {

        $('.fly').fadeOut();
        document.body.style.position = '';
        $("body").css("top", '');
        window.scrollTo(0, scrollTop);
    });
    //导航跳转
    $('.logo li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('html,body').animate({ scrollTop: $('.' + $(this).attr('data')).offset().top - 100 }, 800);
    });
    $(window).scroll(function () {
        var t = $(document).scrollTop();
        if (t < $('.jmjq').offset().top - 200) {
            $('.logo li').eq(0).addClass('active').siblings().removeClass('active');
        } else if (t < $('.rqbd').offset().top - 300) {
            $('.logo li').eq(1).addClass('active').siblings().removeClass('active');
        } else if (t < $('.ds').offset().top - 300) {
            $('.logo li').eq(2).addClass('active').siblings().removeClass('active');
        } else if (t < $('.ldsx').offset().top - 300) {
            $('.logo li').eq(3).addClass('active').siblings().removeClass('active');
        } else if (t < $('.mhtm').offset().top - 300) {
            $('.logo li').eq(4).addClass('active').siblings().removeClass('active');
        } else if (t < $('.mtbd').offset().top - 300) {
            $('.logo li').eq(5).addClass('active').siblings().removeClass('active');
        } else {
            $('.logo li').eq(6).addClass('active').siblings().removeClass('active');
        }
    });
    // new CusScrollBar({
    //   contentSelector: '.scroll_cont0', //滚动内容区
    //   barSelector: '.scroll_bar0', //滚动条
    //   sliderSelector: '.scroll_slider0' //滚动滑块
    // });
    new CusScrollBar({
        contentSelector: '.scroll_cont1', //滚动内容区
        barSelector: '.scroll_bar1', //滚动条
        sliderSelector: '.scroll_slider1' //滚动滑块
    });
    new CusScrollBar({
        contentSelector: '.scroll_cont2', //滚动内容区
        barSelector: '.scroll_bar2', //滚动条
        sliderSelector: '.scroll_slider2' //滚动滑块
    });
    $('.scroll_slider2').height(40);
});