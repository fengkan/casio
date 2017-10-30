$(document).ready(function () {

var userAgent = window.navigator.userAgent.toLowerCase();
var isMicroMessenger = userAgent.indexOf("micromessenger") != -1;
var self_url = window.location.href.split('#')[0];
var self_encoded_url = encodeURIComponent(self_url);

if(isMicroMessenger) {
	$.ajax({
		url: 'http://casio.maxantad.com/jweixin_signature?url='+self_encoded_url,
		dataType: 'JSON'
	}).done(function(data){
		console.log(data);
		wx.config({
			debug: false, 
			appId: "wxb73779df66a7661d", 
			timestamp: data.timestamp, 
			nonceStr: data.nonceStr, 
			signature: data.signature,
			jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] 
		});
	}).fail(function(err){
			console.log(err);
	});

	wx.ready(function(){
		wx.onMenuShareTimeline({
			title: "weixin timeline share title",
			link: "http://casio.maxantad.com/index.html", 
			imgUrl: "http://cdn.dev.egret.com/examples/wonderful_1_3/logo.png", 
			success: function () {
				console.log("onMenuShareTimeline success");
			},
			cancel: function () {
			}
		});

		wx.onMenuShareAppMessage({
			title: "weixin app share title", 
			desc: "description content for share", 
			link: "http://casio.maxantad.com/index.html",
			imgUrl: "http://cdn.dev.egret.com/examples/wonderful_1_3/logo.png",
			type: "", 
			dataUrl: "", 
			success: function () {
				console.log("onMenuShareAppMessage success");
			},
			cancel: function () {
			}
		});

	});

} else {
sendShared();
}

    });

