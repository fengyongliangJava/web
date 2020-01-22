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
import com.ifast.web.domain.GongaoDO;
import com.ifast.web.service.GongaoService;
import com.ifast.common.utils.Result;

/**
 * 
 * <pre>
 * 首页公告管理
 * </pre>
 * <small> 2020-01-19 15:49:26 | feng</small>
 */
@Controller
@RequestMapping("/web/gongao")
public class GongaoController extends AdminBaseController {
	@Autowired
	private GongaoService gongaoService;
	
	@GetMapping()
	@RequiresPermissions("web:gongao:gongao")
	String Gongao(){
	    return "web/gongao/gongao";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("web:gongao:gongao")
	public Result<Page<GongaoDO>> list(GongaoDO gongaoDTO){
        Wrapper<GongaoDO> wrapper = new EntityWrapper<GongaoDO>(gongaoDTO);
        Page<GongaoDO> page = gongaoService.selectPage(getPage(GongaoDO.class), wrapper);
        return Result.ok(page);
	}
	
	@GetMapping("/add")
	@RequiresPermissions("web:gongao:add")
	String add(){
	    return "web/gongao/add";
	}

	@GetMapping("/edit/{id}")
	@RequiresPermissions("web:gongao:edit")
	String edit(@PathVariable("id") Integer id,Model model){
		GongaoDO gongao = gongaoService.selectById(id);
		model.addAttribute("gongao", gongao);
	    return "web/gongao/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("web:gongao:add")
	public Result<String> save( GongaoDO gongao){
		gongaoService.insert(gongao);
        return Result.ok();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("web:gongao:edit")
	public Result<String>  update( GongaoDO gongao){
		gongaoService.updateById(gongao);
		return Result.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("web:gongao:remove")
	public Result<String>  remove( Integer id){
		gongaoService.deleteById(id);
        return Result.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("web:gongao:batchRemove")
	public Result<String>  remove(@RequestParam("ids[]") Integer[] ids){
		gongaoService.deleteBatchIds(Arrays.asList(ids));
		return Result.ok();
	}
	
}
