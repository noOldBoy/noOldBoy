var posts=["2022/03/24/BigDecimal使用详解/","2022/06/20/boot打包引入大坑/","2022/07/15/Typora使用详/","2022/10/25/docker常用名令/","2022/08/05/excal导出字体问题大坑/","2023/03/07/cron表达式/","2023/04/17/java8/","2022/07/19/git多环境配置/","2023/03/22/java23种设计模式详解/","2023/03/21/java反射详解/","2022/11/18/23种设计模式/","2023/03/21/java自定义注解/","2022/06/20/jsoup爬虫/","2023/02/17/java多线程/","2022/08/22/mac配置host/","2022/11/22/JavaScript详解学习/","2022/08/10/java异常处理/","2022/07/26/mysql事务/","2022/07/25/mysql数据库索引/","2022/07/25/mysql数据库锁/","2022/12/07/mysql视图/","2022/08/09/spring事务-Transactional-详解/","2022/07/19/postMan｜SSL错误/","2023/03/22/spring-AOP详解/","2022/06/22/spring日志级别/","2022/10/12/mysql查询分组报错/","2022/05/30/sqLite本地化数据库/","2023/05/14/mysql/","2022/08/19/wireguard使用/","2022/05/26/基于ShardingSphere的分库分表/","2022/06/15/本地项目集成git/","2024/02/28/英语语法二/","2022/07/04/自定义域名使用/","2023/04/02/语法基础/","2022/07/15/谷歌浏览器打不开网页问题/","2024/07/27/异步任务编排/","2024/09/03/java问题记录/","2024/09/03/jdk17/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };