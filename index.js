/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-1
 * @author Pang <pang@maichong.it>
 */

import wx from 'labrador';
import AppraiseItem from './item';

const { func, array } = wx.PropTypes;

export default class Appraise extends wx.Component {
  propTypes = {
    items: array,
    onChange: func,
    arr: []
  };
  data = {
    items: []
  };

  children = {
    listItems: new wx.List(AppraiseItem, 'items', {
      item: '>>',
      onChange: '#handleChange'
    })
  };

  handleChange(component, data) {
    let arr = [];
    this.data.items.forEach((item)=> {
      if (item.id === data.id) {
        item = data;
      }
      arr.push(item);
    });
    this.setData({
      arr
    });
  }

  handleAppraise() {
    this.props.onChange(this.data.arr);
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
    this.setData({ items: props.items });
  }
}
