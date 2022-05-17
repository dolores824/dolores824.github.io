---
layout: post
title:  "关于n周目后用jekyll搭博客终于落下帷幕这件事"
author: Dolores
categories: [ 折腾向 ]
tags: [ Jekyll, 主题 ]
beforetoc: "碎碎念的第一pa建议跳过跳过！  
不过后面也并没有干货什么的"
toc: true
---


# 流水账过程记录
找到了个比较喜欢的主题：侧边栏+卡片式主页，[Memoirs](https://github.com/wowthemesnet/jekyll-theme-memoirs)   
fork，更改仓库设置，进入博客主页，发现显示的一塌糊涂，怎么跟各大教程上说的直接fork主题仓库就能显示博客雏形不一样呢(′д｀ )…彡…彡，说好的不安装jekyll也行呢（回过头来想想的确也行(lll￢ω￢)  
    
安装ruby+deltoolkit，一开始直接下载了最新版   
然鹅跟主题里面的某个插件不兼容       
根据提示下载1.7.x的bundler   
然后`bundler install`又有问题，ruby版本太高了     
```powershell
minitest-5.14.0 requires ruby version ~> 2.2, which is incompatible with the current version, ruby 3.0.2p107
```
于是卸载，找2.2的ruby和toolkit  
分别安装好后`gem install bundler`，又出大问题  
```powershell
ERROR:  Could not find a valid gem 'bundler' (>= 0), here is why:
          Unable to download data from https://rubygems.org/ - SSL_connect returned=1 errno=0 state=error: certificate verify failed (https://api.rubygems.org/specs.4.8.gz)
```
换了国内源，还是这个`specs.4.8.gz`有问题，于是只能升级……  
找了个2.7版本的重新下载……  
```powershell
Traceback (most recent call last):
        2: from D:/downloads/github-pages/ruby/bin/bundler:23:in `<main>'
        1: from D:/downloads/github-pages/ruby/lib/ruby/2.7.0/rubygems.rb:296:in `activate_bin_path'
D:/downloads/github-pages/ruby/lib/ruby/2.7.0/rubygems.rb:277:in `find_spec_for_exe': Could not find 'bundler' (1.17.2) required by your D:/downloads/github-pages/dolores824.github.io/Gemfile.lock. (Gem::GemNotFoundException)
To update to the latest version installed on your system, run `bundle update --bundler`.
To install the missing version, run `gem install bundler:1.17.2`
```
问题又来了，又又又又又incompatible了
```powershell
Fetching gem metadata from https://rubygems.org/.........
nokogiri-1.10.9-x64-mingw32 requires ruby version < 2.7.dev, >= 2.3, which is
incompatible with the current version, ruby 2.7.5p203
```
    
试下2.6吧……  
安装的同时看了下刚刚搜索出来还没看的网页[rubygems - Gem::InstallError: minitest requires Ruby version ~> 2.2 - Stack Overflow](https://stackoverflow.com/questions/58178642/geminstallerror-minitest-requires-ruby-version-2-2)……啊这，好像不用降级？  
算了，最新的2.6安装包就成功了    
    
接下来根据主题的doc搞`_config.yml`，问题又来了，`google_analytics`那里，网上搜的教程和给的示范都是`UA-`开头的，但是查了下这是universal analytics，新版的google analytics4是measurement ID，啊这。虽然不知道有什么差别但是我先填了measurement ID了，出错再说（不是）。先存个教程([为网站设置 Google Analytics（分析）(Universal Analytics) - Google Analytics（分析）帮助](https://support.google.com/analytics/answer/10269537))   
    
`gem install jekyll`成功  
`bundle exec jekyll serve --watch`失败报错：
```ruby
Configuration file: D:/downloads/github-pages/dolores824.github.io/_config.yml
            Source: D:/downloads/github-pages/dolores824.github.io
       Destination: D:/downloads/github-pages/dolores824.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
  Liquid Exception: incompatible character encodings: UTF-8 and GBK in assets/js/lunrsearchengine.js
                    ------------------------------------------------
      Jekyll 4.2.0   Please append `--trace` to the `serve` command
                     for any additional information or backtrace.
                    ------------------------------------------------
```

找了半天google没找到个方法，据说可能是路径中含中文。我看了半天，妹有啊！要中文那就是`电脑`了，这可咋整。    
于是看了下Jekyll版本    
```ruby
jekyll -v
D:/downloads/github-pages/ruby/lib/ruby/2.6.0/bundler/runtime.rb:319:in `check_for_activated_spec!': You have already activated jekyll 4.2.1, but your Gemfile requires jekyll 4.2.0. Prepending `bundle exec` to your command may solve this. (Gem::LoadError)
```

然后输入`bundle exec jekyll serve`这个命令又能在本地预览了，好家伙。  
但是为什么没有挂上css样式……  
看了半天`default.html`，发现应该是`{{ site.baseurl }}`这里没挂上。于是在`_config.yml`修改`baseurl`为`""`。好家伙（x2）。  
    
接下来改下原主题自带的博文什么的。  
    
之前用hexo搭过GitHub pages来着，也是因为设置jekyll半天搞不定出门左拐的。落灰半年之后的俺看了看还是想要个side bar加瀑布流（大概？）的主题（你有那么多博客可以瀑布吗？！），hexo好像没这样的主题，于是兜兜转转又回来jekyll了，部署完之后发现github pages还是挺香的hhhhh   
本地实时预览就适合我这种强迫症。  
     
弄好了个空博客(x)之后直接在vscode推送就行了。  
    
# 略过失败周目的步骤  
1. 找个主题，Jekyll官网里面列了几个汇总的主题网站[Jekyll](https://jekyllrb.com/docs/themes/)
2. 相中了之后到GitHub仓库star加fork一下。
3. 看文档介绍(x)
4. 下载到本地，和远程仓库建立连接（这个之前搞过所以这次就没弄了）
5. 编辑`_config.yml`
6. 安装jekyll：
	1. 安装2.6的ruby、development toolkit（安装包用admin权限打开）
	2. 安装完之后到主题的文件夹admin权限打开cmd
	3. `gem install bundler:1.17.2`
	4. `bundler install`
	5. `gem install jekyll`
	6. `bundle exec jekyll serve`
	7. 可以开始预览了！浏览器打开给出的x.x.x.x网址，修改主题文件后刷新看效果（也有教程是可以实时预览的）
	8. `ctrl+c`退出预览
7. vscode里push刚刚的修改
    
    
好了，列个todo  
+ [ ] profile页什么的得想一下……
+ [x] 搭建一个日期归档页
+ [ ] 搭建一个碎碎念页面
+ [ ] 搭建一个gallery页面    

~~评论换成valine~~    
*评论插件俺还是直接用disqus了对不起55555，想要valine但真的弄了半天没挂上啊！我应该好好把Jekyll和liquid文档看了，羡慕别人保姆级主题自带n个评论系统可以选5555*   
    
# 碎碎念虽迟但到
~~本人就是Google大学在读~~  
好像干嘛都写写日志真的很能发现问题诶！开blog还是很有必要的（不   
    
这篇草稿已经躺在这好几天了！什么时候才能发啊！  
