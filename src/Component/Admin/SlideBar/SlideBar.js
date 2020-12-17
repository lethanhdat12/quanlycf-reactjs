import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import SlideBarItem from './SlideBarItem'

export default class SlideBar extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href>
                    <div className="sidebar-brand-text mx-3">Coffee T&#38;T</div>
                </a>
                <hr className="sidebar-divider my-0" />
                <hr className="sidebar-divider" />
                    <SlideBarItem nameItem="Bán Hàng" changeContent="/banhang" icon="/src/img/banhang.png"></SlideBarItem>
                    <SlideBarItem nameItem="Tổng Quan" changeContent="/tongquan" icon="/src/img/tongquan.png"></SlideBarItem>
                    <SlideBarItem nameItem="Sản phẩm" changeContent="/sanpham" icon="/src/img/sanpham.png"></SlideBarItem>
                    <SlideBarItem nameItem="Bài viết" changeContent="/baiviet" icon="/src/img/baiviet.png"></SlideBarItem>
                    <SlideBarItem nameItem="Thống kê" changeContent="/thongke" icon="/src/img/thongke.png"></SlideBarItem>
            </ul>

        )
    }
}
