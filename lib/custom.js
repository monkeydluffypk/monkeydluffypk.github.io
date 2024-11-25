.custom_msg_pop
$(document).ready(function(){
  
  $(".custom_msg_pop").click(function(){
    $(".custom_msg_pop").hide();
  });
  
  $(".headerButton .closeButton").click(function(){
    $(".custom_msg_pop").show();
  });
  
});
