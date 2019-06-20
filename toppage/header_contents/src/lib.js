import $ from 'jquery';
$(function(){
    // #js-toggle_menu(ボタン)がクリックされた際にボタン自身とnavにactiveクラスが追加される処理を行っています。
    // toggleClassを用いることで、すでにactiveが付与されていた際はactiveを消去する処理を行っています。
    $('#js-toggle_menu').on('click', function() {
        $(this).toggleClass('active');
        $('#HeaderNav').toggleClass('active');
    })
})
