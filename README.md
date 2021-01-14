<!--
 * @Descripttion:
 * @Author: 李征
 * @Date: 2020-10-22 16:37:01
 * @LastEditors: 李征
 * @LastEditTime: 2020-10-23 10:54:39
 * @FilePath: /react-project/README.MD
-->

### project structure

```
|-- build                    webpack 配置
    |-- webpack.base.conf.js                    公共部分
    |-- webpack.dev.conf.js                     dev环境
    |-- webpack.prod.conf.js                    prod环境
    |-- webpack.dll.conf.js
|-- config                   配置
|-- public                   静态文件
|-- src                      客户端目录
    |-- apps                                    业务代码
        ...
        |-- Home                                             首页
            |-- component                                             UI子组件
                |-- Form                                              表单子组件
            |-- index.js                                     入口
            |-- index.style.less                             布局样式
            |-- index.state.js                               mobx数据

    |-- asset                                   公共静态资源
    |-- components                              公共UI组件
    |-- config                                  公共常量配置
    |-- router                                  路由配置
    |-- styles                                  样式目录
    |-- utils                                   公共工具类
    |-- app.js                                  入口js文件
|-- .gitignore                 git配置文件
|-- .babelrc                   babelrc配置文件
|-- jsconfig.json              Visual Studio Code 配置相关文件
|-- package.json               项目依赖包配置文件
|-- README.md                  markdown文件
```

# 项目打包

```
npm run build
```

# 统一术语

全局：common\
业务模块：mop\
大骆驼峰：LoginPage\
小骆驼峰：loginPage\
点命名: index.style.less\
全局组件：PareInput（srv/components）\
UI 子组件：MainView src/components）\
入口：index.js
Mobx 数据：index.state.js\
Mock 数据：index.mock.js\
静态数据：index.data.js\
样式：index.style.less\

# 命名规范

1、组件类，UI 组件函数名与其文件夹同名且是大骆驼峰命名。\

# 组件引用规范

组件级别：全局>模块>页面分类>页面\
1、全局组件不允许引用模块 UI 子组件。\
2、页面与页面，页面分类与页面分类，模块与模块 之前不允许相互引用，有公共组件请提升级别。\
3、公共组件，UI 子组件，不允许引用 components 入口（index.js）。\
4、页面 与 页面，有公共 UI 子组件，放入 页面分类 components 下。\
5、页面分类 与 页面分类，有公共 UI 子组件 放入 模块 components 下。\
6、模块 与 模块 有公共，UI 子组件 放入 全局 components 下。

# Utils 工具类规范

Utils 级别：全局>模块\
1、全局工具类只存放基础工具，不添加具体业务逻辑。\
2、模块工具类存放具体业务逻辑工具类。

# 主题变量命令规范（Themes.js）

## 变量命名规范

{组件}\_{属性}\_{场景}\_{状态}\_{大小}\_{反色}

### 组件

可选，具体组件名：如 button tabs list input 等。未指定时表示全局通用。

```
组件名可以复合，例如 default-button table tabs-current link-button 以表示更精确的主体。
```
