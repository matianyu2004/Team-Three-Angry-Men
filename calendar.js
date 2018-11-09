
$(document).ready(function(){
  $('table').click();
})
$('.clean').click(function(){
  $('.select').removeClass('select');
  $('table').click();
})

$('td').click(function(){
  if($(this).hasClass('select')){
    $(this).removeClass('select');
  }else{
    $(this).addClass('select');
  }
});
