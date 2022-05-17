---
layout: post
title:  "随手记录一下pip、conda无法install的解决方法"
author: Dolores
categories: [ 折腾向 ]
tags: [ 搭建环境 ]
---
具体表现为只能关闭代理`install`package，开启代理和添加bypass域名都无法下载，提示ssl错误     
分别创建`pip.ini`, `.condarc`文件并在文件内添加以下内容

# pip设置
`C:\Users\username\AppData\Roaming\pip\pip.ini`
```ini
[global]
http_proxy = http://localhost:1214   # 填写本地端口，下同
https_proxy = http://localhost:1214
```

# conda设置
`C:\Users\username\.condarc`
```yaml
proxy_servers:
  http: http://localhost:1214
  https: http://localhost:1214 
```

#### REF
[User Guide - pip documentation v22.0.4](https://pip.pypa.io/en/stable/user_guide/?highlight=proxy#using-a-proxy-server)   
[Python 遭遇 ProxyError 问题记录](https://zhuanlan.zhihu.com/p/350015032)   
[[Feature Request] HTTP 系统代理增加协议头 · Issue #1787 · Fndroid/clash_for_windows_pkg](https://github.com/Fndroid/clash_for_windows_pkg/issues/1787)   
[开启4.10自动系统代理后Python pip无法连接上国内清华源，但直接浏览器没问题 · Issue #1315 · 2dust/v2rayN](https://github.com/2dust/v2rayN/issues/1315)   
[成功解决 ProxyError: Conda cannot proceed due to an error in your proxy configuration_littlehaes的博客](https://blog.csdn.net/littlehaes/article/details/103518285) > 评论