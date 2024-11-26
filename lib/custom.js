$(document).ready(function(){

  window.addEventListener("onEmbeddedMessagingReady", (event) => {
    	console.log('@@@ onEmbeddedMessagingReady = ' + event.detail);
  	$('.custom_msg_pop').show();
  });
  
  window.addEventListener("onEmbeddedMessagingWindowMinimized", (event) => {
    	console.log('@@@ onEmbeddedMessagingWindowMinimized = ' + event.detail);
  	$('.custom_msg_pop').show();
  });
  
  window.addEventListener("onEmbeddedMessagingWindowMaximized", (event) => {
    	console.log('@@@ onEmbeddedMessagingWindowMaximized = ' + event.detail);
  	$('.custom_msg_pop').hide();
  });

  window.addEventListener("onEmbeddedMessageSent", (event) => {
    	console.log('@@@ onEmbeddedMessageSent = ' + event.detail);

  });

  window.addEventListener("onEmbeddedMessagingConversationStarted", (event) => {
    console.log("@@@ onEmbeddedMessagingConversationStarted = " + event.detail);

  });

  window.addEventListener("onEmbeddedMessagingConversationClosed", (event) => {
    console.log("@@@ onEmbeddedMessagingConversationClosed = " + event.detail);

  });

});
