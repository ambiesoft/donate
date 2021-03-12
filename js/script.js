// https://www.marorika.com/entry/copy-to-clipboard

function debugAlert(s) {
  // alert(s);
}

function copyToClipboard() {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById("email");
    debugAlert(1);
    // copyTarget.style.visibility = 'visible';

    // コピー対象のテキストを選択する
    copyTarget.select();
    debugAlert(2);
    copyTarget.setSelectionRange(0, 99999); /* For mobile devices */
    debugAlert(3);
    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("copy");
    debugAlert(4);
    // コピーをお知らせする
    alert("コピーしました:" + copyTarget.value);
    debugAlert(5);
    // copyTarget.style.visibility = 'hidden';
}

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("email");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

