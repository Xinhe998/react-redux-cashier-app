import React from 'react';
import './Order.scss';

import OrderList from '../OrderList/OrderList'
import { connect } from 'react-redux'

import * as action from '../../action'


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SubTotal: 0,
            DayEvent_discount: '0'
        }
    }
    handleDelete = (item) => {
        this.props.onItemUnselected({
            name: item.name
        })
        this.props.updateIsSelectedForFood({
            name: item.name,
            isSelected: false
        })
    }
    render() {
        var { selectedItem } = this.props;
        var subtotal = 0;
        selectedItem.map((item) => {
            subtotal += item.price * item.quantity;
        })
        return (
            <div className="orderBox">
                <div className="title">
                    <p>New Order</p>
                </div>
                {selectedItem.map((item, key) => {
                    return (
                        <OrderList name={item.name} unitPrice={item.price} handleDelete={()=>this.handleDelete(item)} key={key} />
                    )
                })}
                <div className="checkoutBox">
                    <div>
                        <span>Subtotal</span>
                        <span className="subtotal">{subtotal}</span>
                    </div>
                    <div>
                        <input type="checkbox" checked={this.state.isDayEvent} />
                        <span>Day Event</span>
                        <span className="red">{this.state.DayEvent_discount}</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span className="red">1000</span>
                    </div>
                    <div>
                        <button className="saveBtn">Save</button>
                        <button className="payBtn">Pay Now</button>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = store => (
    { selectedItem: store.selectedItem }
)

  export default connect(mapStateToProps, action)(Order)