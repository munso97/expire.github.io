$(function() {
    var $progressBar = $('.progress-bar'),
        $bar = $progressBar.find('.bar'),
        $rate = $progressBar.find('.rate'),
        $rateNum = $rate.attr('date-rate');
        
        // bar의 너비가 60%로 바뀌는 과정이 0.5s
        // a.animate ({속성:값, 속성:값}, 시간, 이징, 다른 할 일);
        // 특정요소의 글씨을 반환 var c = A.text()
        // 특정요소의 글씨를 변경 A.text(B);
        
// 숫자 애니메이션 1번째 방법
// $bar.animate({width:$rateNum + '%'}, 2500);

// var timer = setInterval(numberAnimation, 100);

// function numberAnimation(){
//         var currentReta = $bar.width()/$progressBar.width()*100;
//         $rate.text(Math.floor(currentReta) + '%');
//         if(currentReta == $rateNum){
//             clearInterval(timer);
//         }
// }


// 숫자 애니메이션 2번째 방법


$progressBar.each(function(){
var currentItem = $(this),
    $bar = currentItem.find('.bar'),
    $rate = currentItem.find('.rate'),
    $rateNum = $rate.attr('date-rate');

$bar.animate({width:$rateNum + '%'}, 2500);

$({mycount:0}).animate({mycount:$rateNum}, {
    duration: 2500,
    progress:function(){
        var now = this.mycount;
        $rate.text(Math.floor(now) + '%');
    },
    
    });
});

// 숫자 애니메이션 3번째 방법   라이브러리 활용  jquery animateNumber
// $rate.animateNumber({ number: $rateNum });

// var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
// $rate.animateNumber(
//   {
//     number: $rateNum,
//     numberStep: percent_number_step
//   },
//   {
//     duration: 25000
//   }
// ); 


//protfolio filltering




});  // document ready