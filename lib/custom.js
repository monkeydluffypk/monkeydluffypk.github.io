$(document).ready(function(){

  window.addEventListener("onEmbeddedMessagingReady", () => {
    	console.log('@@@ onEmbeddedMessagingReady');
  	$('.custom_msg_pop').show();
  });
  
  window.addEventListener("onEmbeddedMessagingWindowMinimized", () => {
    	console.log('@@@ onEmbeddedMessagingWindowMinimized');
  	$('.custom_msg_pop').show();
  });
  
  window.addEventListener("onEmbeddedMessagingWindowMaximized", () => {
    	console.log('@@@ onEmbeddedMessagingWindowMaximized');
  	$('.custom_msg_pop').hide();
  });

});
