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