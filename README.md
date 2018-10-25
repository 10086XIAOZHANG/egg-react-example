# example

react+eggExample

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+
- Webpack 版本: ^3.10.0, 对应 `easywebpack-react` 版本为 3.6.0
- React 版本: ^15.0.0, ^16.0.0


### # 多页面前端页面实现
在app/web/page 目录下面创建ss目录, ss.jsx 文件, Webpack自动根据.jsx 文件创建entry入口
#### ss.jsx 以组件的方式实现页面逻辑

```
import React, { Component } from 'react';
import Header from 'component/header/header.jsx';

export default class TestComponent extends Component {
  componentDidMount(){
    console.log('----componentDidMount-----');
  }
  render() {
    return <div><Header></Header>这个是测试page</div>;
  }
}
```

### # 多页面后端渲染实现, 通过 egg-view-react-ssr 插件 render 方法实现

- 创建controller文件ss.js

```
module.exports = app => {
  return class SSController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('ss/ss.js', {
        title:'-test--',
        keywords:'react, server side render, ant design',
        message: { text: 'react ant design server side render demo!'}});
    }
  };
}; 
```
- app/router.js添加路由配置

  app.get('/ss', app.controller.ss.ss.index);