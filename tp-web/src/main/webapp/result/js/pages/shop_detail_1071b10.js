function show(){$("#bg_shadow").addClass("bg_shadow").addClass("from-below"),$("#bg_shadow").addClass("bg_shadow"),setTimeout(function(){$("#bg_shadow").addClass("effeckt-show")},300)}function hide(){$("#bg_shadow").removeClass("effeckt-show").removeClass("bg_shadow").removeClass("from-below")}function show_shop(){$("#shop_detail_information").show(),$("#shop_detail_information").addClass("from-below"),setTimeout(function(){$("#shop_detail_information").addClass("effeckt-show").removeClass("from-below")},300)}function hide_shop(){$("#shop_detail_information").addClass("from-below").removeClass("effeckt-show"),setTimeout(function(){$("#showDiv").addClass("from-below")},300)}function details(e){var i={p:"tid="+specialid,showLoading:showLoading,callback:function(i,o){if(o==xigou.dictionary.success){var s=i||null;if(null==s||0==s.length)return!1;if(0==s.code){if(s.data.status&&0==parseInt(s.data.status))return void(window.location.href="specialsaleend.html?specialname="+s.data.name);"西客商城"==title&&s.data.name&&(title=s.data.name),void 0!=typeof tophtml&&$(".hd-tophtml").append(s.data.tophtml),$("title").text(s.data.name);var t=[];$("#imgLogo").attr("src",qiNiuUrl+s.data.logoPath),$(".shop_detail_header_bg").css({background:"url("+qiNiuUrl+s.data.mobileImage+") top no-repeat"}),$("#details").append(t.join("")),$(".ui-imglazyload").imglazyload(),$("#fifter, .shop_name_detail").html(s.data.shopName),order_price(e);var a=$(".zhuangchang"),n=Date.parse(new Date),r=($(a).attr("starttime"),$(a).attr("endtime"));parseInt(r-n)/1e3/60/60/24<=7&&getTimeRest(n,r,$(a),!0),(window.location.href.indexOf("=6885")>-1||window.location.href.indexOf("=7498")>-1||window.location.href.indexOf("=7348")>-1||window.location.href.indexOf("=7707")>-1)&&(xigou.setSessionStorage("comeFromAd","1"),$(".floor_top_filter").addClass("hide"),$(".products_list").addClass("hide"));var d=$('script[src*="bokecc.com"]');if(d&&0!=d.length){var l=document.createElement("script");l.src=d[0].src;var c=$("#headerImage")[0];c.appendChild(l),d.remove()}var u=$("img")[0];u&&(imgUrl=u.getAttribute("src"))}}}};haitao?xigou.activeSpecialsale.htdetails(i):xigou.activeSpecialsale.details(i)}function product(e,i,o){if(o&&"Y"==specialsale_max)return o&&o.lock(),!1;"undefined"==typeof i&&(i="");var s=[];s.push("tid="+specialid),s.push("curpage="+e),s.push("sort="+i),s.push("shopmobile="+shopMobileVal);var t={p:s.join("&"),showLoading:!1,callback:function(i,s){if(s==xigou.dictionary.success){var t=i||null;if(null==t||0==t.length)return!1;if(0==t.code){if(s==xigou.dictionary.success){var t=i||null;if(null==t||0==t.length)return!1;if(0==t.code){{var a=[],n=t.data.list,r=!1;xigou.default_img}if("undefined"==typeof i.data||""==i.data||"undefined"==typeof i.data.list||0==i.data.list.length)o.lock(),$(".dropload-down").hide();else{for(var d=0;d<n.length;d++){var l=n[d].imgurl||xigou.default_img,c=specialid,u=n[d].sku,p="00",g="00",h=n[d].price.split(".");h.length>0&&(p=h[0],h.length>1&&(g=h[1])),a.push('<div class="product_item">'),a.push('	<div class="product_item_box" tid="'+c+'" sku="'+u+'">'),a.push('		<a href="item.html?tid='+c+"&sku="+u+'">'),a.push('			<img class="product_img" src="'+l+'" >'),a.push('			<div class="product_name">'+n[d].name+"</div>"),a.push('			<div class="product_price">￥<span class="product_price_yuan">'+p+"</span>."+g+"&nbsp;"),a.push('				<span class="product_old_price">￥'+n[d].oldprice+"</span>"),a.push("			</div>"),a.push('			<div class = "fy_price" style = "display: none;">返佣:￥<span>'+n[d].commision+"</span></div>"),a.push("		</a>"),a.push("	</div>"),a.push("</div>")}1==e&&$("#shop_products_id").empty(),$("#shop_products_id").append(a.join(" ")),$(".product_item")[xigou.events.click](function(){}),$(".ui-imglazyload").imglazyload(),$(".store_timer").each(function(e,i){var o=$(i).attr("starttime"),s=$(i).attr("endtime");getTimeRest(o,s,$(i))}),t.data.list.length>0&&($(".ui-refresh-down").show(),r=!0),t.data.totalpagecount==e&&(specialsale_max="Y"),(window.location.href.indexOf("=6885")>-1||window.location.href.indexOf("=7498")>-1||window.location.href.indexOf("=7348")>-1||window.location.href.indexOf("=7707")>-1)&&(xigou.setSessionStorage("comeFromAd","1"),$(".floor_top_filter").addClass("hide"),$(".products_list").addClass("hide"));var f=xigou.getSessionStorage("hdlistid"),m=JSON.stringify(n);(1==e||f!=specialid)&&xigou.setSessionStorage("hdlist","");var _=xigou.getSessionStorage("hdlist");if(_){for(var v=JSON.parse(_),x=0,w=n.length;w>x;x++)v.push(n[x]);xigou.setSessionStorage("hdlist",JSON.stringify(v))}else xigou.setSessionStorage("hdlist",m);xigou.setSessionStorage("historyhdpage",e),xigou.setSessionStorage("hdlistid",specialid),shopMobileVal&&$(".fy_price").show()}}else o.lock(),$(".dropload-down").hide()}}}}};xigou.activeSpecialsale.product(t)}function order_price(e){$("#div_sort")[xigou.events.click](function(){switch(isascending){case"0":isascending="1",$(this).addClass("div_sort_down"),$(this).removeClass("div_sort_up");break;case"1":isascending="2",$(this).removeClass("div_sort_down"),$(this).addClass("div_sort_up");break;case"2":isascending="0",$(this).removeClass("div_sort_down"),$(this).removeClass("div_sort_up")}specialsale_max="N",listCount=1,$("#shop_products_id").empty(),e.unlock(),e.resetload(),product(listCount++,isascending,e)})}function getDssUserInfo(){var e=xigou.getLocalStorage("dssUser");if(e&&"{}"!=e){if(e=JSON.parse(e),e.token&&e.token==xigou.getToken())return void(shopOwer=e.mobile||e.shopmobile);if(!xigou.getQueryString("shop"))return void(shopOwer=e.mobile||e.shopmobile)}xigou.getDssUserInfo({requestBody:{shop:xigou.getQueryString("shop"),token:xigou.getToken(),priority:0},callback:function(e,i){i==xigou.dictionary.success&&null!=e&&e.mobile&&(shopOwer=e.mobile,0==parseInt(e.source)?e.token=xigou.getToken():e.shop=xigou.getQueryString("shop"),(null==xigou.getLocalStorage("dssUser",!0)||""==xigou.getLocalStorage("dssUser",!0)||"{}"==xigou.getLocalStorage("dssUser",!0)||xigou.getLocalStorage("dssUser",e,!0).mobile!=e.mobile)&&xigou.setLocalStorage("dssUser",e,!0))}})}function InitWeixin(){showLoading=!1,xigou.loading.open();var e=[],i=location.href.split("#")[0].replace(/&+/g,"%26");e.push("url="+i),xigou.activeUser.config({p:e.join("&"),showLoading:!1,callback:function(e,i){if(i==xigou.dictionary.success&&e&&0==e.code){var o=e.data;wx.config({appId:o.appid,timestamp:o.timestamp,nonceStr:o.nonceStr,signature:o.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","scanQRCode"]})}}})}function loadHistoryData(){listCount=xigou.getSessionStorage("historyhdpage");var e=xigou.getSessionStorage("hdlist");if(e){for(var i=JSON.parse(e),o=[],s=0,t=i.length;t>s;s++){var a=i[s].imgurl||xigou.default_img,n=specialid,r=i[s].sku,d="00",l="00",c=i[s].price.split(".");c.length>0&&(d=c[0],c.length>1&&(l=c[1])),o.push('<div class="product_item">'),o.push('	<div class="product_item_box" tid="'+n+'" sku="'+r+'">'),o.push('		<a href="item.html?tid='+n+"&sku="+r+'">'),o.push('			<img class="product_img" src="'+a+'" >'),o.push('			<div class="product_name">'+i[s].name+"</div>"),o.push('			<div class="product_price">￥<span class="product_price_yuan">'+d+"</span>."+l+"&nbsp;"),o.push('				<span class="product_old_price">￥'+i[s].oldprice+"</span>"),o.push("			</div>"),o.push('			<div class = "fy_price" style = "display: none;">返佣:￥<span>'+i[s].commision+"</span></div>"),o.push("		</a>"),o.push("	</div>"),o.push("</div>")}$("#shop_products_id").empty().append(o.join(" ")),shopMobileVal&&$(".fy_price").show();var n=xigou.getSessionStorage("specialid"),r=xigou.getSessionStorage("specialSku");if(n==specialid&&r){var u=$('a[href$="'+r+'"]')[0];u&&setTimeout(function(){u.scrollIntoViewIfNeeded()},500)}}}function Initkf(){var e=xigou.getLocalStorage("show_name")||xigou.getLocalStorage("login_name")||"西客会员";if(e){var i=document.createElement("script");i.type="text/javascript",i.src="https://qiyukf.com/script/6e39dddabff63d902f55df3961c2793d.js?name="+e+"&mobile="+e,$("body")[0].appendChild(i)}$("body").append('<div class="header_img header_img2" id="header_img2" onclick="ysf.open();return false;"></div>')}var specialid=xigou.getQueryString("tid");specialid.indexOf("#")>-1&&(specialid=specialid.substring(0,specialid.indexOf("#"))),xigou.setSessionStorage("specialid",specialid);var qiNiuUrl="",brandStory="",tmnotice=xigou.getQueryString("tmnotice"),isTmrNotice=0;""!=tmnotice&&(isTmrNotice=1);var refreshComp;tmnotice=tmnotice?"&tmnotice="+tmnotice:"";var haitao=xigou.getQueryString("haitao"),comefromAd=xigou.getSessionStorage("comeFromAd"),isascending="0",title="",desc="",imgUrl="",listCount=1,showLoading=!0,shopMobileVal=null;$(function(){var e=xigou.getLocalStorage("dssUser");if(e&&"{}"!=e){var i=JSON.parse(e);shopMobileVal=i&&i.mobile&&i.token?i.mobile:null}var o=$(".body").dropload({scrollArea:window,loadDownFn:function(e){1==listCount&&xigou.getSessionStorage("hdlist")&&specialid==xigou.getSessionStorage("hdlistid")?loadHistoryData():product(listCount,isascending,e),listCount++,e.resetload()}});getDssUserInfo(),details(o),xigou.setSessionStorage("productdetails_backurl","shop_detail.html?tid="+specialid),"shop"==xigou.getQueryString("from")&&$("a.hd-back").attr("href","shop.html"),Initkf()}),$(document).ready(function(){var e=0,i=0;$(window).scroll(function(){e=$(this).scrollTop(),e>=i&&i>=237?($("#shop_detail_header").addClass("shop_detail_header1"),$("#shop_top").addClass("shop_top1").removeClass("shop_top"),$("#ban_part").addClass("ban_part1").removeClass("ban_part"),$(".shop_products_list").css({"padding-top":"76px"}),$("#fifter").show().addClass("fifter"),show()):i>e&&214>=e&&($("#shop_detail_header").removeClass("shop_detail_header1"),$("#ban_part").addClass("ban_part").removeClass("ban_part1"),$("#shop_top").addClass("shop_top").removeClass("shop_top1"),$(".shop_products_list").css({"padding-top":"0px"}),$("#fifter").hide().removeClass("fifter"),hide()),e>=i&&i>=30?hide_shop():i>e&&30>=e&&show_shop(),setTimeout(function(){i=e},0)})}),$(".header_img3")[xigou.events.click](function(){$(".share_friends").show()}),$(".share_friends")[xigou.events.click](function(){$(".share_friends").hide()});var specialsale_max="N",shopOwer=null;wx.ready(function(){wx.checkJsApi({jsApiList:["getNetworkType","previewImage"],success:function(){}});var e=xigou.getQueryString("tid"),i=location.href.split("?")[0]+"?tid="+e;shopOwer&&(i=i+"&shop="+shopOwer),wx.onMenuShareAppMessage({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareTimeline({title:title,link:i,imgUrl:imgUrl,trigger:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareQQ({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareWeibo({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareQZone({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),xigou.loading.close(),xigou.wxreadyalert()}),wx.error(function(){});