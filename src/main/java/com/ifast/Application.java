package com.ifast;

import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.ifast.common.config.IFastConfig;
import com.ifast.common.utils.SpringContextHolder;

/**
 * <pre>
 * ifast 入口
 * </pre>
 * 
 * <small> 2018年3月22日 | Aron</small>
 */
@SuppressWarnings("unused")
@EnableTransactionManagement
@ServletComponentScan
@MapperScan("com.ifast.*.dao")
@SpringBootApplication
public class Application implements CommandLineRunner, ApplicationListener<ApplicationReadyEvent> {

	private static Logger log = LoggerFactory.getLogger(Application.class);

	/**
	 * <pre>
	 * </pre>
	 * <small> 2018年3月22日 | Aron</small>
	 *
	 * @param args
	 */
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		printProjectConfigs();
	}

	private static void printProjectConfigs() {
		ServerProperties serverProperties = SpringContextHolder.getApplicationContext().getBean(ServerProperties.class);
		DataSourceProperties dataSourceProperties = SpringContextHolder.getApplicationContext()
				.getBean(DataSourceProperties.class);
		IFastConfig config = SpringContextHolder.getApplicationContext().getBean(IFastConfig.class);
		// log.info("开启演示模式：" + config.isDemoMode());
		// log.info("开启调试模式：" + config.isDevMode());
		// log.info("数据库：" + dataSourceProperties.getUrl());
		log.info("==================> the project run at http://localhost:" + serverProperties.getPort()
				+ serverProperties.getContextPath() + "  <==================");
	}

	@Override
	public void onApplicationEvent(ApplicationReadyEvent arg0) {
		
	}

	@Override
	public void run(String... arg0) throws Exception {

	}

// https://www.cnblogs.com/chen110xi/p/6198483.html 配置错误跳转
//
//	@Bean      
//	public EmbeddedServletContainerCustomizer containerCustomizer() {
//
//		return new EmbeddedServletContainerCustomizer() {
//			@Override
//			public void customize(ConfigurableEmbeddedServletContainer container) {
//				ErrorPage error401Page = new ErrorPage(HttpStatus.UNAUTHORIZED, "/templates/error/401.html");
//				ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/templates/error/404.html");
//				ErrorPage error500Page = new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/templates/error/500.html");
//				container.addErrorPages(error401Page, error404Page, error500Page);
//			}
//		};
//	}

}