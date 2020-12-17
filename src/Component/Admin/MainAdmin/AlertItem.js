import React, { Component } from 'react'

export default class AlertItem extends Component {
    render() {
        return (
            <a className="dropdown-item d-flex align-items-center" href>
                <div className="mr-3">
                    <div className="icon-circle bg-primary">
                       <img src={this.props.srcAlertUser} alt="" className="img-fluid img-imgAlertUser"/>
                    </div>
                </div>
                <div>
                    <div className="small text-gray-500"> {this.props.timeAlert} </div>
                    <span className="font-weight-bold">{this.props.contentAlert} </span>
                </div>
            </a>
        )
    }
}
