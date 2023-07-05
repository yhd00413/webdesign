// ページトップ表示
// ある程度スクロールしたら、p.pagetopがフェードイン表示されるようにする （console.logはjavascript）ifの行の意味「もしスクロールが100にきたら、pagetopを500m秒かけて表示させる」。elseの行の意味「ifの行でなくなったら、pagetopをfedeoutする。console.log(sc)は不要だし、重いのでコメントにした。
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  // console.log(sc);
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

// モバイルメニュー
// .hmenuをクリックした時
// ➡navにスライドトグル
// ➡$(this)にクラスcloseをトグル （$thisは$.hmenuと同じ）
// ➡停止
// return falseは必須
$(".hmenu").click(function () {
  // A（上下）パターンでは、slidetoggleのプログラムを有効にする。
  // $("nav").slideToggle(500);
  $(this).toggleClass("close");
  return false;
});

// B（左右）パターン
// .hmenuをクリックした時
// ➡$(this)にクラスcloseをトグル
// ➡停止
// .containerをクリックした時
// ➡.hmenuからクラスcloseを除去
// hmenu以外のエリアをクリックしてもhmenuが消える。→.remobeClass　A上下パターンでは設定しない方がよい。
$(".container").click(function () {
  $(".hmenu").removeClass("close");
});
