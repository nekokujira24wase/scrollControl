// document.addEventListener("DOMContentLoaded", (event) =>{
//     const vertical = document.getElementById('area'); //areaのDOM要素
//     const horizontal = document.getElementById(`wrap`); //wrapのDOM要素
//     const wrapTop = horizontal.getBoundingClientRect().top; //wrapの頭の位置
//     // console.log(wrapTop);
//     // console.log(horizontal);
//     const a = horizontal.getBoundingClientRect()
//     // console.log(a);

//     let verticalScrollOne = true; //1~4までの縦のスクロールを制御
//     let verticalScrollTwo = false; //6~9までの縦のスクロールを制御
//     let horizontalScroll = false; //横のスクロールを制御
//     console.log(horizontal.left)

//     wrap.wrapScroll = function() {
//         console.log('横方向のスクロールが実行されました。');
//         const wrapScroll = document.getElementById("wrap");
//         const scrollPosition = wrapScroll.scrollLeft;
//         console.log(scrollPosition);
//         if (scrollPosition == window.innerWidth*2){
//             console.log(123);
//             verticalScrollTwo = true;
//             window.scrollTo(wrapTop, window.innerHeight);
//         }
//     }

//     document.addEventListener("scroll", (e) => {
//         console.log("縦方向のスクロールが実行されました。");
//         //4が全画面に表示された時にそれ以上下にスクロールできなくする処理
//         if (window.scrollY >= wrapTop && !verticalScrollTwo) {
//             window.scrollTo(0, wrapTop);
//             horizontalScroll = true;
//             console.log('horizontalScroll = ' + horizontalScroll, '４に到達しました');
//         }

//         //4が全画面になった時に縦横スクロールどちらにも舵を切れるようにする処理
//         if (horizontal.scrollLeft == 0 && window.scrollY == wrapTop){
//             verticalScrollOne = true;
//             horizontalScroll = true
//             console.log('verticalScrollOne =' + verticalScrollOne, '縦横移動可能');
//             console.log('horizontalScroll ='  + horizontalScroll, '縦横移動可能');
//         }

//         //4から舵を着た方向を基に、舵を切ってない方向へのスクロールをできなくする
//         if (verticalScrollOne && horizontalScroll) {

//         }


//         if (verticalScrollOne && horizontalScroll) {
//             if(horizontal.scrollLeft == 0 && window.scrollY < wrapTop) {
//                 horizontalScroll = false;
//                 console.log("horizontalScroll =" + horizontalScroll, '4から3へ移りました');
//             return}
//             wrap.wrapScroll = function() {
//                 let container = document.getElementById('wrap');
//                 console.log(container.scrollLeft, 7);
//                 let scrollPosition = container.scrollLeft;
//                 if (scrollPosition > 0) {
//                     verticalScrollOne = false;
//                     // window.scrollTo(wrapTop, wrapTop);
//                     console.log('verticalScrollOne =' + verticalScrollOne, '横スクロールだけ可能');
//                     console.log('horizontalScroll =' + horizontalScroll, '横スクロールだけ可能');
//                 }
//             }
//         }
//         //横スクロール可能時に縦方向のスクロールをできなくする
//         if(horizontal.scrollLeft > 0) {
//             console.log('aaaa')
//             window.scrollTo(wrapTop, wrapTop);
//         }
//         //6から舵を着た方向を基に、舵を切ってない方向へのスクロールをできなくする
//         wrap.wrapScroll = function() {
//             if (horizontal.scrollLeft == window.innerWidth){
//                 console.log(123);
//                 verticalScrollTwo = true;
//                 window.scrollTo(wrapTop, window.innerHeight);
//             }
//         }
//         console.log(horizontal.scrollLeft,5);
//     });
//     wrap.wrapScroll = function() {
//         console.log('横方向のスクロールが実行されました。');
//         const wrapScroll = document.getElementById("wrap");
//         const scrollPosition = wrapScroll.scrollLeft;
//         console.log(scrollPosition);
//         if (scrollPosition == window.innerWidth*2){
//             console.log(123);
//             verticalScrollTwo = true;
//             window.scrollTo(wrapTop, window.innerHeight);
//         }
//     }
    

//     const item06 = document.getElementsByClassName(`item06`);
//     const item04 = document.getElementsByClassName(`item04`);

// });

let wrap;
let wrapTop;
let body;

document.addEventListener("DOMContentLoaded", (event) =>{
    wrap = document.getElementById('wrap');
    wrapTop = wrap.getBoundingClientRect().top;
    body = document.body;

});
let verticalScrollOne = true; //1~4までの縦のスクロールを制御
let verticalScrollTwo = false; //6~9までの縦のスクロールを制御
let horizontalScroll = false; //横のスクロールを制御


// 縦方向のスクロールが実行された時に起こる関数
function bodyScroll() {
    console.log('bodyのスクロールが実行されました');
    console.log(window.scrollY);
    console.log(wrap);
    // console.log(wrapTop);

    if (verticalScrollOne && window.scrollY > wrapTop) {
        window.scrollTo(0, wrapTop);
        horizontalScroll = true;
        wrap.style.overflowX = 'scroll';
    } else if (verticalScrollOne && window.scrollY < wrapTop) {
        horizontalScroll = false;
        wrap.style.overflowX = 'hidden';
    }

    if (verticalScrollTwo && window.scrollY < wrapTop) {
        window.scrollTo(0, wrapTop);
        horizontalScroll = false;
        wrap.style.overflowX = 'scroll';
    } else if ( window.scrollY > wrapTop) {
        wrap.style.overflowX = 'hidden';
    }
}

// 横方向のスクロールが実行された時に起こる関数
function wrapScroll() {
    // 横スクロール時は縦方向のスクロールを無効にする
    verticalScrollOne = false;
    verticalScrollTwo = false;
    body.style.overflowY = 'hidden';
    // console.log('wrapのスクロールが実行されました');
    // console.log(wrap.scrollLeft);

    // 左端に到達した時の処理
    if (wrap.scrollLeft == 0) {
        verticalScrollOne = true;
        body.style.overflowY = "scroll";
    }

    // 右端に到達した時の処理
    let width = window.innerWidth; //ユーザーがウィンドウの大きさを変更する可能性を考慮して都度画面幅を取得する
    let height = window.innerHeight; //上記と同じ理由で都度取得
    if (wrap.scrollLeft == width*2) {
        verticalScrollTwo = true;
        body.style.overflowY = "scroll";
    }

}
