package com.ifast.wechat.service.impl;

import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.ifast.wechat.dao.UserMapper;
import com.ifast.wechat.model.entity.UserEntity;
import com.ifast.wechat.service.ExampleUserService;

/**
 * 
 * @author houzw
 *
 */
@Service
public class ExampleUserServiceImpl extends ServiceImpl<UserMapper, UserEntity> implements ExampleUserService {

}
