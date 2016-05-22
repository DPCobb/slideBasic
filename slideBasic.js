$(document).ready(function(){
    var currentIndex = 0, imgs = $('.imgList li').find('img'), totImg = imgs.length;
    $('.activeImg').show();
    function changeImg(e){
        var currentImg = imgs.eq(currentIndex);
        imgs.hide();
        currentImg.fadeIn('slow');
    }
    $('.next').on('click', function(){
        currentIndex +=1;
        if (currentIndex > totImg - 1){
            currentIndex=0;
        }
        changeImg()
    });
    $('.prev').on('click',function() {
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = totImg - 1;
        }
        changeImg();
    });
    $('img').on('click', function(){
        currentIndex +=1;
        if (currentIndex > totImg - 1){
            currentIndex=0;
        }
        changeImg()
    });
});
