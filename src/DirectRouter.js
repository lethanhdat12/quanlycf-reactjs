import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import BaiViet from './Component/Admin/MainAdmin/Baiviet/BaiViet';
import Banhang from './Component/Admin/MainAdmin/Banhang/Banhang';
import ShowProduct from './Component/Admin/MainAdmin/Banhang/ShowProduct/ShowProduct';
import Dashboard from './Component/Admin/MainAdmin/Dashboard';
import Sanpham from './Component/Admin/MainAdmin/Sanpham/Sanpham';
import Thongke from './Component/Admin/MainAdmin/Thongke/Thongke';
export default class DirectRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Banhang} />
                <Route path="/banhang" component={Banhang} />
                <Route path="/tongquan" component={Dashboard} />
                <Route path="/sanpham" component={Sanpham} />
                <Route path="/baiviet" component={BaiViet} />
                <Route path="/thongke" component={Thongke} />
                <Route path="/banhang/ban/:id" component={ShowProduct} />
            </Switch>
        )
    }
}
