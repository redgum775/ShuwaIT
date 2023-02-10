// スクロールを無効
document.addEventListener('touchmove', function(event) {event.preventDefault();}, {passive: false});
document.addEventListener('mousewheel', function(event) {event.preventDefault();}, {passive: false});

// スマホが回転されたらページを再読み込み
function updateOrientation(){
  window.location.reload();
}
window.addEventListener('orientationchange', updateOrientation);

// 設定ボタンが押されたときの処理
const setting_button = document.getElementById('setting-button');
setting_button.addEventListener('click', () => {

}, false);

// カメラ権限リクエストダイアログを閉じるボタンが押されたときの処理
const close_button = document.getElementById('camera-permission-request-close-button');
close_button.addEventListener('click', () => {
  document.getElementById('camera-permission-request').hidden = true;
}, false);

// navigator.permissionsが使用可能かチェック
const hasPermission = () => "permissions" in navigator ? true : false;
const hasOnchange = (result) => typeof result.onchange === 'object';
if (hasPermission()){
  // カメラ権限のチェック
  navigator.permissions.query({name: 'camera'}).then((result) => {
    if(result.state == 'granted'){
      document.getElementById('start-request').hidden = false
    }else{
      document.getElementById('camera-permission-request').hidden = false;
      if(!hasOnchange(result)){document.getElementsById('not-having-onchange').setAttribute('display', 'inline')}
      navigator.mediaDevices.getUserMedia({video: true, audio: false});
    }
    if(hasOnchange(result)){
      result.onchange = () => {
        window.location.reload();
      }
    }
  });
}


