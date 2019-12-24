/**

* 类的描述:

* @author gaosw

* @Time 2017-2-14下午3:41:30
*

*/
package com.ifast.wechat.util.paramutil;

import java.util.Random;

import com.ifast.wechat.util.commonutil.DateUtil;

public class SerialNumber {
	public static String getOrderId()
	{
		Random random=new Random();
		StringBuilder str1=new StringBuilder();
		str1.append(DateUtil.getCurrDateTime());
		//随机生成数字，并添加到字符串
		for(int i=0;i<4;i++){
			str1.append(random.nextInt(10));
		}
		return str1.toString();

	}
	
}
