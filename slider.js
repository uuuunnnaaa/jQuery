$(document).ready(() => {
    $(".slider").click(function () {
        // 刪除全部的 .slider 類別 active
        $(".slider").removeClass("active");
        // 點下去添加 .slider 類別 active
        $(this).addClass("active");
    });
});