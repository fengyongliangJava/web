package com.ifast.wechat.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.ifast.common.utils.Result;
import com.ifast.wechat.model.entity.UserEntity;
import com.ifast.wechat.service.ExampleUserService;
import com.ifast.wechat.util.tencentface.face.TAipFace;
import com.ifast.wechat.util.tencentface.util.FileUtil;

/**
 * <pre>
 * 基于jwt实现的API测试类
 * </pre>
 * 
 * <small> 2018年4月27日 | Aron</small>
 */
@RestController
@RequestMapping("/wechat/")
public class ExampleController {
	@Autowired
	private ExampleUserService exampleUserService;

	@GetMapping("/test1")
	public Result<?> requireRole() {
		List<UserEntity> list =  exampleUserService.selectList(new EntityWrapper<UserEntity>(null));
		return Result.build(200, "请求成功！", list);
	}

	// 人脸识别接口
	@SuppressWarnings("unused")
	@GetMapping("/test")
	public String test() {
		String result1 = "";
		TAipFace client = null;
		try {
			client = new TAipFace("2108504196", "b4SeaZvnUYJFSTzz");
			String group_id = "test001";// 候选人组ID（个体创建时设定）
			int topn = 9;// 返回的候选人个数（默认9个）
			// 参数为本地图片路径
			String imagePath = "F://2.jpg";
			String result = client.faceIdentify(imagePath, group_id, topn);
			// 参数为本地图片二进制数组
			byte[] image = FileUtil.readFileByBytes(imagePath);
			result1 = client.faceIdentify(image, group_id, topn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result1;
	}

	// 添加人脸
	@SuppressWarnings("unused")
	@GetMapping("/add")
	public String add() {
		String result1 = "";
		TAipFace client = null;
		try {
			client = new TAipFace("2108504196", "b4SeaZvnUYJFSTzz");
			String person_id = "2108504196";// 指定的个体（Person）ID
			String tag = "个体增加人脸";// 备注信息
			// 参数为本地图片路径
			String imagePathA = "F://2.jpg";
			// String imagePathB = "./User/xiaoshaui/face2.jpg";
			List<String> filePaths = new ArrayList<String>();
			filePaths.add(imagePathA);
			// filePaths.add(imagePathB);
			String result = client.faceAddfaceByFilePath(filePaths, person_id, tag);// 增加人脸
			// 参数为本地图片二进制数组
			List<byte[]> bytes = new ArrayList<byte[]>();
			byte[] faceA = FileUtil.readFileByBytes(imagePathA);
			// byte[] faceB = FileUtil.readFileByBytes(imagePathB);
			bytes.add(faceA);
			// bytes.add(faceB);
			result1 = client.faceAddfaceByte(bytes, person_id, tag);// 增加人脸
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result1;
	}

	@SuppressWarnings("unused")
	@GetMapping("/addPeople")
	public String addPeople() {
		String result1 = "";
		TAipFace client = null;
		try {
			client = new TAipFace("2108504196", "b4SeaZvnUYJFSTzz");
			String group_ids = "test001";// 组id 可以是多个 eg:group01|group02 自己命名即可
			String person_id = "2108504196";// 指定的个体id 自己命名即可
			String person_name = "小帅";// 个体名字
			String tag = "个体创建";// 备注信息
			// 参数为本地图片路径
			String imagePath = "F://2.jpg";
			// String result = client.faceNewperson(imagePath, group_ids,
			// person_id, person_name, tag);// 个体创建
			// 参数为本地图片二进制数组
			byte[] image = FileUtil.readFileByBytes(imagePath);
			// base64Content = "data:image/jpeg;base64," + base64Content;
			result1 = client.faceNewperson(imagePath, group_ids, person_id, person_name, tag);// 个体创建
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result1;
	}

}
