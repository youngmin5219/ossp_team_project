$(document).ready(function(){
  $('.tip_list_more').hide();
  $('#video_more').click(function(){
    $('#video_brief').show();
    $('#video_more').hide();
    $('.video_list_more').fadeIn(400, function(){
    });
  });
  $('#video_brief').click(function(){
    $('#video_brief').hide();
    $('#video_more').show();
    $('.video_list_more').fadeOut(400, function(){
    });
  });
  $('#tip_more').click(function(){
    $('#tip_brief').show();
    $('#tip_more').hide();
    $('.tip_list_more').fadeIn(400, function(){
    });
  });
  $('#tip_brief').click(function(){
    $('#tip_brief').hide();
    $('#tip_more').show();
    $('.tip_list_more').fadeOut(400, function(){
    });
  });
});
