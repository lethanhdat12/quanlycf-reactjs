import React, { Component } from 'react'
import ProductItem from './ProductItem'
import ProductItemInBill from './ProductItemInBill'
import TypeProduct from './TypeProduct'
export default class ShowProduct extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    {/* Area Chart */}
                    <div className="col-xl-8 col-lg-7 colListProduct">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Danh sách sản phẩm</h6>
                            </div>
                            <div className="card-bory">
                                <div id="comment">
                                    <div className="row rowProducItem">
                                        <ProductItem srcProductItem="/src/img/facebook.png" priceProductItem={20000}></ProductItem>
                                        <ProductItem srcProductItem="/src/img/facebook.png" priceProductItem={20000}></ProductItem>
                                        <ProductItem srcProductItem="/src/img/facebook.png" priceProductItem={20000}></ProductItem>
                                        <ProductItem srcProductItem="/src/img/facebook.png" priceProductItem={20000}></ProductItem>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row rowTypeProduct">
                            <div className="arrow">
                                <span> 
                                    <img src="/src/img/left-arrow.png" alt="" className="img img-fluid imgArrow"/>
                                </span>
                                <span> 
                                    <img src="/src/img/right-arrow.png" alt="" className="img img-fluid imgArrow"/>
                                </span>
                            </div>
                            <ul className="TypeProduct">
                                <TypeProduct imgProductItem="/src/img/sinhto.png" nameProductItem="Sinh tố"></TypeProduct>
                                <TypeProduct imgProductItem="/src/img/dua.png" nameProductItem="Dừa"></TypeProduct>
                                <TypeProduct imgProductItem="/src/img/yahourt.png" nameProductItem="Yahourt"></TypeProduct>
                                <TypeProduct imgProductItem="/src/img/nuocep.png" nameProductItem="Nước ép"></TypeProduct>
                                <TypeProduct imgProductItem="/src/img/diemtam.png" nameProductItem="Điểm tâm"></TypeProduct>
                                <TypeProduct imgProductItem="/src/img/nuocngot.png" nameProductItem="Nước ngọt"></TypeProduct>
                                <TypeProduct imgProductItem="/src/img/nuocngot.png" nameProductItem="Nước ngọt"></TypeProduct>
                            </ul>

                        </div>
                    </div>
                    {/* Pie Chart */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Hóa đơn</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead class="thead-light">
                                            <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Tên sản phẩm</th>
                                                <th scope="col">Số lượng</th>
                                                <th scope="col">Giá</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <ProductItemInBill
                                                sttProductItemInBill = {1}
                                                nameProductItemInBill = "sinh tố bơ"
                                                soluongProductItemInBill = {1}
                                                giaProductItemInBill = {20000}
                                            />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btnBill btn btn-warning" onClick={() => this.props.closeTable()}>Lưu</button>
                                <button className="btnBill btn btn-danger">Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
