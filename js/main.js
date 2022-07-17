
//메인 슬라이드
const swiper = new Swiper('.main1', {
    // Optional parameters
    loop: true,
    autoplay: true,
    speed:1500,
    infinite:true,
    pauseOnHover:false, 
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});


//메뉴버튼
//열고
$('.top_menu').click(function(){
    $('.gnb_open').show();
    $('.dark').css({'display':'block'}); 
});
//닫고
$('.dark').click(function(){
    $('.dark').css({'display':'none'});
    $('.gnb_open').hide();
});



//검색버튼
$('.top_search').click(function(e){
    e.preventDefault();
    $('.search_pop').show();//열고
});

$('.close').click(function(){
    $('.search_pop').hide();//닫고
})
