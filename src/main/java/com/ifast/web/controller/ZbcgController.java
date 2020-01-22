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
import com.ifast.web.domain.ZbcgDO;
import com.ifast.web.service.ZbcgService;
import com.ifast.common.utils.Result;

/**
 * 
 * <pre>
 * 招标采购管理
 * </pre>
 * <small> 2020-01-18 14:26:42 | feng</small>
 */
@Controller
@RequestMapping("/web/zbcg")
public class ZbcgController extends AdminBaseController {
	@Autowired
	private ZbcgService zbcgService;
	
	@GetMapping()
	@RequiresPermissions("web:zbcg:zbcg")
	String Zbcg(){
	    return "web/zbcg/zbcg";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("web:zbcg:zbcg")
	public Result<Page<ZbcgDO>> list(ZbcgDO zbcgDTO){
        Wrapper<ZbcgDO> wrapper = new EntityWrapper<ZbcgDO>(zbcgDTO);
        Page<ZbcgDO> page = zbcgService.selectPage(getPage(ZbcgDO.class), wrapper);
        return Result.ok(page);
	}
	
	@GetMapping("/add")
	@RequiresPermissions("web:zbcg:add")
	String add(){
	    return "web/zbcg/add";
	}

	@GetMapping("/edit/{id}")
	@RequiresPermissions("web:zbcg:edit")
	String edit(@PathVariable("id") Integer id,Model model){
		ZbcgDO zbcg = zbcgService.selectById(id);
		model.addAttribute("zbcg", zbcg);
	    return "web/zbcg/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("web:zbcg:add")
	public Result<String> save( ZbcgDO zbcg){
		zbcgService.insert(zbcg);
        return Result.ok();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("web:zbcg:edit")
	public Result<String>  update( ZbcgDO zbcg){
		zbcgService.updateById(zbcg);
		return Result.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("web:zbcg:remove")
	public Result<String>  remove( Integer id){
		zbcgService.deleteById(id);
        return Result.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("web:zbcg:batchRemove")
	public Result<String>  remove(@RequestParam("ids[]") Integer[] ids){
		zbcgService.deleteBatchIds(Arrays.asList(ids));
		return Result.ok();
	}
	
}
