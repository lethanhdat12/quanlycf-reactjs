import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <>
                <div className="col-md-3">
                    <div className="producItem">
                        <img src={this.props.srcProductItem} alt="" className="img img-fluid imgProductItem" />
                        <p> <strong> Giá : </strong> {this.props.priceProductItem} VND</p>
                    </div>
                </div>
            </>
        )
    }
}
