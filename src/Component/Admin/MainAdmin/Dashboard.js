import React, { Component } from 'react'
import CommentItems from './CommentItems'
import MainItemDashboard from './MainItemDashboard'

export default class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">TỔNG QUAN</h1>
                </div>

                <div className="row">
                    <MainItemDashboard colorBorder="primary" titleItems={`${40000}$`} title="Thống kê (tháng)"></MainItemDashboard>
                    <MainItemDashboard colorBorder="warning" titleItems={`${20000}$`} title="Thống kê (tuần)"></MainItemDashboard>
                    <MainItemDashboard colorBorder="success" titleItems={`${3000}$`} title="Thống kê (ngày)"></MainItemDashboard>
                    <MainItemDashboard colorBorder="danger" titleItems={18} title="Phản hồi"></MainItemDashboard>
                </div>

                <div className="row">
                    {/* Area Chart */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Phản hồi gần nhất</h6>
                            </div>
                            <div className="card-bory">
                                <div id="comment">
                                    <CommentItems imgUserComment="/src/img/facebook.png" nameUserComment="Lê Thành Đạt" commentContent="Sản phẩm tốt"></CommentItems>
                                    <CommentItems imgUserComment="/src/img/github.png" nameUserComment="Trường Huỳnh Quốc Bảo" commentContent="sinh tố bơ rất ngon"></CommentItems>
                                    <CommentItems imgUserComment="/src/img/gmail.png" nameUserComment="Trần Minh Dũng" commentContent="sinh tố dừa quá nhiều sữa"></CommentItems>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-danger">Xem thêm phản hồi</button>
                            </div>
                        </div>
                    </div>
                    {/* Pie Chart */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* Card Header - Dropdown */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Số sản phẩm bán được nhiều nhất</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead class="thead-light">
                                            <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Tên sản phẩm</th>
                                                <th scope="col">Số lượng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Sinh tố bơ</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Sinh tố dừa</td>
                                                <td>78</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Nước ép cam</td>
                                                <td>20</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </>
        )
    }
}
