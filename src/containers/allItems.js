import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { addItem } from '../actions/index';
import { removeItem } from '../actions/index';
import { bindActionCreators } from 'redux';
import {Button} from 'react-bootstrap';


class allItems extends Component {
  renderAllItems() {
    console.log('all');
    console.log(this.props.allItems);
    return this.props.allItems.map((item) => {
      return (
        <li key={item.name} className="list-group-item"> <span className="itemname"> {item.name} </span>  <span>${item.price} </span> <Button className="button-remove btn btn-success btn-xs" onClick={() => this.props.addItem(item)}> + </Button>  </li>

      );
    });
  }

  renderSelectedItems() {
    console.log('selectedItems');
    console.log(this.props.selectedItems);
      return this.props.selectedItems.map((item) => {
        return (
          <li key={item.name} className="list-group-item"> <span className="itemname"> {item.name} </span>  <span>${item.price} x {item.quantity} </span> <Button className="button-remove btn btn-danger btn-xs" onClick={() => this.props.removeItem(item)}> X </Button>  </li>
        );
      });
  }


  render() {
    return (
      <div className="App-header">
        <Grid>
          <Row className="show-grid">
            <h3 className="header"> Food Menu </h3>
          </Row>
          <Row className = "show-grid main-menu">
            <Col sm={6}> <ul className="list-group">
              <h3 className="header-two"> Food Available </h3>
                {this.renderAllItems()}
              </ul>
            </Col>
            <Col sm={6}> <ul className="list-group">
              <h3 className="header-two">Food Ordered - <span className=""> Total: ${this.props.count}  </span> </h3>
                {this.renderSelectedItems()}
              </ul>
            </Col>
            </Row>
        </Grid>
    </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    allItems: state.allItems,
    selectedItems: state.selectedItems,
    count: state.count
  }
}


function mapDispatchToProps(dispatch) {
    return {
        addItem : (data) => dispatch(addItem(data)),
        removeItem : (data) => dispatch(removeItem(data))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(allItems);
