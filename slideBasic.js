$(document).ready(function(){
    var current = $('.activeImg'), currentIndex = $('.imgList img').index(current), imgs = $('.imgList li').find('img'), totImg = imgs.length;
    $('.activeImg').show();
    function changeImg(){
        clearInterval(autoPlay);
        var currentImg = imgs.eq(currentIndex);
        imgs.hide();
        currentImg.fadeIn('slow');
    };
    function changeImgAuto(){
        var currentImg = imgs.eq(currentIndex);
        imgs.hide();
        currentImg.fadeIn(1200);
    };
    var autoPlay = setInterval(function(){
        currentIndex +=1;
        if (currentIndex > totImg - 1){
            currentIndex=0;
        }
        changeImgAuto();
    }, 3000);
    $('.next, .imgList img').on('click', function(){
        currentIndex +=1;
        if (currentIndex > totImg - 1){
            currentIndex=0;
        }
        changeImg();
    });
    $('.prev').on('click',function() {
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = totImg - 1;
        }
        changeImg();
    });
});
