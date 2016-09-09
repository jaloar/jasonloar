$('#circle').click(function () {
    $(this).css('background','yellow');
})

$('.square').click(function () {
    $(this).css('background','blue');
})

$(function(){
    $('#draggable').draggable();
})

$(function(){
    $('#resizable').resizable();
})