$(document).ready(function(){

  setTimeout(function() {
    $('.custom_msg_pop').click(function(){
      $('.custom_msg_pop').hide();
      $('#embeddedMessagingConversationButton').trigger('click');
    });

  }, 5000);

});
