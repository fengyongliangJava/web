package com.ifast.wechat.model.entity;

import java.io.Serializable;
import java.util.Date;

import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;

/**
 * <pre>
 * </pre>
 * 
 * <small> 2018年4月27日 | Aron</small>
 */
@TableName("app_user")
public class UserEntity implements Serializable {
    @TableField(exist = false)
    private static final long serialVersionUID = 6442209044151926545L;
    @TableId
    private Long id;
	private String uname;
	private String passwd;
    private String realName;
	private String faceId;
	private String personId;
	private String faceGroupIds;
	private String faceUrl;
	private String idCardNumber;
    private String mobile;
    private Date createTime;
    private Date lastLoginTime;

    private String openid;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(Date lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

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

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

	public String getFaceId() {
		return faceId;
	}

	public void setFaceId(String faceId) {
		this.faceId = faceId;
	}

	public String getPersonId() {
		return personId;
	}

	public void setPersonId(String personId) {
		this.personId = personId;
	}

	public String getFaceGroupIds() {
		return faceGroupIds;
	}

	public void setFaceGroupIds(String faceGroupIds) {
		this.faceGroupIds = faceGroupIds;
	}

	public String getFaceUrl() {
		return faceUrl;
	}

	public void setFaceUrl(String faceUrl) {
		this.faceUrl = faceUrl;
	}

	public String getIdCardNumber() {
		return idCardNumber;
	}

	public void setIdCardNumber(String idCardNumber) {
		this.idCardNumber = idCardNumber;
	}

	@Override
	public String toString() {
		return "UserEntity [id=" + id + ", uname=" + uname + ", passwd=" + passwd + ", realName=" + realName + ", faceId=" + faceId + ", personId=" + personId + ", faceGroupIds=" + faceGroupIds
				+ ", faceUrl=" + faceUrl + ", idCardNumber=" + idCardNumber + ", mobile=" + mobile + ", createTime=" + createTime + ", lastLoginTime=" + lastLoginTime + ", openid=" + openid + "]";
	}

}
