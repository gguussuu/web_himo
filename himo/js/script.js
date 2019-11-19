$(document).ready(function () {
    $("ul.gnb>li").hover(function () {
        $(".nav_bg").stop().slideDown();
        $("ul.sub").stop().slideDown();
    }, function () {
        $(".nav_bg").stop().slideUp();
        $("ul.sub").stop().slideUp();
    });
    $(".main_slide ul.slider").bxSlider({
        auto: true,
        nextSelector: '.next', //다음 버튼 지정
        prevSelector: '.prev', //이전 버튼 지정
        nextText: 'next', //다음 버튼 요소에 ‘next’ 텍스트 삽입 , 텍스트가 필요 없다면 text-indent로 텍스트 숨김
        prevText: 'prev', //이전 버튼 요소에 ‘prev’ 텍스트 삽입
        pagerCustom: '.pager', //페이저만들어쓰기
    });
    $("ul.recom_product").bxSlider({
        auto: false,
        nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>', //다음 버튼 요소에 ‘next’ 텍스트 삽입 , 텍스트가 필요 없다면 text-indent로 텍스트 숨김
        prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>', //이전 버튼 요소에 ‘prev’ 텍스트 삽입nextSelector: '.r_next', //다음 버튼 지정
        prevSelector: '.r_prev', //이전 버튼 지정
        nextSelector: '.r_next', //이전 버튼 지정
        pagerCustom: '.r_pager', //페이저만들어쓰기
    });
    //    var mql = window.matchMedia("screen and (max-width: 400px)"); mql.addListener(function(e) { if(!e.matches) { slider.reloadSlider(); } });
 /*햄버튼 클릭시 메뉴바*/
    var w = $(window).width();
    var menu_chk = 0;
   var ham = document.getElementById('ham');
      ham.addEventListener('click', function () {
                if (this.className == 'on') this.classList.remove('on');
                else this.classList.add('on');
            });
    $("header ul.user_ham li:last-child").click(function () {
      
        if (w < 768) {
             if (menu_chk == 0) {
               $(".modal").slideDown();
                menu_chk++;
            } else {
              $(".modal").slideUp();
                menu_chk = 0;
            }
            
        } else {         
            if (menu_chk == 0) {
                $(".nav_bg").stop().slideDown();
                $("ul.sub").stop().slideDown();
                menu_chk++;
            } else {
                $(".nav_bg").stop().slideUp();
                $("ul.sub").stop().slideUp();
                menu_chk = 0;
            }
             

        }
    });
    $(window).resize(function () {
        var wid = $(window).width();
        if (wid < 660) {
            $(".guide ul.g_list li:nth-child(4) a span").attr("class", "tri02");
            $(".guide ul.g_list li:nth-child(6) a span").attr("class", "tri04");
        } else {
            $(".guide ul.g_list li:nth-child(4) a span").attr("class", "tri01");
            $(".guide ul.g_list li:nth-child(6) a span").attr("class", "tri03");
        }
    });

    
 var fam_chk = 0;
    $("ul.family li:first-child").click(function (e) {
       
        e.preventDefault();
        if (fam_chk == 0) {
            $("li.family_btn").stop().show();
            $("ul.family li:first-child a i").attr("class", "fa fa-angle-up");
            fam_chk++;
        } else {
             $("li.family_btn").stop().hide();
            $("ul.family li:first-child a i").attr("class", "fa fa-angle-down");
            fam_chk = 0;
        }

    });
});
