var $ = jQuery.noConflict();
$(function () {
    console.log('hello');
    var $hum = $('.hamburger'),
        $nav = $('.myGlobalNav.mb'),
        $headerMenuItem = $('.headerNavListItem');
    $hum.click(function () {
        console.log('クリック');
        if ($hum.hasClass('show')) {
            $hum.removeClass('show');
            $nav.removeClass('show');
            setTimeout(function () {
                $nav.css('display', "none");
            }, 500);
        } else {
            $hum.addClass('show');
            $nav.css('display', "inherit");
            setTimeout(function () {
                $nav.addClass('show');
            }, 1);
        }
    });

    $('.myGlobalNav.mb li').click(function () {
        // console.log('クリック');
        if ($hum.hasClass('show')) {
            $hum.removeClass('show');
            $nav.removeClass('show');
            setTimeout(function () {
                $nav.css('display', "none");
            }, 500);
        } else {
            $hum.addClass('show');
            $nav.css('display', "inherit");
            setTimeout(function () {
                $nav.addClass('show');
            }, 1);
        }
    });



    // $headerMenuItem.each(function () {
    //     $(this).hover(
    //         () => {
    //             var $target = $(this).find('.headerNavListItemChildren');
    //             $target.css('display', "inherit");
    //             setTimeout(function () {
    //                 console.log($target);
    //                 $target.addClass('show');
    //             }, 10);
    //         },
    //         () => {
    //             var $target = $(this).find('.headerNavListItemChildren');
    //             $target.removeClass('show');
    //             setTimeout(function () {
    //                 $target.css('display', "none");
    //             }, 500);
    //         }
    //     );
    // });

});
