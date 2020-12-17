import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import DirectRouter from '../../DirectRouter';
import HeaderAdmin from './HeaderAdmin/HeaderAdmin'
import SlideBar from './SlideBar/SlideBar'
export default class Admin extends Component {
    render() {
        return (
            <Router>
                <div id="wrapper">
                    <SlideBar></SlideBar>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                                <HeaderAdmin></HeaderAdmin>
                                <div className="container-fluid">
                                    <DirectRouter></DirectRouter>
                                </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
