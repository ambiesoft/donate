// https://www.marorika.com/entry/copy-to-clipboard
function copyToClipboard() {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById("email");

    // copyTarget.style.visibility = 'visible';

    // コピー対象のテキストを選択する
    copyTarget.select();
    copyTarget.setSelectionRange(0, 99999); /* For mobile devices */

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("copy");

    // コピーをお知らせする
    alert("コピーしました:" + copyTarget.value);

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

