import React, { Component } from 'react'

export default class TypeProduct extends Component {
    render() {
        return (
            <li className="typeProductItem ">
                <div className="productItemBox shadow">
                    <img src={this.props.imgProductItem} alt="" className="img img-fluid imgTypeProduct" />
                    <p className="nameProductItems">{this.props.nameProductItem}</p>
                </div>
            </li>
        )
    }
}
