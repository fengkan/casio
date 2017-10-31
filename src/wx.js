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
    document.getElementById('bgmusic').play();
    document.getElementById('bgmusic').muted = false;
		wx.onMenuShareTimeline({
			title: "声色迷宫玩一把，颜值秒提180",
			link: "http://casio.maxantad.com/index.html", 
			desc: "赢卡西欧TR声色礼包，寻找美颜新机",
			imgUrl: "http://casio.maxantad.com/img/share.jpg", 
			success: function () {
        sendShared();
				console.log("onMenuShareTimeline success");
			},
			cancel: function () {
			}
		});

		wx.onMenuShareAppMessage({
			title: "声色迷宫玩一把，颜值秒提180",
			link: "http://casio.maxantad.com/index.html", 
			desc: "赢卡西欧TR声色礼包，寻找美颜新机",
			imgUrl: "http://casio.maxantad.com/img/share.jpg", 
			type: "", 
			dataUrl: "", 
			success: function () {
        sendShared();
				console.log("onMenuShareAppMessage success");
			},
			cancel: function () {
			}
		});

	});

} else {
      window.location.href="http://baidu.com";

}

    });

