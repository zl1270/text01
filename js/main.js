var myFullpage = new fullpage('#fullpage', {
    menu: '.gnb_list',
    anchors: ['section1','section2','section3','section4','section5'],
    sectionsColor: ['#000', '#f8f4ef', '#000', '#ecf1ee', '#e0e9e2'],
    autoScrolling: true, //스크롤 바를 스크롤하면 한 페이지씩 넘어감(기본설정) - fauls하면 안넘어가고 스크롤 바가 생김,
    responsiveHeight: 350, //높이가 350px 이하일 때 오토 스크롤링 작동 안함
    scrollBar:true,
    //navigation: true, 오른쪽 페이지 넘기는 버튼
    normalScrollElements: '#s2', //오토스크롤이 아니라 정상 스크롤 적용
});


// document.querySelector('.scroll_guide').addEventListener('click',function(){
// 	fullpage_api.moveSectionDown();
// });

document.querySelector('.nextS').addEventListener('click',function(e){
    e.preventDefault();
	fullpage_api.moveSectionDown();
});

document.querySelector('.prevS').addEventListener('click',function(e){
    e.preventDefault();
	fullpage_api.moveSectionUp();
});



$(".totalMainitem").click(function(){
    if($(this).hasClass("active")) { 
        $(this).removeClass("active")
    } else { 
        $(".totalMainitem").removeClass("active")
        $(this).addClass("active");
    }
    
});

$('.btn_total').click(function(){
    $('.total_menuZ').addClass('active');
});


$('.btn_totalClose').click(function(){
    $('.total_menuZ').removeClass('active');
});



// var myScroll = new IScroll('.total_menu');
myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    scrollbars: true
});


new WOW().init();

/*구글 맵 설정



function initMap() {

    const myLatLng = { 
        lat: 37.44311253571309, 
        lng: 126.40675799782598 
    }
    //위도(latitude), 경도 (longitude) 

    const map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng ,
                //위도, 경도  
        zoom: 18, //1-20 확대 된 상태, 숫자가 클 수록 가까움
    });

    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });

    //구글 API에 들어있는 map함수 실행
}

*/


// 네이버맵 설정
var mapOptions = {
    center: new naver.maps.LatLng(37.500148845880915, 127.02895351272205),
    zoom: 17
};

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.500148845880915, 127.02895351272205),
    map: map,
});


var map = new naver.maps.Map('map', mapOptions);