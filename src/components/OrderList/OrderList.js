import React from 'react';
import PropTypes from 'prop-types';
import './OrderList.scss';
import deleteIcon from './garbage.png';

import NumberSpinner from '../NumberSpinner/NumberSpinner'

import * as action from '../../action'
import { connect } from 'react-redux'

class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
    }
    handleUpClick = () => {
        this.setState({
            number: ++this.state.number
        },function() {
            this.props.updateSelectedItemQuantity(
                {
                    name: this.props.name,
                    quantity: this.state.number
                }
            )
        })
       
    }
    handleDownClick = () => {
        if (this.state.number > 1) {
            this.setState({
                number: --this.state.number
            },function() {
                this.props.updateSelectedItemQuantity(
                    {
                        name: this.props.name,
                        quantity: this.state.number
                    }
                )
            })
        }
    }
    render() {
        return (
            <div className="orderList">
                <button className="deleteBtn" onClick={this.props.handleDelete}>
                    <img src={deleteIcon} />
                </button>
                <div className="column-1">
                    <p className="item_name">{this.props.name}</p>
                    <p className="unit_price">{this.props.unitPrice}</p>
                </div>
                <div className="column-2">
                    <NumberSpinner number={this.state.number} handleUpClick={this.handleUpClick} handleDownClick={this.handleDownClick} />
                    <span className="subtotal">{this.state.number * this.props.unitPrice}</span>
                </div>
            </div>
        )
    }
}
OrderList.propTypes = {
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    handleDelete: PropTypes.func,
    number: PropTypes.number
}
const mapStateToProps = store => (
    {
      selectedItem: store.selectedItem
    }
)

export default connect(mapStateToProps, action)(OrderList);