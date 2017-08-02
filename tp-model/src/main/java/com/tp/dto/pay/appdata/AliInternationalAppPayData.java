package com.tp.dto.pay.appdata;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import com.tp.common.vo.OrderConstant;
import com.tp.common.vo.PaymentConstant.CurrencyEnum;
import com.tp.dto.pay.AppPayData;
import com.tp.dto.pay.postdata.PayPostData;
import com.tp.model.pay.PaymentInfo;
import com.tp.util.AlipayUtil;


public class AliInternationalAppPayData implements PayPostData, AppPayData, Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 95231196645365036L;
	private String actionUrl;
	private String key;
	private String service;
	private String partner;
	private String inputCharset;
	private String signType;
	private String notifyUrl;
	private String returnUrl;
	private String outTradeNo;
	private String currency;
	private String merchantUrl;
	private String subject;
	private String rmbFee;
	private String body;
	private String extParams;
	
	public AliInternationalAppPayData(Properties paymentConfig, PaymentInfo dto) {
		this.partner = paymentConfig.getProperty("ALIPAY_INTERNATIONAL_PARTNER");
		this.key = paymentConfig.getProperty("ALIPAY_INTERNATIONAL_KEY");
		this.inputCharset = paymentConfig.getProperty("ALIPAY_INPUT_CHARSET");
		this.notifyUrl = paymentConfig.getProperty("ALIPAY_NOTIFY_URL");
		this.returnUrl = paymentConfig.getProperty("ALIPAY_RETURN_URL") + dto.getPaymentId();
		if(dto.getOrderType()!=null && OrderConstant.FAST_ORDER_TYPE.equals(dto.getOrderType().intValue())){
			this.notifyUrl = notifyUrl.replaceFirst("(.*://)?[^/]*/", paymentConfig.getProperty("fastPay.notify_url"));
			this.returnUrl = returnUrl.replaceFirst("(.*://)?[^/]*/", paymentConfig.getProperty("fastPay.notify_url"));
		}
		this.subject = paymentConfig.getProperty("ALIPAY_SUBJECT");
		this.signType = paymentConfig.getProperty("ALIPAY_SIGN_TYPE");
		this.currency = CurrencyEnum.USD.toString();
		this.outTradeNo = dto.getPaymentTradeNo();
		this.rmbFee = String.format("%.2f", dto.getAmount());
		this.merchantUrl = this.returnUrl;
		this.extParams = "customs_place|ningbo#merchant_customs_code|1015";
	}
	public String getActionUrl() {
		return actionUrl;
	}

	public void setActionUrl(String actionUrl) {
		this.actionUrl = actionUrl;
	}

	public String getPartner() {
		return partner;
	}

	public void setPartner(String partner) {
		this.partner = partner;
	}


	public String getNotifyUrl() {
		return notifyUrl;
	}

	public void setNotifyUrl(String notifyUrl) {
		this.notifyUrl = notifyUrl;
	}


	public String getInputCharset() {
		return inputCharset;
	}

	public void setInputCharset(String inputCharset) {
		this.inputCharset = inputCharset;
	}

	public String getSignType() {
		return signType;
	}

	public void setSignType(String signType) {
		this.signType = signType;
	}

	public String getReturnUrl() {
		return returnUrl;
	}

	public void setReturnUrl(String returnUrl) {
		this.returnUrl = returnUrl;
	}

	public String getOutTradeNo() {
		return outTradeNo;
	}

	public void setOutTradeNo(String outTradeNo) {
		this.outTradeNo = outTradeNo;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getMerchantUrl() {
		return merchantUrl;
	}

	public void setMerchantUrl(String merchantUrl) {
		this.merchantUrl = merchantUrl;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getRmbFee() {
		return rmbFee;
	}

	public void setRmbFee(String rmbFee) {
		this.rmbFee = rmbFee;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getExtParams() {
		return extParams;
	}

	public void setExtParams(String extParams) {
		this.extParams = extParams;
	}

	@Override
	public String getPaymentTradeNo() {
		return outTradeNo;
	}

	@Override
	public String getSignature() {
		Map<String, String> sParam = new HashMap<String, String>();
		sParam.put("service", getService());
		sParam.put("partner", getPartner());
		sParam.put("_input_charset", getInputCharset());
		sParam.put("notify_url", getNotifyUrl());
		sParam.put("return_url", getReturnUrl());
		sParam.put("out_trade_no", getOutTradeNo());
		sParam.put("subject", getSubject());
		sParam.put("body", getBody());
		sParam.put("rmb_fee", String.valueOf(getRmbFee()));
		sParam.put("sign_type", getSignType());
		sParam.put("currency", CurrencyEnum.USD.toString());
		sParam.put("merchant_url", this.getMerchantUrl());
		sParam.put("ext_params", getExtParams());
		return AlipayUtil.buildRequestMysign(sParam, this.key);
	}
}