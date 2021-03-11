// https://www.marorika.com/entry/copy-to-clipboard
function copyToClipboard() {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById("email");

    copyTarget.style.visibility = 'visible';

    // コピー対象のテキストを選択する
    copyTarget.select();
    copyTarget.setSelectionRange(0, 99999); /* For mobile devices */

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");

    // コピーをお知らせする
    alert("コピーしました:" + copyTarget.value);

    copyTarget.style.visibility = 'hidden';
}