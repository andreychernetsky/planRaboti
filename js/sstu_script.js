jQuery(function($) {
	$(".btn-nav").on("click",function(){
		let target = $(this).date("target");
		$(target).toggleClass("wrap-nav__list--open")
	});
});



//1) прочитать про https://learn.javascript.ru/onscroll прокрутка
// 2) написать событие, которое будет вызываться по скролу
// 3_создать якоря (data-atribute на тегах) data-start data-end
// 4)когда scroll дойдет до data-start, на data-header добавить класс fixed
// 5) когда scroll дойдет до data-end data-header добавить class="scroll-end"

    	let avatarElem =document.getElementById('fixd-menu');
        let avatarSourceBottom = avatarElem.getBoundingClientRect().bottom+window.pageYOffset;

        window.onscroll = function() {
            if(avatarElem.classList.contains('fixed')&&window.pageYOffset<avatarSourceBottom){
                avatarElem.classList.remove('fixed');
            } else if(window.pageYOffset > avatarSourceBottom){
               avatarElem.classList.add('fixed')
            }
        }
    