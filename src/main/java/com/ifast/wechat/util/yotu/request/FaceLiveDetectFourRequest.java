/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ifast.wechat.util.yotu.request;

import java.util.HashMap;

import com.ifast.wechat.util.yotu.commonutil.CommonParamCheckUtils;
import com.ifast.wechat.util.yotu.exception.ParamException;

/**
 *
 * @author serenazhao 人脸对比请求
 */
public class FaceLiveDetectFourRequest extends AbstractBaseRequest {
        // 图片内容列表
        private HashMap<String, String> imageList = new HashMap<String, String>();
            
        //验证码
        private String validate = "";
        
        //是否将视频中的人和card图片比对
        private String compareFlag = "";
        
        //指定一个sessionId，若使用，请确保id唯一
        private String seq = "";
        
        //设置列表传参的key
        private HashMap<String, String> keyList = new HashMap<String, String>();
        
	public FaceLiveDetectFourRequest(String bucketName,String validate, boolean compareFlag,  String video, String image, String seq) {
		super(bucketName);
                this.validate = validate;
		this.compareFlag = String.valueOf(compareFlag);
                this.seq = seq;
                this.imageList.put("video", video);
                this.keyList.put("video", "video");
                if (compareFlag == true) {
                    this.imageList.put("card", image);
                    this.keyList.put("card", "card");
                }
                
	}

        public String getValidate() {
            return validate;
        }
        
        public String getCompareFlag() {
            return compareFlag;
        }
        
        public String getSeq() {
            return seq;
        }
        
        public HashMap<String, String> getKeyList() {
            return keyList;
        }

        public HashMap<String, String> getImageList() {
            return imageList;
        }

	@Override
	public void check_param() throws ParamException {
		super.check_param();
                CommonParamCheckUtils.AssertNotNull("validate", validate);
                CommonParamCheckUtils.AssertNotZero("image list", imageList.size());
                CommonParamCheckUtils.AssertExceed("image list", imageList.size(), 2);

	}

	
}
