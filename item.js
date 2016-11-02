/**
 * item.js
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-02
 * @author Pang <pang@maichong.it>
 */

import wx from 'labrador';
import ImageField from 'al-image-field';
import GradeField from 'al-grade-field';
import immutable from 'seamless-immutable';

const { func, object } = wx.PropTypes;

export default class Item extends wx.Component {
  propTypes = {
    item: object,
    onChange: func
  };

  data = {
    pics: [],
    item: {},
    grade: 5
  };

  children = {
    imageField: new ImageField({
      pics: '@pics',
      count: 4,
      preLine: 4,
      padding: 20,
      onChange: '#handleImageAdd'
    }),
    gradeField: new GradeField({
      grade: '@grade',
      title: '描述相符',
      onChange: '#handleGrade'
    })
  };

  handleImageAdd(pics) {
    let item = {};
    item.id = this.data.item.id;
    item.pic = this.data.item.pic;
    item.pics = pics;
    item.content = this.data.item.content;
    item.grade = this.data.item.grade;
    this.setData({ pics, item });
    this.props.onChange(item);
  }

  handleGrade(grade) {
    let item = {};
    item.id = this.data.item.id;
    item.pic = this.data.item.pic;
    item.pics = this.data.item.pics;
    item.content = this.data.item.content;
    item.grade = grade;
    this.setData({ grade, item });
    this.props.onChange(item);
  }

  handleInput(e) {
    let item = {};
    item.id = this.data.item.id;
    item.pic = this.data.item.pic;
    item.pics = this.data.item.pics;
    item.content = e.detail.value;
    item.grade = this.data.item.grade;
    this.setData({ item });
    this.props.onChange(item);
  }

  onLoad() {

  }

  onReady() {

  }

  onShow() {

  }

  onHide() {

  }

  onUnload() {

  }

  onUpdate(props) {
    let item = immutable(props.item);
    this.setData({
      item,
      pics: item.pics,
      grade: item.grade
    });
  }
}

