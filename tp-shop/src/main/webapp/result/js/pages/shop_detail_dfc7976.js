function details(e){var i={p:"tid="+specialid,showLoading:showLoading,callback:function(i,s){if(s==xigou.dictionary.success){var t=i||null;if(null==t||0==t.length)return!1;if(0==t.code){if(t.data.status&&0==parseInt(t.data.status))return void(window.location.href="specialsaleend.html?specialname="+t.data.name);"全球购商城"==title&&t.data.name&&(title=t.data.name),void 0!=typeof tophtml&&$(".hd-tophtml").append(t.data.tophtml),$("title").text(t.data.name);var o=[];$("#imgLogo").attr("src",qiNiuUrl+t.data.logoPath),$(".shop_detail_header_bg").css({background:"url("+qiNiuUrl+t.data.mobileImage+") top no-repeat"}),$("#details").append(o.join("")),$(".ui-imglazyload").imglazyload(),$("#fifter, .shop_name_detail").html(t.data.shopName),order_price(e);var a=$(".zhuangchang"),n=Date.parse(new Date),r=($(a).attr("starttime"),$(a).attr("endtime"));parseInt(r-n)/1e3/60/60/24<=7&&getTimeRest(n,r,$(a),!0),(window.location.href.indexOf("=6885")>-1||window.location.href.indexOf("=7498")>-1||window.location.href.indexOf("=7348")>-1||window.location.href.indexOf("=7707")>-1)&&(xigou.setSessionStorage("comeFromAd","1"),$(".floor_top_filter").addClass("hide"),$(".products_list").addClass("hide"));var d=$('script[src*="bokecc.com"]');if(d&&0!=d.length){var l=document.createElement("script");l.src=d[0].src;var c=$("#headerImage")[0];c.appendChild(l),d.remove()}var u=$("img")[0];u&&(imgUrl=u.getAttribute("src"))}}}};haitao?xigou.activeSpecialsale.htdetails(i):xigou.activeSpecialsale.details(i)}function product(e,i,s){if(s&&"Y"==specialsale_max)return s&&s.lock(),!1;"undefined"==typeof i&&(i="");var t=[];t.push("tid="+specialid),t.push("curpage="+e),t.push("sort="+i);var o={p:t.join("&"),showLoading:!1,callback:function(i,t){if(t==xigou.dictionary.success){var o=i||null;if(null==o||0==o.length)return!1;if(0==o.code){if(t==xigou.dictionary.success){var o=i||null;if(null==o||0==o.length)return!1;if(0==o.code){{var a=[],n=o.data.list,r=!1;xigou.default_img}if("undefined"==typeof i.data||""==i.data||"undefined"==typeof i.data.list||0==i.data.list.length)s.lock(),$(".dropload-down").hide();else{for(var d=0;d<n.length;d++){var l=n[d].imgurl||xigou.default_img,c=specialid,u=n[d].sku,g="00",p="00",h=n[d].price.split(".");h.length>0&&(g=h[0],h.length>1&&(p=h[1])),a.push('<div class="product_item">'),a.push('	<div class="product_item_box" tid="'+c+'" sku="'+u+'">'),a.push('		<a href="item.htm?tid='+c+"&sku="+u+'">'),a.push('			<img class="product_img" src="'+l+'" >'),a.push('			<div class="product_name">'+n[d].name+"</div>"),a.push('			<div class="product_price">￥<span class="product_price_yuan">'+g+"</span>."+p+"&nbsp;"),a.push('				<span class="product_old_price">￥'+n[d].oldprice+"</span>"),a.push("			</div>"),a.push('			<div class = "fy_price" style = "display: none;">返佣:￥<span>'+n[d].commision+"</span></div>"),a.push("		</a>"),a.push("	</div>"),a.push("</div>")}1==e&&$("#shop_products_id").empty(),$("#shop_products_id").append(a.join(" ")),$(".product_item")[xigou.events.click](function(){}),$(".ui-imglazyload").imglazyload(),$(".store_timer").each(function(e,i){var s=$(i).attr("starttime"),t=$(i).attr("endtime");getTimeRest(s,t,$(i))}),o.data.list.length>0&&($(".ui-refresh-down").show(),r=!0),o.data.totalpagecount==e&&(specialsale_max="Y"),(window.location.href.indexOf("=6885")>-1||window.location.href.indexOf("=7498")>-1||window.location.href.indexOf("=7348")>-1||window.location.href.indexOf("=7707")>-1)&&(xigou.setSessionStorage("comeFromAd","1"),$(".floor_top_filter").addClass("hide"),$(".products_list").addClass("hide"));var f=xigou.getSessionStorage("hdlistid"),m=JSON.stringify(n);(1==e||f!=specialid)&&xigou.setSessionStorage("hdlist","");var _=xigou.getSessionStorage("hdlist");if(_){for(var v=JSON.parse(_),x=0,S=n.length;S>x;x++)v.push(n[x]);xigou.setSessionStorage("hdlist",JSON.stringify(v))}else xigou.setSessionStorage("hdlist",m);xigou.setSessionStorage("historyhdpage",e),xigou.setSessionStorage("hdlistid",specialid)}}else s.lock(),$(".dropload-down").hide()}}}}};xigou.activeSpecialsale.product(o)}function order_price(e){$(".div_sort")[xigou.events.click](function(){switch(isascending){case"0":isascending="1",$(this).addClass("div_sort_down"),$(this).removeClass("div_sort_up");break;case"1":isascending="2",$(this).removeClass("div_sort_down"),$(this).addClass("div_sort_up");break;case"2":isascending="0",$(this).removeClass("div_sort_down"),$(this).removeClass("div_sort_up")}specialsale_max="N",listCount=1,$("#shop_products_id").empty(),e.unlock(),e.resetload(),product(listCount++,isascending,e)})}function getDssUserInfo(){var e=xigou.getSessionStorage("dssUser");if(e&&"{}"!=e){if(e=JSON.parse(e),e.token&&e.token==xigou.getToken())return void(shopOwer=e.mobile||e.shopmobile);if(!xigou.getQueryString("shop"))return void(shopOwer=e.mobile||e.shopmobile)}xigou.getDssUserInfo({requestBody:{shop:xigou.getQueryString("shop"),token:xigou.getToken(),priority:0},callback:function(e,i){i==xigou.dictionary.success&&null!=e&&e.mobile&&(shopOwer=e.mobile,0==parseInt(e.source)?e.token=xigou.getToken():e.shop=xigou.getQueryString("shop"),(null==xigou.getLocalStorage("dssUser",!0)||""==xigou.getLocalStorage("dssUser",!0)||"{}"==xigou.getLocalStorage("dssUser",!0)||xigou.getLocalStorage("dssUser",e,!0).mobile!=e.mobile)&&xigou.setLocalStorage("dssUser",e,!0))}})}function InitWeixin(){showLoading=!1,xigou.loading.open();var e=[],i=location.href.split("#")[0].replace(/&+/g,"%26");e.push("url="+i),xigou.activeUser.config({p:e.join("&"),showLoading:!1,callback:function(e,i){if(i==xigou.dictionary.success&&e&&0==e.code){var s=e.data;wx.config({appId:s.appid,timestamp:s.timestamp,nonceStr:s.nonceStr,signature:s.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","scanQRCode"]})}}})}function loadHistoryData(){listCount=xigou.getSessionStorage("historyhdpage");var e=xigou.getSessionStorage("hdlist");if(e){for(var i=JSON.parse(e),s=[],t=0,o=i.length;o>t;t++){var a=i[t].imgurl||xigou.default_img,n=specialid,r=i[t].sku,d="00",l="00",c=i[t].price.split(".");c.length>0&&(d=c[0],c.length>1&&(l=c[1])),s.push('<div class="product_item">'),s.push('	<div class="product_item_box" tid="'+n+'" sku="'+r+'">'),s.push('		<a href="item.htm?tid='+n+"&sku="+r+'">'),s.push('			<img class="product_img" src="'+a+'" >'),s.push('			<div class="product_name">'+i[t].name+"</div>"),s.push('			<div class="product_price">￥<span class="product_price_yuan">'+d+"</span>."+l+"&nbsp;"),s.push('				<span class="product_old_price">￥'+i[t].oldprice+"</span>"),s.push("			</div>"),s.push('			<div class = "fy_price" style = "display: none;">返佣:￥<span>'+i[t].commision+"</span></div>"),s.push("		</a>"),s.push("	</div>"),s.push("</div>")}$("#shop_products_id").empty().append(s.join(" "));var n=xigou.getSessionStorage("specialid"),r=xigou.getSessionStorage("specialSku");if(n==specialid&&r){var u=$('a[href$="'+r+'"]')[0];u&&setTimeout(function(){u.scrollIntoViewIfNeeded()},500)}}}function Initkf(){var e="["+xigou.getSessionStorage("eshopName")+"]"+(xigou.getLocalStorage("show_name")||xigou.getLocalStorage("login_name")||"会员");if(e){var i=document.createElement("script");i.type="text/javascript",i.src="https://qiyukf.com/script/6e39dddabff63d902f55df3961c2793d.js?name="+e+"&mobile="+e,$("body")[0].appendChild(i)}$("body").append('<div class="header_img header_img2" id="header_img2" onclick="ysf.open();return false;"></div><div class="header_imgs header_img2" id="header_img2" style="display:none;" onclick="ysf.open();return false;"></div>')}var specialid=xigou.getQueryString("tid");specialid.indexOf("#")>-1&&(specialid=specialid.substring(0,specialid.indexOf("#"))),xigou.setSessionStorage("specialid",specialid);var qiNiuUrl="",brandStory="",tmnotice=xigou.getQueryString("tmnotice"),isTmrNotice=0;""!=tmnotice&&(isTmrNotice=1);var refreshComp;tmnotice=tmnotice?"&tmnotice="+tmnotice:"";var haitao=xigou.getQueryString("haitao"),comefromAd=xigou.getSessionStorage("comeFromAd"),isascending="0",title="",desc="",imgUrl="",listCount=1,showLoading=!0;$(function(){$(".shop_detail_header1").hide(),$(".header_imgs").hide();var e=$(".body").dropload({scrollArea:window,loadDownFn:function(e){1==listCount&&xigou.getSessionStorage("hdlist")&&specialid==xigou.getSessionStorage("hdlistid")?loadHistoryData():product(listCount,isascending,e),listCount++,e.resetload()}});getDssUserInfo(),details(e),xigou.setSessionStorage("productdetails_backurl","shop_detail.html?tid="+specialid),"shop"==xigou.getQueryString("from")&&$("a.hd-back").attr("href","shop.html"),Initkf()}),$(window).scroll(function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>100?($(".shop_detail_header1").show(),$(".header_img").hide(),$(".header_imgs").show(),$("#shop_detail_information").hide(),$("#div_title").removeClass("div_title").addClass("div_title1"),$("#div_sort").removeClass("div_sort").addClass("div_sort1"),$("#bg_shadow").addClass("bg_shadow"),$("#fifter").show().addClass("fifter")):($(".shop_detail_header1").hide(),$(".header_img").show(),$(".header_imgs").hide(),$("#shop_detail_information").show(),$("#div_title").removeClass("div_title1").addClass("div_title"),$("#div_sort").removeClass("div_sort1").addClass("div_sort"),$("#bg_shadow").removeClass("bg_shadow"),$("#fifter").hide().removeClass("fifter"))}),$(".header_img3")[xigou.events.click](function(){$(".share_friends").show()}),$(".share_friends")[xigou.events.click](function(){$(".share_friends").hide()});var specialsale_max="N",shopOwer=null;wx.ready(function(){wx.checkJsApi({jsApiList:["getNetworkType","previewImage"],success:function(){}});var e=xigou.getQueryString("tid"),i=location.href.split("?")[0]+"?tid="+e;shopOwer&&(i=i+"&shop="+shopOwer),wx.onMenuShareAppMessage({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareTimeline({title:title,link:i,imgUrl:imgUrl,trigger:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareQQ({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareWeibo({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareQZone({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),xigou.loading.close(),xigou.wxreadyalert()}),wx.error(function(){});