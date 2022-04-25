function dynamicallyLoadScript(url, defer) {
	var script = document.createElement("script"); // Make a script DOM node
	script.src = url; // Set it's src to the provided URL
	if (defer) {
		script.async = false;
	}
	document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

dynamicallyLoadScript('https://test7.stromma.com/assets/js/Taika_chat_Stromma/printThis.js');
dynamicallyLoadScript('https://test7.stromma.com/assets/js/Taika_chat_Stromma/chatScriptCore.js');
dynamicallyLoadScript('https://test7.stromma.com/assets/js/Taika_chat_Stromma/moment_with_timezone.js', true);

$("<link rel='stylesheet' id='chatstyle-css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css' type='text/css' media='all' />").appendTo('head');
$("<link rel='stylesheet' id='chatstyle-css' href='https://test7.stromma.com/assets/js/Taika_chat_Stromma/taika-chat-preview.css' type='text/css' media='all' />").appendTo('head');
$("<link rel='stylesheet' id='chatstyle-css' href='https://test7.stromma.com/assets/js/Taika_chat_Stromma/taika_test_style.css' type='text/css' media='all' />").appendTo('head');

function checkMoment() {
	if (typeof moment !== "undefined" && moment && moment.tz) {
		if (initDelayTimeout) clearTimeout(initDelayTimeout);
		EmbedTaikaChatCore.init('wss://connect.taikacompany.com/chat/socket', 'https://connect.taikacompany.com/static/res/', {
			"sla": {
				"silver": {
					"time": 1,
					"unit": "h",
					"toggled": false,
					"honorOffHours": false
				},
				"gold": {
					"time": 30,
					"unit": "m",
					"toggled": false,
					"honorOffHours": false
				},
				"platinum": {
					"time": 1,
					"unit": "m",
					"toggled": false,
					"honorOffHours": false
				}
			},
			"email": {
				"emailThread": true
			},
			"chat": {
				"schedule": {
					"ifClosed": "keepChatOn",
					"showOpenTime": false
				},
				"customerSatisfaction": {
					"toggled": true,
					"scale": 5
				},
				"autoReply": {
					"enabled": false,
					"message": "",
					"delay": 3
				},
				"window": {
					"chatActions": [],
					"chatHeaders": [],
					"logo": null,
					"customHeader": "Stromma Customer Support",
					"backgroundColor": "000000",
					"backgroundCustomColor": "dd052b",
					"fontCustomColor": "FFFFFF",
					"fontColor": "FFCC33"
				},
				"button": {
					"gaps": {
						"horizontal": {
							"value": 12,
							"unit": "px"
						},
						"vertical": {
							"value": 12,
							"unit": "%"
						}
					},
					"ifNoAgents": "keepChatOn",
					"chatIcon": true,
					"availableAgents": false,
					"customText": "connect Stromma",
					"textSize": "normal",
					"cornerRadius": "10%/50%",
					"color": "000000",
					"customColor": "27A536",
					"alignment": "bottom-right",
					"fontCustomColor": "FFFFFF"
				},
				"questions": ["username"],
				"welcomeText": "Tervetuloa!\nKuinka voin auttaa"
			},
			"task": {
				"isShowAmount": false,
				"isShowWorkTime": false
			},
			"departments": [],
			"fields": [],
			"playAlarm": true,
			"disabled": false,
			"canRemoveTicket": false,
			"_id": "624bf0642108a5b9189ac7d9",
			"channelType": "chat",
			"department": "605362c63511824edb2b98c0",
			"locale": "5ad84f719bd1787c7f30da93",
			"__v": 0
		});
	} else {
		var initDelayTimeout = setTimeout(checkMoment, 500);
	}
}

document.addEventListener("DOMContentLoaded", function (event) {
	checkMoment()
})