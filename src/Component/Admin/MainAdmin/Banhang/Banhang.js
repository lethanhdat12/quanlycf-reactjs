import React, { Component } from 'react'
import { useSelector } from 'react-redux';
import BanhangItem from './BanhangItem';
function Banhang() {
    const billReducers = useSelector(state => state.Bill.productList);
    return (
        <BanhangItem listItem = {billReducers}></BanhangItem>
    )
}
export default Banhang;
