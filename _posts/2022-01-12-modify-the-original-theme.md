---
layout: post
title:  "搭好GitHub pages之后就对主题下手了！"
author: Dolores
categories: [ 折腾向 ]
tags: [ 主题 ]
toc: true
---
毫无水平的删删改改(￣▽￣)"
# 加日期分类的归档页
原主题没有的说    
于是先在`_layout`目录下找到了`archive.html`，修改了下permalink`"/archive.html"`    
并在`_pages`文件夹创建`archive.md`
```markdown
---

layout: archive
title: archive
permalink: /archive

---
```
`default.html`的侧边栏需要加上这个链接    
在`_layout`文件夹的`archive.html`下加如下代码    

{% raw %}
```liquid
<ul>
 {% for post in site.posts %}
 {% unless post.next %}
 <h2>{{ post.date | date: '%Y' }}</h2>
 {% else %}
 {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
 {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
 {% if year != nyear %}
 <h2>{{ post.date | date: '%Y' }}</h2>
 {% endif %}
 {% endunless %}
 <li>{{ post.date | date:"%Y.%m.%d：" }} <a href="{{ post.url }}">{{ post.title }}</a> 
 </li>
 {% endfor %}
</ul>
 ```
{% endraw %}
然后调整下主题文件设置    

---
服了，liquid代码块无法正常显示，查了下得这样操作，参考链接[GitHub 博客-- Jekyll--代码高亮，Liquid 转义字符](https://blog.csdn.net/zhangpeterx/article/details/103920538?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&spm=1001.2101.3001.4242.1&utm_relevant_index=3)


# 加评论插件
想要个可以不登录第三方、最好可以匿名评论的插件，虽然原主题自带的disqus可以，但是似乎国内登不上？     
搜了下发现valine不错。    
折腾了半天一直添加不上，算了

# toc修改
+ [x] 屏幕固定    
+ [ ] 可折叠，默认展开     
+ [ ] responsive优化    

这个toc太多bug了🤦‍     
等我有空再搞叭……    

# 置顶博文
[jekyll sticky posts](https://github.com/ibrado/jekyll-stickyposts)   

# 字体
又给我整不会了，有些中文字体不能直接放在规定的`fonts`文件夹，一定得和css文件同个目录才能引用      

# responsive瀑布流布局
一开始搜“瀑布流”之类的关键词，都搜不对味，大多数都是针对全图片版式的；后来直接破罐子破摔搜“怎么实现Google keep界面”发现这个问题居然发现7年前就有人问了(lll￢ω￢)，并且code pen上面直接就有~   
感觉stackoverflow的回答都好和气hhh，但是看到简中网页居然有人说，瀑布流已经过时了但是大家还是勉为其难地掌握一下吧……啊这    
   
google keep这么多年还是那副布局，虽然已经很多年没再用了，到现在还是很喜欢诶，并且觉得很适合作为blog的排版（因为真的不喜欢整齐的grid或者单列大框）   

---

先找到这个插件muuri，用起来挺好的，但好像必须指定px值    
效果在特定分辨率下显示的很好，但是只能规定格子长宽px值而不是指定行或列数目   
后来发现[isotope](https://isotope.metafizzy.co/layout.html)或者[Masonry](https://masonry.desandro.com/#cdn)插件~引用完之后就是几行代码的事      
`default.html`引入cdn和创建的`.js`文件     
如果用isotope方式就这样    
```js
jQuery(document).ready(function ($) {
 $('.blog-grid-container').isotope({
 itemSelector: '.blog-grid-item',
 layoutMode: 'masonry',
 })
});
```
   
发现在调整窗口大小的时候有bug……     
好想直接一站式搞定不想自己折腾，看了眼wordpress会员和主题价格    
算了算了还是自己整吧，bug什么的有空再修就是了(T_T)    

# 判断是否引用到`.js`文件方法
```html
<script src="{{ site.baseurl }}/assets/js/js文件名.js">
 <script type="text/javascript">
 if (typeof masonry == 'undefined') {
 console.log("")
 }
</script>
```
[引用CDN内容的方法总结](https://www.cnblogs.com/rush/archive/2013/05/31/3111139.html)    

# 代码框

好吧只是升级了下prism然后换了个主题   
直接就去官方复制最新`.js`代码替换就行( ﹁ ﹁ ) ~→    

# tags/categories汇总页
更喜欢原主题作者另一个主题的tags页，于是搬过来(x)    
发现了个更简洁的实现[方法](https://blog.meinside.dev/Adding-tag-cloud-and-archives-page-to-Jekyll/)   

---

各种谜之优化出问题找方案的时候在搜索框搜了几百次了，除了W3school、StackOverflow还有各种教程网，也搜到好多教程博。看完教程后也会抱着一点好奇和学习的心态去看看人家的博客怎么弄的。有的就是纯纯的技术博风（直男风(￣▽￣)"，还有二刺螈风，还有很fancy的（自我介绍果然是前端妹子◕‿◕）。    
    
不知道目前这个很迷的博会更到多久呢。