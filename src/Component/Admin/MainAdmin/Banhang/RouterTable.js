import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import BanhangItem from './BanhangItem';
import ShowProduct from './ShowProduct/ShowProduct';
export default class RouterTable extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/banhang" component={BanhangItem} />
                <Route path="/banhang/ban/:id" component={ShowProduct} />
            </Switch>
        )
    }
}
