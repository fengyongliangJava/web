package com.ifast.wechat.model.pojo;

/**
 * <pre>
 * </pre>
 * 
 * <small> 2018年4月26日 | Aron</small>
 */
public class UserLoginPojo {
    private String uname;
    private String passwd;

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    @Override
    public String toString() {
        return "UserLoginDTO [uname=" + uname + ", passwd=" + passwd + "]";
    }

}
