//1
$("#hide-1").click(() => {
    $("#h3-1").hide();
});
$("#show-1").click(() => {
    $("#h3-1").show();
});
$("#toggle-1").click(() => {
    $("#h3-1").toggle();
});

// 2
$("#hide-2").click(() => {
    $("#h3-2").hide(1000);
});
// hide(1000)動畫顯示時間
$("#show-2").click(() => {
    $("#h3-2").show("標題三顯示");
});

//3 滑上滑下效果
const h3_3 = $("#h4-3");

$("#slideUp-3").click(() => {
    h3_3.slideUp(1000);
});

$("#slideDown-3").click(() => {
    h3_3.slideDown(1000);
});

// 4
$("#btn-4").click(() => {
    $("#box-4").addClass("btn");
});
$("#box-4").dblclick(() => {
    $("#box-4").text("我是箱子被點兩下");
});