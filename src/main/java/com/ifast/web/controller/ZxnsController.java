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
import com.ifast.web.domain.ZxnsDO;
import com.ifast.web.service.ZxnsService;
import com.ifast.common.utils.Result;

/**
 * 
 * <pre>
 * 招标采购管理
 * </pre>
 * <small> 2020-01-18 14:26:42 | feng</small>
 */
@Controller
@RequestMapping("/web/zxns")
public class ZxnsController extends AdminBaseController {
	@Autowired
	private ZxnsService zxnsService;
	
	@GetMapping()
	@RequiresPermissions("web:zxns:zxns")
	String Zxns(){
	    return "web/zxns/zxns";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("web:zxns:zxns")
	public Result<Page<ZxnsDO>> list(ZxnsDO zxnsDTO){
        Wrapper<ZxnsDO> wrapper = new EntityWrapper<ZxnsDO>(zxnsDTO);
        Page<ZxnsDO> page = zxnsService.selectPage(getPage(ZxnsDO.class), wrapper);
        return Result.ok(page);
	}
	
	@GetMapping("/add")
	@RequiresPermissions("web:zxns:add")
	String add(){
	    return "web/zxns/add";
	}

	@GetMapping("/edit/{id}")
	@RequiresPermissions("web:zxns:edit")
	String edit(@PathVariable("id") Integer id,Model model){
		ZxnsDO zxns = zxnsService.selectById(id);
		model.addAttribute("zxns", zxns);
	    return "web/zxns/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("web:zxns:add")
	public Result<String> save( ZxnsDO zxns){
		zxnsService.insert(zxns);
        return Result.ok();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("web:zxns:edit")
	public Result<String>  update(ZxnsDO zxns){
		zxnsService.updateById(zxns);
		return Result.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("web:zxns:remove")
	public Result<String>  remove( Integer id){
		zxnsService.deleteById(id);
        return Result.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("web:zxns:batchRemove")
	public Result<String>  remove(@RequestParam("ids[]") Integer[] ids){
		zxnsService.deleteBatchIds(Arrays.asList(ids));
		return Result.ok();
	}
	
}
