document.addEventListener('DOMContentLoaded', function () {
    var Now = 0;
    var Body = document.getElementById('wrap');
    console.log(Body);
    var All = Body.getBoundingClientRect().height;
    console.log(All);
    var GlobalNav = document.getElementById('global-nav'),
        GlobalNavUl = GlobalNav.children;
    var GlobalNavUlInd = [].slice.call(GlobalNavUl);

    //ナビのリストの配列↓
    var NavList = GlobalNavUlInd[0].children;
    var NaLiIndex = [].slice.call(NavList);
    console.log('NaLiIndex=', NaLiIndex);
    //ID「ContWrap」内のコンテンツの配列↓
    var ContWrap = document.getElementById('ContWrap'),
        CoWrChi = ContWrap.children;
    var CoWrInd = [].slice.call(CoWrChi);
    console.log('CoWrInd=', CoWrInd);
    //上記コンテンツの座標を格納するための配列とりあえず０を格納しておく↓
    var CoWrIndRect = [].slice.call(CoWrInd);
    CoWrIndRect.fill(0);
     console.log('CoWrIndRect=', CoWrIndRect);

    
    //スクロールするたびに現在地からどれくらい離れているかをY座標を示す形で算出する
    function NowRect(){
    for (var i = 0; i < CoWrInd.length; i++) {
        CoWrIndRect[i] = CoWrInd[i].getBoundingClientRect();
        CoWrIndRect[i] = Math.floor(CoWrIndRect[i].top);
        
        console.log('=====配列CoWrIndのそれぞれのidとY座標を示す====');
        console.log(CoWrInd[i].id);

        console.log(CoWrIndRect[i]);
        console.log('===================================');
         
    };
    };
   window.onscroll = function(){
    NowRect();
    };


    //    function Scroll() {
    //        var Now = document.documentElement.scrollTop;
    //        if (Now > 0) {
    //            switch (true) {
    //                case Now > 30:
    //                    window.scrollBy(0, -15);
    //                    setTimeout(Scroll, 1);
    //                    break;
    //                case 30 >= Now > 0:
    //                    window.scrollBy(0, -1);
    //                    setTimeout(Scroll, 1);
    //                    break;
    //            };
    //        };
    //    };
    // 

}, false);
