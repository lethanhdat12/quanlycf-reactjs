import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink ,useParams} from "react-router-dom";
export default class TableItems extends Component {
    render() {
        return (
            <>
                <div className="col-md-3 col-sm-6 col-lg-3 colTableName">
                    <NavLink to={"/banhang/ban/"+this.props.numberTable}>
                        <div className="tableCell shadow" onClick={()=>this.props.showTable()}>
                            <img src="/src/img/table.png" alt="" className="img img-fluid imgTable" />
                            <p className="tableName"> Bàn {this.props.numberTable} </p>
                        </div>
                    </NavLink>
                </div>
            </>
        )
    }
}
