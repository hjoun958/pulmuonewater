$(document).ready(function () {
    // 모달창
    let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    let modal_show = $('.modal-show');
    modal_close.click(function () {
        modal.fadeOut();
    });
    modal.click(function () {
        modal.fadeOut();
    });
    modal_cont.click(function (event) {
        event.stopPropagation();
    });
    modal_show.click(function (e) {
        // href 를 막아야 합니다.
        e.preventDefault();
        modal.fadeIn();
    });
});