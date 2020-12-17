import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
export default class SlideBarItem extends Component {
    render() {
        return (
            <li className="nav-item navDirect">
                <NavLink to={this.props.changeContent} activeStyle={{
                    backgroundColor: "white",
                    color: "blue"
                }}>
                    <img src={this.props.icon} alt="" className="img img-fluid img-iconSlide" />
                    <span>{this.props.nameItem}</span>
                </NavLink>
            </li>

        )
    }
}
