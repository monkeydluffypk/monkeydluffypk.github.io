function initEmbeddedMessaging() {
	try {
		embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
		embeddedservice_bootstrap.init(
			'00D4y000000dVOZ',
			'ESA_Web_Deployment',
			'https://furucrm-pms-dev-ed.develop.my.site.com/ESWESAWebDeployment1724800920657',
			{
				scrt2URL: 'https://furucrm-pms-dev-ed.develop.my.salesforce-scrt.com'
			}
		);
	} catch (err) {
		console.error('Error loading Embedded Messaging: ', err);
	}
};

window.addEventListener("onEmbeddedMessagingReady", () => {
  	console.log('@@@ onEmbeddedMessagingReady');
	$('.custom_msg_pop').show();
});
