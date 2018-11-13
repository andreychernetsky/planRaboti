// jQuery(function($) {
// 	$(".btn-nav").on("click",function(){
// 		let target = $(this).date("target");
// 		$(target).toggleClass("wrap-nav__list--open")
// 	});
// });



//1) прочитать про https://learn.javascript.ru/onscroll прокрутка
// 2) написать событие, которое будет вызываться по скролу
// 3_создать якоря (data-atribute на тегах) data-start data-end
// 4)когда scroll дойдет до data-start, на data-header добавить класс fixed
// 5) когда scroll дойдет до data-end data-header добавить class="scroll-end"

    	// let avatarElem =document.getElementById('fixd-menu');
     //    let avatarSourceBottom = avatarElem.getBoundingClientRect().bottom+window.pageYOffset;

     //    window.onscroll = function() {
     //        if(avatarElem.classList.contains('fixed')&&window.pageYOffset<avatarSourceBottom){
     //            avatarElem.classList.remove('fixed');
     //        } else if(window.pageYOffset > avatarSourceBottom){
     //           avatarElem.classList.add('fixed')
     //        }
     //    }

       jQuery(document).ready(function ($) {
            // Клик на элемент по которому и будет совершаться
            // действие открытие и закрытие sidebar
            $('.icon-menu').click(function (e) {
                // Класс sidebar
                var sidebar = $('.sidebar-left');
                // Ширина sidebar
                var sidebarWidth = $('.sidebar-left').width();
                // Добавляем класс active
                $('.main-header, .content').addClass('active');

                // Проверяем, если в sidebar свойство left не равна ширины его то выполняються
                // следующие действия
                if (sidebar.css('left') != sidebarWidth) {
                    // Добавляем ему класс active
                    sidebar.addClass('active');

                    var firstClick = true;

                    // Скрипт который будет закрывать sidebar при клике на любое место
                    $(document).bind('click.myEvent', function (e) {
                        if (!firstClick && $(e.target).closest('.sidebar-left').length == 0) {
                            // Удаляем класс active
                            sidebar.removeClass('active');
                            // Удаляем класс active
                            $('.main-header, .content').removeClass('active');
                            $(document).unbind('click.myEvent');
                        }
                        firstClick = false;
                    });
                }
                e.preventDefault();
            });
        });
    