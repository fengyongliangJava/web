package com.ifast.wechat.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "wechat")
public class WeChatConfig {

	private String uploadPath;
	private String app_id;
	private String app_key;
	private String group_id;// 组别

	public String getUploadPath() {
		return uploadPath;
	}

	public void setUploadPath(String uploadPath) {
		this.uploadPath = uploadPath;
	}

	public String getApp_id() {
		return app_id;
	}

	public void setApp_id(String app_id) {
		this.app_id = app_id;
	}

	public String getApp_key() {
		return app_key;
	}

	public void setApp_key(String app_key) {
		this.app_key = app_key;
	}

	public String getGroup_id() {
		return group_id;
	}

	public void setGroup_id(String group_id) {
		this.group_id = group_id;
	}

	@Override
	public String toString() {
		return "WeChatConfig [uploadPath=" + uploadPath + ", app_id=" + app_id + ", app_key=" + app_key + ", group_id=" + group_id + "]";
	}

}
