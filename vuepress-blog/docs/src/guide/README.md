# 基本用法介绍
::: warning 前提条件
VuePress 需要[Node.js](https://nodejs.org/en/)>=8.6
:::
## 本地启动、编译项目
- 从github把项目 clone 到本地后，转到项目的/docs文件夹下,在命令行里输入:
``` js
cd docs
```
- 使用yarn安装相关依赖包
``` js
yarn install
```
- 运行项目开启本地访问
``` js
yarn dev 或者 npm run dev
```
- 提交、编译并推送到远程运行
``` js
npm run deploy
```
这里我部署到个人github上了， 在浏览器输入 [https://dongyuse.github.io/](https://dongyuse.github.io/)即可看到项目主页。详细的项目创建到部署过程请参考 [https://www.zguangju.com/Tools/vuepress.html](https://www.zguangju.com/Tools/vuepress.html)

## 目录、新建文档配置
- 项目中需要的图片统一放在 .vuepress文件夹下面的public文件夹下面，新建的文档文件夹和.vuepress文件夹同级

<img :src="$withBase('/mulu.png')">

- 新建文件后配置如下图，在 .vuepress/config.js文件里配置

<img :src="$withBase('/config.png')">

## Front Matter
- front matter 必须是 md 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。可以在当前 md 文件的正文，或者是任意的自定义或主题组件中使用。主要是对 .vuepress/config.js文件里配置的重置， 这是一个基本的例子：

输入
``` js
---
title: Blogging Like a Hacker  //文章标题，放弃通过一级目录定义标题的方式，改在 Front Matter 中定义。
lang: en-US
---
```
在这些三条虚线之间，你可以设置预定义变量，甚至可以创建自己的自定义变量。 然后，您可以使用 $frontmatter 在页面的其余部分、以及所有的自定义和主题组件访问这些变量。

## Styling
### palette.styl
- 如果要对[默认预设](https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/core/lib/client/style/config.styl)的样式进行简单的替换，或者定义一些变量供以后使用，你可以创建一个 `.vuepress/styles/palette.styl` 文件，主要负责全局的颜色、布局、响应式变化点的设置。

你可以调整的一些变量如下:
``` js
// 颜色
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$badgeTipColor = #42b983
$badgeWarningColor = darken(#ffe564, 35%)
$badgeErrorColor = #DA5961

// 布局
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$homePageWidth = 960px

// 响应式变化点
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px
```
::: danger 警告
你应该只在这个文件中定义变量。因为 `palette.styl` 将在根的 stylus 配置文件的末尾引入，作为配置，它将被多个文件使用，所以一旦你在这里写了样式，你的样式就会被多次复制。
:::
### index.styl
VuePress 提供了一种添加额外样式的简便方法。你可以创建一个 `.vuepress/styles/index.styl` 文件。这是一个 [Stylus](https://stylus-lang.com/)文件，但你也可以使用正常的 CSS 语法，主要是重写应用的默认样式。
``` css
.content {
  font-size 30px
}
```
::: tip 为什么不能把 `palette.styl` 和 `index.styl` 合并到一个 API?
不可以将颜色与样式写在同一个文件中，VuePress 会先解析 `palette.styl` 中的全局变量，之后作用于主题的各个样式中，最后才解析 `index.styl` ，以覆盖主题默认的样式。
:::
## Markdown常用语法
### 标题
说明：#后面跟的内容就是标题，一个#就是一级标题，有几个#就是几级标题，例如2级标题就有两个##，markdown的2级和3级标题会默认自动作为子目录，注意：#后面必须有个空格，然后再跟内容，否则#就是普通字符。<br/>
输入
``` js
# 这是一级标题
## 这是二级标题，二级标题底下有横线
### 这是三级标题
```
### 字体
说明
- 加粗：要加粗的文字左右分别用两个*号包起来
- 斜体：要倾斜的文字左右分别用一个*号包起来
- 斜体加粗：要倾斜和加粗的文字左右分别用三个*号包起来
- 删除线：要加删除线的文字左右分别用两个~~号包起来

输入
``` js
**这是加粗的文字**<br/>
*这是倾斜的文字*<br/>
***这是斜体加粗的文字***<br/>
~~这是加删除线的文字~~<br/>
```
输出<br/>
**这是加粗的文字**<br/>
*这是倾斜的文字*<br/>
***这是斜体加粗的文字***<br/>
~~这是加删除线的文字~~<br/>
### 引用
说明
- 在引用的文字前加>即可。引用也可以嵌套，如加两个>>三个>>>

输入
``` js
>这是1级引用的内容

>>这是2级引用的内容
```
输出<br/>
>这是1级引用的内容

>>这是2级引用的内容
### 分割线
说明
- 三个或者三个以上的 - 或者 * 都可以

输入
``` js
开始分割线
***
使用3个或者多个“*”的分割线

---
使用3个或者多个“-”的分割线
```
输出<br/>
开始分割线
***
使用3个或者多个“*”的分割线

---
使用3个或者多个“-”的分割线
::: warning 警告
注：在三个或者多个“-”的上面加文字的话会自动变成2级标题，所以要么空一行要么就使用“*”
:::
### 图片
说明
- 格式：“![图片alt] (图片地址 “图片title”)”，含义分别如下：
- 图片alt：就是显示在图片下面的文字，相当于对图片内容的解释。
- 图片地址:可以是本地路径的图片，也可以是网络上的图片
- 图片title：是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加
::: warning 警告：
中括号与小括号之间是没有空格的，参考示例
:::

输入
``` js
![风景](/1.jpg "风景")
```
输出<br/>
![风景](/1.jpg "风景")
::: warning 警告
上面的写法，vuepress里面完全是没有问题的，简书也没有问题，但有些博客网站这样写会失效，比如CSDN（时好时坏，之前发布的文章有时候图片能看有时候不行），
想要在CSDN里面也使用图片，那么用 `<img src="/1.jpg" />` 这种方式就可以了。这种方式vuepress也可以用，但是直接使用标签简书不行。
或者 `<img :src="$withBase('/1.jpg')" alt="风景">` vuepress里建议使用这种方式
:::
::: tip $withBase是什么
如果你的网站会被部署到一个非根路径，你将需要在 `.vuepress/config.js` 中设置 `base`，举例来说，如果你打算将你的网站部署到 `https://foo.github.io/bar/`，那么 `base` 的值就应该被设置为 `"/bar/"` (应当总是以斜杠开始，并以斜杠结束)。

有了基础路径（Base URL），如果你希望引用一张放在 `.vuepress/public` 中的图片，你需要使用这样路径：`/bar/image.png`，然而，一旦某一天你决定去修改 `base`，这样的路径引用将会显得异常脆弱。为了解决这个问题，VuePress 提供了内置的一个 helper `$withBase`（它被注入到了 Vue 的原型上），可以帮助你生成正确的路径：
:::
### 超链接
说明
- 格式：[超链接名](超链接地址 “超链接title”)
注：title可加可不加
::: warning 警告：
中括号与小括号之间是没有空格的，参考示例
:::

输入
``` js
[百度](http://baidu.com)
```
输出<br/>
[百度](http://baidu.com)
### 列表
说明
- 无序列表：无序列表用 - + * 任何一种加上一个空格再加内容就可以了
- 有序列表：数字加点空格加内容
- 列表嵌套：第二行缩进两个空格就可以嵌套了

输入
``` js
无序列表
- 列表内容1
+ 列表内容2
* 列表内容3

有序列表
1. 列表内容
2. 列表内容

列表嵌套
+ 一级无序列表内容1
   1. 二级有序列表内容11
   2. 二级有序列表内容12
```
输出<br/>
无序列表
- 列表内容1
+ 列表内容2
* 列表内容3

有序列表
1. 列表内容
2. 列表内容

列表嵌套
+ 一级无序列表内容1
   1. 二级有序列表内容11
   2. 二级有序列表内容12
### 表格
说明
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

- 第二行分割表头和内容。- 有一个就行，为了书写对齐，多加了几个，内容会自动撑开表格宽度
- 文字默认居左
- 在第二行“--”两边加“：”表示文字居中
- 在第二行“--”右边加“：”表示文字居右

输入
``` js
姓名|年龄|国家
----|:--:|--:
内容默认居左|内容居中|内容居右
张三|19|中华人民共和国
李四|29|中国
王麻子|18|中华人民共和国
```
输出<br/>
姓名|年龄|国家
----|:--:|--:
内容默认居左|内容居中|内容居右
张三|19|中华人民共和国
李四|29|中国
王麻子|18|中华人民共和国
### 代码块
说明
- 单行代码：代码之间分别用一个反引号（`）包起来就行，或者只要开头的反引号
- 代码块：
    1. 代码块儿是用一组三个反引号包起来，
    2. 指定代码块儿的类型，三个反引号后面加个空格再加类型，类型如java，html，js，md等等。（可选）
    3. 指定某一行高亮显示，在类型后面加个花括号，里面指定数字就可以，数字可以是一个{6}，也可以是一个范围{2-8}，也可以是多个{1,4-6}。（可选）

输入
``` js
单行代码：

`create database test;`

代码块：
(```js {3-4})
    function show(){
        console.log("这里是js代码");
        console.log("这一行是高亮的");
        console.log("这一行是高亮的");
        console.log("这里是js代码");
    }
(```)
注：实际中去掉两边小括号。为了防止转译，前后三个反引号处加了小括号，实际是没有的。
```
输出<br/>
单行代码：

`create database test;`

代码块：
``` js {3-4}
    function show(){
        console.log("这里是js代码");
        console.log("这一行是高亮的");
        console.log("这一行是高亮的");
        console.log("这里是js代码");
    }
```
### 提示信息
说明
- 提示信息是用一组三个冒号包起来的，第一行冒号加一个空格后面跟提示级别，再加个空格后面跟别名。
- 级别分别如下：
    1. tip 提示
    2. warning 警告
    3. danger 危险警告
    4. details 详情

输入
``` js
::: tip 提示
这是一个tip，使用了别名“提示”
:::
::: warning
这是一个warning，没有使用别名
:::
::: danger
这是一个danger，没有使用别名
:::
::: details 请看详情
这是一个details，使用了别名“请看详情”
:::
```
输出<br/>
::: tip 提示
这是一个tip，使用了别名“提示”
:::
::: warning
这是一个warning，没有使用别名
:::
::: danger STOP
这是一个danger，使用了别名 STOP
:::
::: details 请看详情
这是一个details，使用了别名“请看详情”
:::

### 文字位置
说明
- 默认文字都是左对齐的（例如本句话），想要居中和右对齐需要手动添加

输入
``` js
居中：
<center>文字居中</center>
右对齐：
<p align="right">右对齐</p>
```
输出<br/>
居中：
<center>文字居中</center>
右对齐：
<p align="right">右对齐</p>

### Emoji表情
说明
- 所有表情都是一个符号，你可以在[这个列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)找到所有可用的 Emoji

输入
``` js
:tada: :100:
```
输出<br/>
:tada: :100:

### 显示目录
说明
- 一般在最顶部使用，显示这一篇文章的目录，直接在文档里面写一个[[top]]就可以生成目录

输入
``` js
[[toc]]
```
输出<br/>
[[toc]]

## 在 Markdown 中 使用 Vue

### 插值
- 每一个 Markdown 文件将首先被编译成 HTML，接着作为一个 Vue 组件传入 vue-loader，这意味着你可以在文本中使用 Vue 风格的插值：

输入
``` js
{{ 1 + 1 }}
```
输出<br/>
{{ 1 + 1 }}

### 指令
- 同样地，也可以使用指令:

输入
``` js
<span v-for="i in 3">{{ i }} </span>
```
输出<br/>
<span v-for="i in 3">{{ i }} </span>

### 访问网站以及页面的数据
- 编译后的组件没有私有数据，但可以访问 网站的元数据，举例来说：

输入
``` js
{{ $page }}
```
输出<br/>
{{ $page }}

### Escaping
- 默认情况下，块级 (block) 的代码块将会被自动包裹在 v-pre 中。如果你想要在内联 (inline) 的代码块或者普通文本中显示原始的大括号，或者一些 Vue 特定的语法，你需要使用自定义容器 v-pre 来包裹：

输入
``` js
::: v-pre
`{{ This will be displayed as-is }}`
:::
```
输出<br/>
::: v-pre
`{{ This will be displayed as-is }}`
:::

### 使用组件
- 所有在 `.vuepress/components` 中找到的 `*.vue` 文件将会自动地被注册为全局的异步组件，
你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：

输入
``` js
<demo-component/>
<OtherComponent/>
<Foo-Bar/>
```
输出<br/>
<demo-component/>
<OtherComponent/>
<Foo-Bar/>
::: warning 重要！
请确保一个自定义组件的名字包含连接符或者是 PascalCase，否则，它将会被视为一个内联元素，并被包裹在一个 `<p>` 标签中，这将会导致 HTML 渲染紊乱，因为 HTML 标准规定， `<p>` 标签中不允许放置任何块级元素。
:::

### 使用预处理器
- VuePress 对以下预处理器已经内置相关的 webpack 配置：`sass`、`scss`、`less`、`stylus` 和 `pug`。要使用它们你只需要在项目中安装对应的依赖即可。例如，要使用 `sass`，需要安装：

输入
``` js
yarn add -D sass-loader node-sass
```
然后你就可以在 Markdown 或是组件中使用如下代码：
``` js
<p class="title">这段文字用了sass样式</p>
.title{
    font-size: 20px;
    color: red;
}
```
<p class="title">这段文字用了sass样式</p>
<style lang="sass">
.title{
    font-size: 20px;
    color: red;
}
</style>

::: tip 提示
需要指出的是，如果你是一个 `stylus` 用户，你并不需要在你的项目中安装 `stylus` 和 `stylus-loader`，因为 VuePress 已经内置了它们。<br/>
对于那些没有内置的预处理器，除了安装对应的依赖，你还需要 拓展内部的 Webpack 配置。
:::
### 脚本和样式提升
- 有时，你可以只想在当前页面应用一些 JavaScript 或者 CSS，在这种情况下，你可以直接在 Markdown 文件中使用原生的 `<script>` 或者 `<style>` 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 `<script>` 和 `<style>` 标签。

输入
``` html
<p class="item1">这个块样式采用了内联样式。</p>
<style>
    .item1{
        padding: 1rem 1.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #41b883;
    }
</style>
```
输出<br/>
<p class="item1">这个块样式采用了内联样式。</p>
<style>
    .item1{
        padding: 1rem 1.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #41b883;
    }
</style>


