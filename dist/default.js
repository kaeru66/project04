$(document).ready(function(){

    $('.fas.fa-bars').click(function(){
        $('.fas.fa-bars').hide();
        $('.fas.fa-times').show();
        $('.linkbar').stop().slideDown();
    });

    $('.fas.fa-times').click(function(){
        $('.fas.fa-times').hide();
        $('.fas.fa-bars').show();
        $('.linkbar').stop().slideUp();
    });


    

    $('.top,.logo').click(function(){
        $('html,body').animate({scrollTop:'0'},1000,'easeOutCirc');
        return false;
    });

    $('#aboutbtn').click(function(){
        $('.fas.fa-times').hide();
        $('.fas.fa-bars').show();
        $('.linkbar').stop().slideUp();
        $('html,body').animate({scrollTop:$('#about').offset().top-95},1000,'easeInOutBack');
        return false;
    });

    $('#evokersbtn').click(function(){
        $('.fas.fa-times').hide();
        $('.fas.fa-bars').show();
        $('.linkbar').stop().slideUp();
        $('html,body').animate({scrollTop:$('#evokers').offset().top-95},1000,'easeInOutBack');
        return false;
    });

    $('#summonsbtn').click(function(){
        $('.fas.fa-times').hide();
        $('.fas.fa-bars').show();
        $('.linkbar').stop().slideUp();
        $('html,body').animate({scrollTop:$('#summons').offset().top-95},800,'easeInOutBack');
        return false;
    });

    $('#materialsbtn').click(function(){
        $('.fas.fa-times').hide();
        $('.fas.fa-bars').show();
        $('.linkbar').stop().slideUp();
        $('html,body').animate({scrollTop:$('#materials').offset().top-95},800,'easeInOutBack');
        return false;
    });

    $('#gachabtn').click(function(){
        $('.fas.fa-times').hide();
        $('.fas.fa-bars').show();
        $('.linkbar').stop().slideUp();
        $('html,body').animate({scrollTop:$('#gacha').offset().top-95},800,'easeInOutBack');
        return false;
    });

});


    var dataArry = ['女帝 瑪利亞·特蕾莎','愚者 凱姆','戀人 尼婭','隱者 埃斯塔利奧拉','力量 芙洛','魔術師 羅貝利亞','戰車 蓋森伯格','女教皇 哈潔莉拉','教皇 亞萊南','皇帝 卡璨利拉'];

        function call() {
        event.preventDefault();

        var x = dataArry.length;
        var y = 0;
        var rand = parseInt(Math.random()*(x-y)+y);

        $.each(dataArry,function(val, name) {
            val = rand;
            $('.gacharesult').html(dataArry[val]);
        });
    }
