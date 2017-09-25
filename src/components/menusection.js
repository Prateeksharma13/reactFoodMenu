import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Item from './item.js';
import Selecteditem from './selectedItems.js';



class Menusection extends Component {
  addItem(id) {
    this.props.addItem(id);
  }
  removeItem(id) {
    this.props.removeItem(id);
  }
  allItems() {
    return this.props.allItems.map((item) => {
      return (
        <Item addItem={this.addItem.bind(this)} key={item.id} item={item} ></Item>
      );
  )};
  }

  render() {
    let allItems;
    if(this.props.all) {
      allItems = this.props.all.map(item => {
         return <Item addItem={this.addItem.bind(this)} key={item.id} item={item} ></Item>
      })
    }
    let selectedItems;
    if(this.props.selected) {
      selectedItems = this.props.selected.map(item => {
         return <Selecteditem removeItem={this.removeItem.bind(this)} key={item.id} item={item} ></Selecteditem>
      })
    }
    return (
      <div className="Menusection">
          <Col md={6}> {this.allItems()} </Col>
          <Col md={6}> {selectedItems} </Col>
      </div>
    );
  }
}

export default Menusection;
