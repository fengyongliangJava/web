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
	
    @GetMapping({"/html/jtcy"})
    String jtcy() {
        return "jtcy";
    }
    
    @GetMapping({"/html/qywh"})
    String qywh() {
        return "qywh";
    }

    @GetMapping({"/html/zbcg"})
    String zbcg() {
        return "zbcg";
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
    
    @GetMapping({"/html/cydw"})
    String cydw() {
        return "cydw";
    }
    
    @GetMapping({"/html/ryzz"})
    String ryzz() {
        return "ryzz";
    }
    
    @GetMapping({"/html/jyfw"})
    String jyfw() {
        return "jyfw";
    }
    
    @GetMapping({"/html/lishi"})
    String lishi() {
        return "lishi";
    }
    
    @GetMapping({"/html/jtyx"})
    String jtyx() {
        return "jtyx";
    }
    
    @GetMapping({"/html/tpxw"})
    String tpxw() {
        return "tpxw";
    }
    
    @GetMapping({"/html/ndsj"})
    String ndsj() {
        return "ndsj";
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
    




    
    
 //专项工作跳转
	
    @GetMapping({"/html/mdkp"})
    String mdkp() {
        return "mdkp";
    }

    
    @GetMapping({"/html/dangjian"})
    String dangjian() {
        return "dangjian";
    } 
    
    
    @GetMapping({"/html/zxns"})
    String zxns() {
        return "zxns";
    } 
    
    @GetMapping({"/html/jjjc"})
    String jjjc() {
        return "jjjc";
    } 

    
    @GetMapping({"/html/shzr"})
    String shzr() {
        return "shzr";
    } 
    
    
    @GetMapping({"/html/text1"})
    String text1() {
        return "text1";
    } 
    
    @GetMapping({"/html/text2"})
    String text2() {
        return "text2";
    } 

    
    @GetMapping({"/html/sangong"})
    String sangong() {
        return "sangong";
    } 
    
    @GetMapping({"/html/hjbh"})
    String hjbh() {
        return "hjbh";
    } 
    
    @GetMapping({"/html/xxgk"})
    String xxgk() {
        return "xxgk";
    } 
    

  //专项工作跳转




}
