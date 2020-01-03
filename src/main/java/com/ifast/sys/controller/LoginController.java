package com.ifast.sys.controller;


import com.ifast.common.annotation.Log;
import com.ifast.common.base.AdminBaseController;
import com.ifast.common.domain.Tree;
import com.ifast.common.type.EnumErrorCode;
import com.ifast.common.utils.MD5Utils;
import com.ifast.common.utils.Result;
import com.ifast.common.utils.ShiroUtils;
import com.ifast.oss.domain.FileDO;
import com.ifast.oss.service.FileService;
import com.ifast.sys.domain.MenuDO;
import com.ifast.sys.service.MenuService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

/**
 * <pre>
 * </pre>
 * <small> 2018年3月23日 | Aron</small>
 */
@Controller
public class LoginController extends AdminBaseController {

    @Autowired
    MenuService menuService;
    @Autowired
    FileService fileService;
    
    
    @GetMapping({ "/"})
    String welcome() {
        return "index";
    }

    
 

    @Log("请求访问主页")
    @GetMapping({ "/index" })
    String index(Model model) {
        List<Tree<MenuDO>> menus = menuService.listMenuTree(getUserId());
        model.addAttribute("menus", menus);
        model.addAttribute("name", getUser().getName());
        model.addAttribute("username", getUser().getUsername());
        FileDO fileDO = fileService.selectById(getUser().getPicId());
        model.addAttribute("picUrl", fileDO == null ? "/img/photo_s.jpg" : fileDO.getUrl());
        return "index_v1";
    }

    
    
    
    
    @GetMapping("/login")
    String login(Model model) {
/*        model.addAttribute("username", bootdoConfig.getUsername());
        model.addAttribute("password", bootdoConfig.getPassword());*/
        return "login";
    }

    @Log("登录")
    @PostMapping("/login/ajax_login")
    @ResponseBody
    Result<String> ajaxLogin(String username, String password,String code,HttpServletRequest request) {
//        try {
//            //从session中获取随机数
//            //String random = (String) request.getSession().getAttribute(RandomValidateCodeUtil.RANDOMCODEKEY);
//            if (StringUtils.isEmpty(code)) {
//                return Result.build(Result.CODE_FAIL, "请输入验证码");
//            } else if (random.equals(code)) {
//                return R.error("请输入正确的验证码");
//            }
//        } catch (Exception e) {
//            logger.error("验证码校验失败", e);
//            return R.error("验证码校验失败");
//        }

    	
        password = MD5Utils.encrypt(username, password);  
        UsernamePasswordToken token = new UsernamePasswordToken(username, password);
        Subject subject = SecurityUtils.getSubject();
        try {
            subject.login(token);
            return Result.ok();
        } catch (AuthenticationException e) {
            return Result.build(EnumErrorCode.userLoginFail.getCode(), EnumErrorCode.userLoginFail.getMsg());
        }
    }

    
    
    @GetMapping("/logout")
    @Log("退出")
    String logout() {
        ShiroUtils.logout();
        return "redirect:/login";
    }
    
    @Log("主页")
    @GetMapping("/main")
    String main() {
        return "main";
    }

    @Log("错误403")
    @GetMapping("/403")
    String error403() {
        return "403";
    }

}
