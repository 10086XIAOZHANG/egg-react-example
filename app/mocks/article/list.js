'use strict';
const data = {
  list: [{
    title: `egg+react+服务器端渲染Example`,
    summary: 'egg+react+服务器端渲染Example',
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