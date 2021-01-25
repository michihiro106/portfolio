var $ = jQuery.noConflict();
$(function() {
    let header     = $('.myHeader');
    let headerLogo = $('.headerLogo a');
    let hamburger  = $('.hamburger span');
    let heawderNav   = $('.headerNav');
    let headerNavList  = $('.headerNavList');
    let contact  = $('.headerNavContact');


    $(window).scroll(function () {
      // 画面をトップから100px以上スクロールした時
    if ($(this).scrollTop() >= 200) {
        header.css({'background':'rgba(250, 250, 250, 0.8)', 'box-shadow':'0 1px 5px gray'});

        headerLogo.css({'color':'#000'});

        hamburger.css({'background-color':'#000'});

        headerNav.css({'border-top': '#000 1px solid'});

        headerNavList.css({'color':'#000'});

        contact.css({'border':'1px solid #000', 'color':'#000'});



    } else {
        // 画面がトップから100px以下の時は、上記と逆の処理を行う
        header.css({'background':'rgba(250, 250, 250, 0)', 'box-shadow':'none'});
        
        headerLogo.css({'color':'#000'});

        hamburger.css({'background-color':'#fff'});

        headerNav.css({'border-top': '#fff 1px solid'});

        headerNavList.css({'color':'#fff'});

        contact.css({'border':'1px solid #fff', 'color':'#fff'});
    }
    });
});