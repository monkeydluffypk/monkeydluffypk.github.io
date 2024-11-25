$(document).ready(function(){
  
  $('.custom_msg_pop').click(function(){
    console.log('@@@ custom_msg_pop on clicked');
    $('.custom_msg_pop').hide();
    $('#embeddedMessagingConversationButton').trigger('click');
  });
  
  $('.minimizeButton, .closeButton, .slds-icon-utility-chevrondown, .slds-icon-utility-close').click(function(){
    console.log('@@@ chat close');
    $('.custom_msg_pop').show();
  });
  
});
