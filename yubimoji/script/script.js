// スクロール無効
document.addEventListener('touchmove', function(event) {event.preventDefault();}, {passive: false});
document.addEventListener('mousewheel', function(event) {event.preventDefault();}, {passive: false});

// スマホが回転されたらページを再読み込み
function updateOrientation(){
  window.location.reload();
}
window.addEventListener('orientationchange', updateOrientation);
