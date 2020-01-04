package com.ifast.web.controller;


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

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.ifast.common.base.AdminBaseController;
import com.ifast.web.domain.TextDO;
import com.ifast.web.service.TextService;
import com.ifast.common.utils.Result;

/**
 * 
 * <pre>
 * 首页新闻管理
 * </pre>
 * <small> 2020-01-04 21:58:31 | feng</small>
 */
@Controller
@RequestMapping("/web/text")
public class TextController extends AdminBaseController {
	@Autowired
	private TextService textService;
	
	@GetMapping()
	String Text(){
	    return "web/text/text";
	}
	
	@ResponseBody
	@GetMapping("/list")
	public Result<Page<TextDO>> list(TextDO textDTO){
        Wrapper<TextDO> wrapper = new EntityWrapper<TextDO>(textDTO);
        Page<TextDO> page = textService.selectPage(getPage(TextDO.class), wrapper);
        return Result.ok(page);
	}
	
	@GetMapping("/add")
	@RequiresPermissions("web:text:add")
	String add(){
	    return "web/text/add";
	}

	@GetMapping("/edit/{id}")
	@RequiresPermissions("web:text:edit")
	String edit(@PathVariable("id") Integer id,Model model){
		TextDO text = textService.selectById(id);
		model.addAttribute("text", text);
	    return "web/text/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	public Result<String> save( TextDO text){
		textService.insert(text);
        return Result.ok();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	public Result<String>  update( TextDO text){
		textService.updateById(text);
		return Result.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	public Result<String>  remove( Integer id){
		textService.deleteById(id);
        return Result.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	public Result<String>  remove(@RequestParam("ids[]") Integer[] ids){
		textService.deleteBatchIds(Arrays.asList(ids));
		return Result.ok();
	}
	
}
