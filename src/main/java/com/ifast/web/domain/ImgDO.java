package com.ifast.web.domain;

import java.io.Serializable;
import java.util.Date;

import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;



/**
 * 
 * <pre>
 * 首页banner图片表
 * </pre>
 * <small> 2019-12-16 14:54:07 | feng</small>
 */
 @TableName("index_img")
public class ImgDO implements Serializable {
    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
    
    /** id */
    @TableId
    private Integer id;
    /** 标题 */
    private String title;
    /** 类型 */
    private Integer type;
    /** 路径 */
    private String src;
    /** 创建时间 */
    private Date createtime;
    /** 创建者 */
    private String createby;
    /** 更新时间 */
    private Date updatetime;
    /** 更新者 */
    private String updateby;
    /** 序号 */
    private Integer oderby;

    /**
     * 设置：id
     */
    public void setId(Integer id) {
        this.id = id;
    }
    /**
     * 获取：id
     */
    public Integer getId() {
        return id;
    }
    /**
     * 设置：标题
     */
    public void setTitle(String title) {
        this.title = title;
    }
    /**
     * 获取：标题
     */
    public String getTitle() {
        return title;
    }
    /**
     * 设置：类型
     */
    public void setType(Integer type) {
        this.type = type;
    }
    /**
     * 获取：类型
     */
    public Integer getType() {
        return type;
    }
    /**
     * 设置：路径
     */
    public void setSrc(String src) {
        this.src = src;
    }
    /**
     * 获取：路径
     */
    public String getSrc() {
        return src;
    }
    /**
     * 设置：创建时间
     */
    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
    /**
     * 获取：创建时间
     */
    public Date getCreatetime() {
        return createtime;
    }
    /**
     * 设置：创建者
     */
    public void setCreateby(String createby) {
        this.createby = createby;
    }
    /**
     * 获取：创建者
     */
    public String getCreateby() {
        return createby;
    }
    /**
     * 设置：更新时间
     */
    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }
    /**
     * 获取：更新时间
     */
    public Date getUpdatetime() {
        return updatetime;
    }
    /**
     * 设置：更新者
     */
    public void setUpdateby(String updateby) {
        this.updateby = updateby;
    }
    /**
     * 获取：更新者
     */
    public String getUpdateby() {
        return updateby;
    }
    /**
     * 设置：序号
     */
    public void setOderby(Integer oderby) {
        this.oderby = oderby;
    }
    /**
     * 获取：序号
     */
    public Integer getOderby() {
        return oderby;
    }
}
