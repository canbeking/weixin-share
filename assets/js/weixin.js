/* 微信的接口*/
import wx from 'weixin-js-sdk'
import './zepto.min.js'

/*获取签名*/
function getSignature () {
	$.ajax({
		type: 'post',
		url: 'wechat/getconfig.do',
		data: {
			url: location.href
		},
		success: data => {
			if (data.code == '000000') {
				wx.config({
					debug: false, //开发模式
					appId: 'wx75b#@**********', //appid
					timestamp: data.data.timestamp, //生成签名的时间戳
					nonceStr: data.data.nonceStr, //生成签名的随机串
					signature: data.data.signature, //签名
					jsApiList: [ //需要微信提供的接口
						'onMenuShareTimeline',
						'onMenuShareAppMessage',
						'onMenuShareQQ',
						'onMenuShareWeibo',
						'onMenuShareQZone',
					]
				});
			}
		}
	});
}


/*
	分享

 title: 标题
 link: 点击分享跳转的链接
 imgUrl: 分享的img img要在服务器上的
 desc: 内容
 */

let wxShare = function (title = 'XXX新闻标题', link = '', imgUrl = 'https://xxxx.com/logo/108.png', desc = '') {
	getSignature();

	wx.ready(function () {
		/*分享朋友圈*/
		wx.onMenuShareTimeline({
			title: title,
			link: link,
			imgUrl: imgUrl,
			success: () => {
				alert('分享成功');
			},
			cancel: () => {
				//alert('取消');
			}
		});

		/*分享朋友*/
		wx.onMenuShareAppMessage({
			title: title,
			link: link,
			imgUrl: imgUrl,
			desc: desc,
			success: () => {
				alert('分享成功');
			},
			cancel: () => {
				//alert('取消');
			}
		});

		/*分享QQ*/
		wx.onMenuShareQQ({
			title: title,
			link: link,
			imgUrl: imgUrl,
			desc: desc,
			success: () => {
				alert('分享成功');
			},
			cancel: () => {
				//alert('取消');
			}
		});

		/*分享腾讯微博*/
		wx.onMenuShareWeibo({
			title: title,
			link: link,
			imgUrl: imgUrl,
			desc: desc,
			success: () => {
				alert('分享成功');
			},
			cancel: () => {
				//alert('取消');
			}
		});

		/*分享空间*/
		wx.onMenuShareQZone({
			title: title,
			link: link,
			imgUrl: imgUrl,
			desc: desc,
			success: () => {
				alert('分享成功');
			},
			cancel: () => {
				//alert('取消');
			}
		});
	});
}

export default wxShare;
