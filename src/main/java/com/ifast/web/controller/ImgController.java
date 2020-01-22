package com.ifast.web.controller;


import java.io.File;
import java.util.Arrays;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.ifast.common.base.AdminBaseController;
import com.ifast.common.type.EnumErrorCode;
import com.ifast.common.utils.Result;
import com.ifast.web.domain.ImgDO;
import com.ifast.web.service.ImgService;



/**
 * 
 * <pre>
 * 首页banner图片表
 * </pre>
 * <small> 2019-12-16 14:54:07 | feng</small>
 */
@Controller
@RequestMapping("/web/img")
public class ImgController extends AdminBaseController {
	@Autowired
	private ImgService imgService;
	
	
/*	@Autowired
	private FileConfig fileConfig;
	*/
	
	
	
	@GetMapping()
	/*@RequiresPermissions("web:img:img")*/
	String Img(){
	    return "web/img/img";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("web:img:img")
	public Result<Page<ImgDO>> list(ImgDO imgDTO){
        Wrapper<ImgDO> wrapper = new EntityWrapper<ImgDO>(imgDTO);
        Page<ImgDO> page = imgService.selectPage(getPage(ImgDO.class), wrapper);
        return Result.ok(page);
	}
	
	

	
	
	@GetMapping("/add")
	@RequiresPermissions("web:img:add")
	String add(){
	    return "web/img/add";
	}

	@GetMapping("/edit/{id}")
	@RequiresPermissions("web:img:edit")
	String edit(@PathVariable("id") Integer id,Model model){
		ImgDO img = imgService.selectById(id);
		model.addAttribute("img", img);
	    return "web/img/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("web:img:add")
	public Result<String> save( ImgDO img){
		imgService.insert(img);
        return Result.ok();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("web:img:edit")
	public Result<String>  update( ImgDO img){
		imgService.updateById(img);
		return Result.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("web:img:remove")
	public Result<String>  remove( Integer id){
		imgService.deleteById(id);
        return Result.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("web:img:batchRemove")
	public Result<String>  remove(@RequestParam("ids[]") Integer[] ids){
		imgService.deleteBatchIds(Arrays.asList(ids));
		return Result.ok();
	}
	
	
	
	
/*	@ResponseBody
	@PostMapping("/upload")
	Result<String> upload(@RequestParam("file") MultipartFile file) {
		String fileName = "";
		if(file != null) {
			fileName= file.getOriginalFilename();
		}
		String saveBasePath = fileConfig.getUploadPath(); // 1.png   ->D://upload//1.png
		
		File tofile = new File(saveBasePath + File.separator + fileName);
		try {
			file.transferTo(tofile);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.build(EnumErrorCode.FileUploadGetBytesError.getCode(),
					EnumErrorCode.FileUploadGetBytesError.getMsg());
		}
		return Result.ok(fileName);
	}*/


	
}
