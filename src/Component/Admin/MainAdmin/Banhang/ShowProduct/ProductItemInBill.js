import React, { Component } from 'react'

export default class ProductItemInBill extends Component {
    render() {
        return (
                <tr>
                    <th scope="row"> {this.props.sttProductItemInBill} </th>
                    <td> {this.props.nameProductItemInBill} </td>
                    <td>{this.props.soluongProductItemInBill} </td>
                    <td>{this.props.giaProductItemInBill}</td>
                </tr>
        )
    }
}
