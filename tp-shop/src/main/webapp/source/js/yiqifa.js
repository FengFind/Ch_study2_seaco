xigou.removelocalStorage("channelsource");
xigou.removelocalStorage("clientcode");
xigou.removelocalStorage("distributecode");
xigou.removelocalStorage("channelcode");
xigou.removelocalStorage("yiqifarddate");
var channel = xigou.getQueryString("channel");
var cid = xigou.getQueryString("cid");
var wi = xigou.getQueryString("wi");
var aid = xigou.getQueryString("aid");
var url = decodeURIComponent(xigou.getQueryString("url"));
var yiqifarddate = new Date();
xigou.setLocalStorage("channelsource", channel);
xigou.setLocalStorage("clientcode", cid);
xigou.setLocalStorage("distributecode", wi);
xigou.setLocalStorage("channelcode", aid);
xigou.setLocalStorage("yiqifarddate", yiqifarddate.getTime());
location.href=url;