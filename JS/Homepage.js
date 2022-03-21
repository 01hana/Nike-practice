$(document).ready(function () {
    alert('目前僅男款的新品發售可供參考');
    $('#search, #search-btn, #search-container').on('click', () => {
        
        $('#sub-nav-bar').animate({
            height: '300px'
        });
        $('#sub-nav-bar').css({
            position: 'fixed'
        });
        $('#empty-box, #nav, #like-icon-box, .sub-icon-box, #headbar, .ad-box').hide();
        $('#close-btn1, #suggest').show();
        $('#sub-nav-box').css({
            justifyContent: 'end',
        });
        $('#search-box').animate({
            width: '84vw',
        });
        $('#search-container').animate({
            width: '50vw',
            transform: 'translate(-300px)'
        });
        $('#search').css({
            width: '40vw'
        })

    });
    $('#close-btn1').on('click', () => {
        $('#sub-nav-bar').animate({
            height: '60px'
        });
        $('#empty-box, #nav, #like-icon-box, .sub-icon-box, #headbar, .ad-box').show();
        $('#close-btn1, #suggest').hide();
        $('#sub-nav-box').css({
            justifyContent: 'center',
        });
        $('#search-box').animate({
            width: '187px',
        });
        $('#search-container').animate({
            width: '170px',
            transform: 'translate(0px)'
        });
        $('#sub-nav-bar').css({
            position: 'static'
        });
        $('#search').css({
            width: '100px'
        })
    });

    $('#more-item-box').on('mouseenter', event => {
        $(event.currentTarget).animate({
            height: '460px'
        }, 500);
        $(event.currentTarget).css({
            overflow: 'visible'
        })
    }).on('mouseleave', event => {
        $(event.currentTarget).css({
            overflow: 'hidden'
        });
        $(event.currentTarget).animate({
            height: '240px'
        }, 500);
    });

    $('#search, #search-container').on('mouseenter', () => {
        $('#search, #search-container').css({
            backgroundColor: '#f0eeee'
        });
    }).on('mouseleave', () => {
        $('#search, #search-container').css({
            backgroundColor: ' #f5f5f5'
        });
    });

    $('#men').on('mouseenter', () => {
        $('#nav-item-container1').slideDown(400).css({
            position: 'fixed'
        });
        $('.ad-box, #nav-item-container2, #nav-item-container3, #nav-item-container4, #nav-item-container5').hide();
    });
    $('#nav-item-container1').on('mouseleave', () => {
        $('#nav-item-container1').slideUp('fast');
        $('.ad-box').show();
    });
    $('#women').on('mouseenter', () => {
        $('#nav-item-container2').slideDown(400).css({
            position: 'fixed'
        });
        $('.ad-box, #nav-item-container1, #nav-item-container3, #nav-item-container4, #nav-item-container5').hide();
    });
    $('#nav-item-container2').on('mouseleave', () => {
        $('#nav-item-container2').slideUp('fast');
        $('.ad-box').show();
    });
    $('#kid').on('mouseenter', () => {
        $('#nav-item-container3').slideDown(400).css({
            position: 'fixed'
        });
        $('.ad-box, #nav-item-container1, #nav-item-container2, #nav-item-container4, #nav-item-container5').hide();
    });
    $('#nav-item-container3').on('mouseleave', () => {
        $('#nav-item-container3').slideUp('fast');
        $('.ad-box').show();
    });
    $('#customization').on('mouseenter', () => {
        $('#nav-item-container4').slideDown(400).css({
            position: 'fixed'
        });
        $('.ad-box, #nav-item-container1, #nav-item-container2, #nav-item-container3, #nav-item-container5').hide();
    });
    $('#nav-item-container4').on('mouseleave', () => {
        $('#nav-item-container4').slideUp('fast');
        $('.ad-box').show();
    });
    $('#sale').on('mouseenter', () => {
        $('#nav-item-container5').slideDown(400).css({
            position: 'fixed'
        });
        $('.ad-box, #nav-item-container1, #nav-item-container2, #nav-item-container3, #nav-item-container4').hide();
    });
    $('#nav-item-container5').on('mouseleave', () => {
        $('#nav-item-container5').slideUp('fast');
        $('.ad-box').show();
    });
    $('#SNKRS').on('mouseenter', event => {
        $('#nav-item-container1, #nav-item-container2, #nav-item-container3, #nav-item-container4, #nav-item-container5').slideUp();
        $('.ad-box').show();
    });
    $('header').on('mouseenter', () => {
        $('#nav-item-container1, #nav-item-container2, #nav-item-container3, #nav-item-container4, #nav-item-container5').slideUp();
        $('.ad-box').show();
    })


    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {          /* 要滑動到選單的距離 */
            $('#nav-bar').addClass('navFixed');   /* 幫選單加上固定效果 */
        } else {
            $('#nav-bar').removeClass('navFixed'); /* 移除選單固定效果 */
        }
    });

    $('#hamburger').on('click', () => {
        $('#hamburger-menu').css({
            visibility: 'visible',
            transform: 'translate(-200px)',
            transitionProperty: 'transform',
            transitionDuration: '0.25s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
    });
    $('#close-btn').on('click', () => {
        $('#hamburger-menu').css({
            transform: 'translate(200px)',
            transitionProperty: 'transform',
            transitionDuration: '0.25s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });

    $('#ham-men').on('click', () => {
        $('#sub-hamburger-menu').css({
            transform: 'translate(-300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-men-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-return-bar').on('click', () => {
        $('#ham-men-menu').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#sub-hamburger-menu').css({
            visibility: 'visible',
            transform: 'translate(0px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-list1').on('click', () => {
        $('#ham-men-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#men-list1-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-return-bar2').on('click', () => {
        $('#men-list1-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-men-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-list2').on('click', () => {
        $('#ham-men-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#men-list2-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-return-bar3').on('click', () => {
        $('#men-list2-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-men-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-list3').on('click', () => {
        $('#ham-men-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#men-list3-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-return-bar4').on('click', () => {
        $('#men-list3-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-men-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-list4').on('click', () => {
        $('#ham-men-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#men-list4-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-return-bar5').on('click', () => {
        $('#men-list4-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-men-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-list5').on('click', () => {
        $('#ham-men-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#men-list5-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-return-bar6').on('click', () => {
        $('#men-list5-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-men-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-list6').on('click', () => {
        $('#ham-men-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#men-list6-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#men-return-bar7').on('click', () => {
        $('#men-list6-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-men-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });

    $('#ham-women').on('click', () => {
        $('#sub-hamburger-menu').css({
            transform: 'translate(-300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-women-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-return-bar').on('click', () => {
        $('#ham-women-menu').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#sub-hamburger-menu').css({
            visibility: 'visible',
            transform: 'translate(0px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-list1').on('click', () => {
        $('#ham-women-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#women-list1-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-return-bar2').on('click', () => {
        $('#women-list1-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-women-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-list2').on('click', () => {
        $('#ham-women-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#women-list2-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-return-bar3').on('click', () => {
        $('#women-list2-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-women-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-list3').on('click', () => {
        $('#ham-women-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#women-list3-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-return-bar4').on('click', () => {
        $('#women-list3-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-women-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-list4').on('click', () => {
        $('#ham-women-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#women-list4-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-return-bar5').on('click', () => {
        $('#women-list4-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-women-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-list5').on('click', () => {
        $('#ham-women-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#women-list5-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-return-bar6').on('click', () => {
        $('#women-list5-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-women-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-list6').on('click', () => {
        $('#ham-women-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#women-list6-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#women-return-bar7').on('click', () => {
        $('#women-list6-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-women-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });

    $('#ham-kid').on('click', () => {
        $('#sub-hamburger-menu').css({
            transform: 'translate(-300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-kid-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-return-bar').on('click', () => {
        $('#ham-kid-menu').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#sub-hamburger-menu').css({
            visibility: 'visible',
            transform: 'translate(0px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-list1').on('click', () => {
        $('#ham-kid-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#kid-list1-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-return-bar2').on('click', () => {
        $('#kid-list1-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-kid-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-list2').on('click', () => {
        $('#ham-kid-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#kid-list2-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-return-bar3').on('click', () => {
        $('#kid-list2-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-kid-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-list3').on('click', () => {
        $('#ham-kid-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#kid-list3-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-return-bar4').on('click', () => {
        $('#kid-list3-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-kid-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-list4').on('click', () => {
        $('#ham-kid-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#kid-list4-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-return-bar5').on('click', () => {
        $('#kid-list4-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-kid-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-list5').on('click', () => {
        $('#ham-kid-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#kid-list5-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-return-bar6').on('click', () => {
        $('#kid-list5-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-kid-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-list6').on('click', () => {
        $('#ham-kid-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#kid-list6-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-return-bar7').on('click', () => {
        $('#kid-list6-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-kid-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-list7').on('click', () => {
        $('#ham-kid-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#kid-list7-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#kid-return-bar8').on('click', () => {
        $('#kid-list7-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-kid-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });

    $('#ham-customization').on('click', () => {
        $('#sub-hamburger-menu').css({
            transform: 'translate(-300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-customization-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#customization-return-bar').on('click', () => {
        $('#ham-customization-menu').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#sub-hamburger-menu').css({
            visibility: 'visible',
            transform: 'translate(0px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#customization-list1').on('click', () => {
        $('#ham-customization-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#customization-list1-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#customization-return-bar2').on('click', () => {
        $('#customization-list1-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-customization-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#customization-list2').on('click', () => {
        $('#ham-customization-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#customization-list2-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#customization-return-bar3').on('click', () => {
        $('#customization-list2-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-customization-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#customization-list3').on('click', () => {
        $('#ham-customization-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#customization-list3-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#customization-return-bar4').on('click', () => {
        $('#customization-list3-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-customization-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#customization-list4').on('click', () => {
        $('#ham-customization-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#customization-list4-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#customization-return-bar5').on('click', () => {
        $('#customization-list4-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-customization-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });

    $('#ham-sale').on('click', () => {
        $('#sub-hamburger-menu').css({
            transform: 'translate(-300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-sale-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#sale-return-bar').on('click', () => {
        $('#ham-sale-menu').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#sub-hamburger-menu').css({
            visibility: 'visible',
            transform: 'translate(0px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#sale-list1').on('click', () => {
        $('#ham-sale-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#sale-list1-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#sale-return-bar2').on('click', () => {
        $('#sale-list1-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-sale-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#sale-list2').on('click', () => {
        $('#ham-sale-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#sale-list2-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#sale-return-bar3').on('click', () => {
        $('#sale-list2-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-sale-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#sale-list3').on('click', () => {
        $('#ham-sale-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#sale-list3-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#sale-return-bar4').on('click', () => {
        $('#sale-list3-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-sale-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#sale-list4').on('click', () => {
        $('#ham-sale-menu').css({
            transform: 'translate(-350px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#sale-list4-container').css({
            visibility: 'visible',
            transform: 'translate(-75px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#sale-return-bar5').on('click', () => {
        $('#sale-list4-container').css({
            transform: 'translate(300px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        });
        $('#ham-sale-menu').css({
            visibility: 'visible',
            transform: 'translate(-45px)',
            transitionProperty: 'transform',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0s'
        })
    });
    $('#drop1').on('click', () => {
        $('#footer-text2').animate({
            height: '180px'
        });
        $('#drop1').hide();
        $('#up1').show();
    });
    $('#up1').on('click', () => {
        $('#footer-text2').animate({
            height: '30px'
        });
        $('#drop1').show();
        $('#up1').hide();
    });
    $('#drop2').on('click', () => {
        $('#footer-text3').animate({
            height: '180px'
        });
        $('#drop2').hide();
        $('#up2').show();
    });
    $('#up2').on('click', () => {
        $('#footer-text3').animate({
            height: '30px'
        });
        $('#drop2').show();
        $('#up2').hide();
    });
})
