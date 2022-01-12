---
layout: post
title:  "搭好GitHub pages之后就对主题下手了！"
author: Dolores
categories: [ 折腾向 ]
tags: [ 主题 ]
---
只是没什么水平的删删改改而已(￣▽￣)"
# 加日期分类的归档页
原主题没有！
先在`_layout`目录下找到了`archive.html`，修改了下permalink`"/archive.html"`
`_pages`文件夹创建`archive.md`
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
 <li>{{ post.date | date:"%Y.%m.%d：" }} <a href="{{ post.url }}">{{ post.title }}</a></li>
 {% endfor %}
 </ul>
 ```
{% endraw %}
然后调整下主题文件设置

---
服了，liquid代码块无法正常显示，查了下得这样设置，参考链接[GitHub 博客-- Jekyll--代码高亮，Liquid 转义字符](https://blog.csdn.net/zhangpeterx/article/details/103920538?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&spm=1001.2101.3001.4242.1&utm_relevant_index=3)


# 加评论插件
想要个可以不登录第三方、最好可以匿名评论的插件，原主题自带的disqus可以，但是似乎国内登不上？so……搜了看到valine不错。    
折腾了半天一直添加不上，算了

# toc修改
水平有限……想搞个固定在屏幕默认展开的菜单样式，整半天整不会，以后再弄吧还是🥱    
+ [x] 屏幕固定
+ [ ] 放在navbar里
+ [ ] 默认展开

# 置顶博文
[jekyll sticky posts](https://github.com/ibrado/jekyll-stickyposts)

# 字体
又给我整不会了，有些中文字体不能直接放在规定的`fonts`文件夹，一定得和css文件同个目录下才能引用      

# responsive瀑布流布局
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

一开始搜“瀑布流”之类的关键词，都搜不对味，大多数都是针对全图片版式的；后来直接破罐子破摔搜“怎么实现Google keep界面”发现这个问题居然发现7年前就有人问了(lll￢ω￢)并且code pen上面直接有了~   
感觉stackoverflow的回答都好和气hhh，但是看到简中网页居然有人说瀑布流已经过时了但是大家还是勉为其难地掌握一下吧……啊这   
   
可能十几岁时候的审美真的会奠定一生的xp吧（不是），google keep这么多年还是那副样子，虽然已经很多年没再用了，到现在还是很喜欢诶，并且觉得很适合作为blog的排版（因为真的不喜欢整齐的grid或者单列大框）   
个人博客嘛就是要简洁然后布局上有点小心思嘛。虽然单列爱好者嘲讽瀑布过时/(ㄒoㄒ)/，但是在博客里搞一堆花里胡俏的点击效果、牛皮癣一般的插件，即使总布局是单例也很难觉得美观嘛   

# 判断是否引用到`.js`文件方法
```html
<script src="{{ site.baseurl }}/assets/js/masonry.js">
 <script type="text/javascript">
 if (typeof masonry == 'undefined') {
 console.log("")
 }
</script>
```
[引用CDN内容的方法总结 - JK_Rush - 博客园](https://www.cnblogs.com/rush/archive/2013/05/31/3111139.html)

# 代码框

好吧只是升级了下prism然后换了个主题   
原主题就是采用prism的，直接就去官方复制最新`.js`代码替换就行( ﹁ ﹁ ) ~→

# tags/categories汇总页
更喜欢作者另一个主题的tags页，随便整整搞成了目前这样的     
发现了个更简洁的实现[方法]((https://blog.meinside.dev/Adding-tag-cloud-and-archives-page-to-Jekyll/))

---

各种谜之优化出问题找方案的时候在搜索框搜了几百次了，除了W3school、StackOverflow还有各种教程网，也搜到好多教程博。看完教程后也会抱着一点好奇和学习的心态去看看人家的博客怎么弄的。有的就是纯纯的技术博风（直男风(￣▽￣)"，还有二刺螈风，还有很fancy的（基本是女性华人前端）。有的还在更新，最新发文还是22年的！（还是前几天1月几号的时候）有的已经停更多年，最新博还是刚刚在看的教程。有的是纯技术博，有的会有一定比例的生活博文。   
不知道目前这个很迷的博会更到多久呢。