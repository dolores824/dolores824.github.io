---
layout: post
title:  "给jupyter notebook设置R环境"
author: Dolores
categories: [ 折腾向 ]
tags: [ 搭建环境 ]
---
目前场景是在vscode notebook里记记笔记；之前学其他语言也一直在vscode，虽然rstudio也挺好，但比较喜欢vs的插件和主题，所以记录下（   
   
默认已配置好jupyter和vscode   
   
# 从anaconda安装
不用从r-project下载r
1. `conda install r-base=4.13`
不规定r-base版本的话conda默认会下载个3.x的
2. 不确定需不需要再`conda install irkernel`，打开vscode任意notebook，出现r核

# 从r官网安装
1. r-project页面下载r
2. 进入r gui
`install.packages(c('repr', 'IRdisplay', 'evaluate', 'crayon', 'pbdZMQ', 'devtools', 'uuid', 'digest'))`
3. 下载Rtools（这玩意居然要几个G）
4. `devtools::install_github('IRkernel/IRkernel')`
5. `IRkernel::installspec(user = FALSE)`
至此，再打开vscode notebook可以选R核啦   

# vscode配置
下载个radian `conda install radian`，然后就集成到vs终端里啦   
插件市场下载R插件（yuki），设置r、radian执行文件位置

# 配置环境这那的就是麻烦，不如直接docker吧！
[Selecting an Image](https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html#jupyter-datascience-notebook) → 任君挑选就是说
[jupyter/datascience-notebook](https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html#jupyter-datascience-notebook)

# 碎碎念
conda collecting metadata, solving environment在那整半天，转投mamba就很顺滑   
radian不知为何部分显示乱码，整半天各种方法都不行；服了   
如果在vscode写rmarkdown或者r，可以用r插件format，但在notebook cell里不行；于是把r插件设置里的lsp diagnostic关了（   