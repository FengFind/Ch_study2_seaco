(function(a){var c=this;c.activeSpecialsale=c.activeSpecialsale||{},c.activeSpecialsale.product=function(t){if(c.locationData)a.isFunction(t.callback)&&t.callback(static_data.topic.products,c.dictionary.success);else{var i=c.activeHost+c.activeUrl.topic.products+"?"+t.p;ajaxGet(t,i)}},c.activeSpecialsale.htproduct=function(t){if(c.locationData)a.isFunction(t.callback)&&t.callback(static_data.topic.products,c.dictionary.success);else{var i=c.activeHost+c.activeUrl.topic.products+"?"+t.p;ajaxGet(t,i)}},c.activeSpecialsale.details=function(t){if(c.locationData)a.isFunction(t.callback)&&t.callback(static_data.topic.detail,c.dictionary.success);else{var i=c.activeHost+c.activeUrl.topic.detail+"?"+t.p;ajaxGet(t,i)}},c.activeSpecialsale.htdetails=function(t){if(c.locationData)a.isFunction(t.callback)&&t.callback(static_data.topic.detail,c.dictionary.success);else{var i=c.activeHost+c.activeUrl.topic.detail+"?"+t.p;ajaxGet(t,i)}}}).call(xigou,Zepto);