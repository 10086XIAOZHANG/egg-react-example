'use strict';
const data = {
  list: [{
    title: `egg+react+服务器端渲染Example`,
    summary: '基于Egg + React + Webpack3/Webpack2 多页面和单页面服务器渲染同构工程骨架项目',
    hits: 550,
    url: 'ff'
  }]
};

let id = 1;

data.list = data.list.concat(data.list);
data.list = data.list.concat(data.list);

data.list.forEach(item => {
  item.id = id++;
});


const total = data.list.length;
exports.getPage = (pageIndex = 1, pageSize = 10)=> {
  const start = (pageIndex - 1) * pageSize;
  const end = start + Number(pageSize);
  return { list: data.list.slice(start, end), total };
};

exports.getDetail = id => {
  return data.list.filter(item => {
    return item.id === id;
  }).slice(0, 1);
};