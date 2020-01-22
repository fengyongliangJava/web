package com.ifast.sys.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.ifast.common.base.AdminBaseController;

/**
 * <pre>
 * </pre>
 * <small> 2018年3月23日 | Aron</small>
 */
@Controller
public class IndexController extends AdminBaseController {



//nav跳转	
	
	
    @GetMapping({"/html/index"})
    String index() {
        return "index";
    }
    
    @GetMapping({"/html/jtgk"})
    String jtgk() {
        return "jtgk";
    }
	
    @GetMapping({"/html/xwzx"})
    String xwzx() {
        return "xwzx";
    }
	
    
    @GetMapping({"/html/qywh"})
    String qywh() {
        return "qywh";
    }

    @GetMapping({"/html/zbcg"})
    String zbcg() {
        return "zbcg";
    }
    
    @GetMapping({"/html/zxns"})
    String zxns() {
        return "zxns";
    } 
    
    
    @GetMapping({"/html/mtxs"})
    String mtxs() {
        return "mtxs";
    }
    
    @GetMapping({"/html/lxwm"})
    String lxwm() {
        return "lxwm";
    }
    
 //nav跳转	  


  
    
    
    
    
 //集团概况跳转
    
    @GetMapping({"/html/dsh"})
    String dsh() {
        return "dsh";
    }
    
    @GetMapping({"/html/jtld"})
    String jtld() {
        return "jtld";
    }
    
    @GetMapping({"/html/zzjg"})
    String zzjg() {
        return "zzjg";
    }
    
    
    @GetMapping({"/html/ryzz"})
    String ryzz() {
        return "ryzz";
    }
    
    
    @GetMapping({"/html/lishi"})
    String lishi() {
        return "lishi";
    }
    
    
    @GetMapping({"/html/tpxw"})
    String tpxw() {
        return "tpxw";
    }
    
    
    @GetMapping({"/html/ditu"})
    String ditu() {
        return "ditu";
    }
    
    @GetMapping({"/html/weixin"})
    String weixin() {
        return "weixin";
    } 
 //集团概况跳转  
    

    
    
    
 //企业文化
    @GetMapping({"/html/qywh1"})
    String qywh1() {
        return "qywh1";
    }
    
    @GetMapping({"/html/qywh2"})
    String qywh2() {
        return "qywh2";
    } 
    
    @GetMapping({"/html/qywh3"})
    String qywh3() {
        return "qywh3";
    }
    
    @GetMapping({"/html/qywh4"})
    String qywh4() {
        return "qywh4";
    } 
    
    
    @GetMapping({"/html/qywh5"})
    String qywh5() {
        return "qywh5";
    }
 //企业文化 

 



}
