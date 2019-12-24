package com.ifast.wechat.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.ifast.common.utils.Result;
import com.ifast.wechat.config.WeChatConfig;
import com.ifast.wechat.model.entity.UserEntity;
import com.ifast.wechat.service.ExampleUserService;
import com.ifast.wechat.util.commonutil.StringUtils;
import com.ifast.wechat.util.tencentface.face.TAipFace;
import com.ifast.wechat.util.tencentface.util.FileUtil;

/**
 * 
 * @author houzw
 *
 */
@RestController
@RequestMapping("/face/")
public class FaceController {

	private final static Logger logger = LoggerFactory.getLogger(FaceController.class);

	@Autowired
	private WeChatConfig weChatConfig;

	@Autowired
	private ExampleUserService exampleUserService;
	/**
	 * 登录检测人脸 已经测试
	 * 
	 * @param request
	 * @param files
	 * @return
	 */
	@PostMapping("/login")
	public Result<?> login(HttpServletRequest request, @RequestParam("file") MultipartFile[] files) {
		Result<?> res = null;
		UserEntity user = null;
		String imagePath = saveFile(files, weChatConfig.getUploadPath());
		String result1 = "";
		TAipFace client = null;
		try {
			client = new TAipFace(weChatConfig.getApp_id(), weChatConfig.getApp_key());
			int topn = 1;// 返回的候选人个数（默认9个）
			byte[] image = FileUtil.readFileByBytes(imagePath);
			result1 = client.faceIdentify(image, weChatConfig.getGroup_id(), topn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		logger.info(result1);
		JSONObject json = JSON.parseObject(result1);
		int ret = (int) json.get("ret");
		if (0 == ret) {
			JSONObject data = json.getJSONObject("data");
			JSONArray candidates = data.getJSONArray("candidates");
			String person_id = "";
			for (Object object : candidates) {
				JSONObject candidate = (JSONObject) object;
				person_id = (String) candidate.get("person_id");
				break;
			}
			EntityWrapper<UserEntity> ew = new EntityWrapper<UserEntity>(null);
			ew.eq("personId", person_id);
			user = exampleUserService.selectOne(ew);
			res = Result.build(200, "请求成功！", user);
		} else {
			res = Result.build(201, "未检测到人脸！！", null);
		}
		return res;
	}

	private String saveFile(MultipartFile[] files, String uploadPath) {
		BufferedOutputStream bw = null;
		File outFile = null;
		if (files != null && files.length >= 1) {
			try {
				String fileName = files[0].getOriginalFilename();
				// 判断是否有文件
				if (StringUtils.areNotEmpty(fileName)) {
					// 输出到本地路径
					outFile = new File(uploadPath + UUID.randomUUID().toString() + FileUtil.getFileType(fileName));
					FileUtils.copyInputStreamToFile(files[0].getInputStream(), outFile);
				}
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				try {
					if (bw != null) {
						bw.close();
					}
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return outFile.getPath();
	}

	// 查询列表
	@GetMapping("/list")
	public Result<?> list() {
		Result<?> res = null;
		List<UserEntity> list = null;
		try {
			EntityWrapper<UserEntity> ew = new EntityWrapper<UserEntity>(null);
			list = exampleUserService.selectList(ew);
			res = Result.build(200, "请求成功！", list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return res;
	}

	// 添加人脸
	@SuppressWarnings("unused")
	@PostMapping("/add")
	@Transactional
	public Result<?> add(HttpServletRequest request, @RequestParam("file") MultipartFile[] files, String username, String password) {
		UserEntity user = null;
		String imagePath = saveFile(files, weChatConfig.getUploadPath());
		String result1 = "";
		TAipFace client = null;
		try {
			client = new TAipFace(weChatConfig.getApp_id(), weChatConfig.getApp_key());
			String person_id = "" + System.currentTimeMillis();// 指定的个体id 自己命名即可
			String person_name = username;// 个体名字
			String tag = "个体创建";// 备注信息
			result1 = client.faceNewperson(imagePath, weChatConfig.getGroup_id(), person_id, person_name, tag);// 个体创建
			user = new UserEntity();
			File tempFile = new File(imagePath);
			String fileName = tempFile.getName();
			user.setFaceUrl(request.getContextPath() + "/upload/" + fileName);
			user.setUname(username);
			user.setPasswd(password);
			user.setPersonId(person_id);
			user.setFaceGroupIds(weChatConfig.getGroup_id());
			user.setCreateTime(new Date());
			boolean success = exampleUserService.insert(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Result.build(200, "请求成功！", user);
	}

	@SuppressWarnings("unused")
	@DeleteMapping("/delete")
	@Transactional
	public Result<?> del(HttpServletRequest request, String id) {
		UserEntity user = null;
		TAipFace client = null;
		if (!StringUtils.isEmpty(id)) {
			long uid = Long.valueOf(id);
			try {
				client = new TAipFace(weChatConfig.getApp_id(), weChatConfig.getApp_key());
				user = exampleUserService.selectById(uid);
				String person_id = user.getPersonId();// 需要删除的个体（Person）ID
				String result = client.faceDelperson(user.getPersonId());// 删除个体
				boolean success = exampleUserService.deleteById(uid);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return Result.build(200, "请求成功！", null);
	}

}
