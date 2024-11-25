$(document).ready(function(){
  
  $(".custom_msg_pop").click(function(){
    $(".custom_msg_pop").hide();
    $("#embeddedMessagingConversationButton").trigger( "click" );
  });
  
  $(".headerButton .closeButton").click(function(){
    $(".custom_msg_pop").show();
  });
  
});
