package com.ifast.wechat.util.yotu.http;

import java.util.Map;
import java.util.TreeMap;

public class ApiResponse {
	@SuppressWarnings("rawtypes")
	private Map header;
    private Object body;

	@SuppressWarnings("rawtypes")
	public ApiResponse() {
        this.header = new TreeMap();
        this.body = "";
    }

	@SuppressWarnings("rawtypes")
	public ApiResponse(Map header, String body) {
        this.header = header;
        this.body = body;
    }

	@SuppressWarnings("rawtypes")
	public void setHeader(Map header) {
        this.header = header;
    }

	@SuppressWarnings("rawtypes")
	public Map getHeader() {
        return this.header;
    }

    public void setBody(Object body) {
        this.body = body;
    }

    public Object getBody() {
        return this.body;
    }


}
