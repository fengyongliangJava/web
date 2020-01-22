package com.ifast.web.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "web")
public class FileConfig {

	private String uploadPath;

	public String getUploadPath() {
		return uploadPath;
	}

	public void setUploadPath(String uploadPath) {
		this.uploadPath = uploadPath;
	}

	@Override
	public String toString() {
		return "WeChatConfig [uploadPath=" + uploadPath + "]";
	}

}