$(function(){if(isWeiXin()){var o=xigou.getLocalStorage("openid");if(!o)return void xigou.getwxOpenid(1,!0);var e={uniontype:"1",unionval:o,signature:"af288db869b27f21cc1440385d63d4d5",curtime:(new Date).valueOf().toString()};xigou.activeUser.unionlogon({requestBody:e,callback:function(o,e){if(e==xigou.dictionary.success&&o&&o.data&&o.data.promoterinfomobile&&o.data.promoterinfomobile.isshopdss){if(o.data.promoterinfo&&"{}"!=o.data.promoterinfo){var a=JSON.parse(o.data.promoterinfo);a.token=o.data.token,xigou.setLocalStorage("dssUser",a,!0)}var t={token:o.data.token,telephone:o.data.tel,name:o.data.name};xigou.removeSessionStorage("realname"),xigou.removeSessionStorage("realnum"),xigou.setSessionStorage("userinfo",t,!0),xigou.setLocalStorage("login_name",o.data.tel),xigou.setLocalStorage("show_name",o.data.tel||o.data.name),xigou.setLocalStorage("token",o.data.token),window.location.href="dss/dsshome.html"}else window.location.href="index.html"}})}});