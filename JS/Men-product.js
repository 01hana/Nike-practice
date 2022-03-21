$(document).ready(function () {
    $('#search, #search-btn, #search-container').on('click', () => {

        $('#sub-nav-bar').animate({
            height: '300px'
        });
        $('#sub-nav-bar').css({
            position: 'fixed'
        });
        $('#empty-box, #nav, #like-icon-box, .sub-icon-box, #headbar').hide();
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
        $('#empty-box, #nav, #like-icon-box, .sub-icon-box, #headbar').show();
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
        $('#nav-item-container2, #nav-item-container3, #nav-item-container4, #nav-item-container5').hide();
    });
    $('#nav-item-container1').on('mouseleave', () => {
        $('#nav-item-container1').slideUp('fast');
    });
    $('#women').on('mouseenter', () => {
        $('#nav-item-container2').slideDown(400).css({
            position: 'fixed'
        });
        $('#nav-item-container1, #nav-item-container3, #nav-item-container4, #nav-item-container5').hide();
    });
    $('#nav-item-container2').on('mouseleave', () => {
        $('#nav-item-container2').slideUp('fast');
    });
    $('#kid').on('mouseenter', () => {
        $('#nav-item-container3').slideDown(400).css({
            position: 'fixed'
        });
        $('#nav-item-container1, #nav-item-container2, #nav-item-container4, #nav-item-container5').hide();
    });
    $('#nav-item-container3').on('mouseleave', () => {
        $('#nav-item-container3').slideUp('fast');
    });
    $('#customization').on('mouseenter', () => {
        $('#nav-item-container4').slideDown(400).css({
            position: 'fixed'
        });
        $('#nav-item-container1, #nav-item-container2, #nav-item-container3, #nav-item-container5').hide();
    });
    $('#nav-item-container4').on('mouseleave', () => {
        $('#nav-item-container4').slideUp('fast');
    });
    $('#sale').on('mouseenter', () => {
        $('#nav-item-container5').slideDown(400).css({
            position: 'fixed'
        });
        $('#nav-item-container1, #nav-item-container2, #nav-item-container3, #nav-item-container4').hide();
    });
    $('#nav-item-container5').on('mouseleave', () => {
        $('#nav-item-container5').slideUp('fast');
    });
    $('#SNKRS').on('mouseenter', event => {
        $('#nav-item-container1, #nav-item-container2, #nav-item-container3, #nav-item-container4, #nav-item-container5').slideUp();
    });
    $('header').on('mouseenter', () => {
        $('#nav-item-container1, #nav-item-container2, #nav-item-container3, #nav-item-container4, #nav-item-container5').slideUp();
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

    $('#sort-by').on('click', () => {
        $('#sort-by-item').slideToggle('fast');
    })

    $('#color-drop-arrow').on('click', () => {
        $('#sort-by-color').animate({
            height: '250px'
        });
        $('#color-drop-arrow').hide();
        $('#color-up-arrow').show();
    });
    $('#color-up-arrow').on('click', () => {
        $('#sort-by-color').animate({
            height: '30px'
        });
        $('#color-drop-arrow').show();
        $('#color-up-arrow').hide();
    });


    $('#brand-drop-arrow').on('click', () => {
        $('#sort-by-brand').animate({
            height: '200px'
        });
        $('#brand-drop-arrow').hide();
        $('#brand-up-arrow').show();
    });
    $('#brand-up-arrow').on('click', () => {
        $('#sort-by-brand').animate({
            height: '30px'
        });
        $('#brand-drop-arrow').show();
        $('#brand-up-arrow').hide();
    });
    $('#brand-show-more').on('click', () => {
        $('#sort-by-brand').animate({
            height: '250px'
        });
        $('#sort-by-brand ul').animate({
            height: '170px'
        });
        $('#brand-show-more').hide();
        $('#brand-show-less').show().css({
            display: 'flex',
            alignItems: 'center'
        })
    });
    $("#brand-show-less").on('click', () => {
        $('#sort-by-brand').animate({
            height: '200px'
        });
        $('#sort-by-brand ul').animate({
            height: '110px'
        });
        $('#brand-show-more').show();
        $('#brand-show-less').hide();
    });

    $('#sport-drop-arrow').on('click', () => {
        $('#sort-by-sport').animate({
            height: '200px'
        });
        $('#sport-drop-arrow').hide();
        $('#sport-up-arrow').show();
    });
    $('#sport-up-arrow').on('click', () => {
        $('#sort-by-sport').animate({
            height: '30px'
        });
        $('#sport-drop-arrow').show();
        $('#sport-up-arrow').hide();
    });
    $('#sport-show-more').on('click', () => {
        $('#sort-by-sport').animate({
            height: '380px'
        });
        $('#sort-by-sport ul').animate({
            height: '300px'
        });
        $('#sport-show-more').hide();
        $('#sport-show-less').show();
        $('#sport-show-less').css({
            display: 'flex',
            alignItems: 'center'
        })
    });
    $("#sport-show-less").on('click', () => {
        $('#sort-by-sport').animate({
            height: '200px'
        });
        $('#sort-by-sport ul').animate({
            height: '110px'
        });
        $('#sport-show-more').show();
        $('#sport-show-less').hide();
    });

    $('#suitable-drop-arrow').on('click', () => {
        $('#sort-by-suitable').animate({
            height: '100px'
        });
        $('#suitable-drop-arrow').hide();
        $('#suitable-up-arrow').show();
    });
    $('#suitable-up-arrow').on('click', () => {
        $('#sort-by-suitable').animate({
            height: '30px'
        });
        $('#suitable-drop-arrow').show();
        $('#suitable-up-arrow').hide();
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

    $('#rwd-brand-show-more').on('click', () => {
        $('#rwd-sort-by-brand ul').animate({
            height: '200px',
        });
        $('#rwd-brand-show-more').hide();
        $('#rwd-brand-show-less').show().css({
            display: 'flex',
            alignItems: 'center'
        })
    });
    $('#rwd-brand-show-less').on('click', () => {
        $('#rwd-sort-by-brand ul').animate({
            height: '130px'
        });
        $('#rwd-brand-show-more').show();
        $('#rwd-brand-show-less').hide()
    });
    $('#rwd-sport-show-more').on('click', () => {
        $('#rwd-sort-by-sport ul').animate({
            height: '300px',
        });
        $('#rwd-sport-show-more').hide();
        $('#rwd-sport-show-less').show().css({
            display: 'flex',
            alignItems: 'center'
        })
    });
    $('#rwd-sport-show-less').on('click', () => {
        $('#rwd-sort-by-sport ul').animate({
            height: '130px'
        });
        $('#rwd-sport-show-more').show();
        $('#rwd-sport-show-less').hide()
    });

    $('#rwd-screen').on('click', () => {
        $('#rwd-screen-container').slideDown();
        $('#nav-bar, #product-header, #rwd-screen-bar, #rwd-sidebar-nav, #main-product, #footer').hide();
    });
    $('#screen-close-btn').on('click', () => {
        $('#rwd-screen-container').slideUp();
        $('#nav-bar, #product-header, #rwd-screen-bar, #rwd-sidebar-nav, #main-product, #footer').show();
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {          /* 要滑動到選單的距離 */
            $('#sidebar').addClass('sidebarFixed');
            $('#product-header').addClass('product-headerFixed');
            $('#sort-by-container').addClass('sort-by-containerFixed');
            $('#product-header').css({
                marginTop: '0px',
                height: '40px'
            });
            $('.product-header-text').css({
                fontSize: '15px'
            });
            $('#header-title').css({
                fontSize: '18px'
            });
            $('#nav-item-container1, #nav-item-container2, #nav-item-container3, #nav-item-container4, #nav-item-container5').css({
                position: 'static'
            });
        } else {
            $('#sidebar').removeClass('sidebarFixed');
            $('#product-header').removeClass('product-headerFixed');
            $('#product-header').css({
                marginTop: '60px'
            });
            $('#sort-by-container').removeClass('sort-by-containerFixed');
            $('.product-header-text').css({
                fontSize: '16px'
            });
            $('#header-title').css({
                fontSize: '24px'
            });
        }
    });
});
