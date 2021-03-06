<#include "/common/common.ftl"/> 
<@backend title="APP首页动态配置" js=[
	'/statics/backend/js/dateTime2/js/jquery-ui.min.js',
	'/statics/backend/js/dateTime2/js/jquery-ui-timepicker-addon.js',
	'/statics/backend/js/dateTime2/js/jquery-ui-timepicker-zh-CN.js',
	'/statics/backend/js/layer/layer.min.js',
	'/statics/js/validation/jquery.validate.min.js',
	'/statics/backend/js/app/dc.js']
	css=[
	'/statics/backend/js/jqueryui/css/cupertino/jquery-ui-1.9.2.custom.min.css',
	'/statics/backend/js/dateTime2/css/jquery-ui-timepicker-addon.css'] >
<#if result.msg??>${result.msg.message}<#else>
<#assign info = result.data>
<form method="post" action="${domain}/app/push/save.htm" id="savePushInfoForm">
<input type="hidden" name="id" value="${pushInfo.id}"/>
<div id="search_bar" class="mt10">
	<div class="box">
		<div class="box_border">
			<div class="box_center pt10 pb10">
				<div class="box_top">
					<b class="pl15">APP首页动态配置</b>
				</div>
                <div class="box_bottom pb5 pt5 pr10" style="border-top:1px solid #dadada;">
                    <div class="search_bar_btn" style="text-align:left;">

                        <input class="btn btn82 btn_add  addButton" type="button" value="新增" >
                    </div>
                </div>
				<div class="box_center pt10 pb10">
					<table class="list_table" border="0" cellpadding="0" cellspacing="0" width="100%">
						<thead>
						<th>ID</th>
						<th>配置名称</th>
						<th>版本区间</th>
						<th>创建人</th>
						<th>创建时间</th>
						<th>状态</th>
						<th>操作</th>
						</thead>
						<#list result.data as info >
						<tr>
							<td>${info.id}</td>
							<td>${info.name}</td>
							<td>${info.versionFrom}-${info.versionTo}</td>
							<td>${info.createUser}</td>
							<td>${info.createTime?string("yyyy-MM-dd HH:mm:ss")}</td>
							<td>
								<#if info.status==0>未启用<#elseif info.status==1>已启用</#if>
							</td>
							<td>
								<a href="javascript:void (0)" class="detail-config"  data = ${info.id}>[詳細]</a>
								<#if info.status = 0>
                                    <a href="javascript:void (0)" class="enable-config" id="enable" data = ${info.id}>[启用]</a>
                                    <a href="javascript:void (0)" class="del-config" id="del" data = ${info.id}>[删除]</a>
								<#elseif info.status == 1>
                                    <a href="javascript:void (0)" class="disable-config" id="enable" data = ${info.id}>[禁用]</a>
                                    <a href="javascript:void (0)" class="del-config" id="del" data = ${info.id}>[删除]</a>
								</#if>

							</td>
						</tr>

						</#list>

					</table>
				</div>
			</div>
		</div>
	</div>

</div>
</form>
</#if>
</@backend>
