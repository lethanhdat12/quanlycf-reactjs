import React, { Component } from 'react'
import TableItems from './TableItems'
export default class BanhangItem extends Component {
    render() {
        const {listItem} = this.props;
        return (
            <div className="row">
                {
                    listItem.map((value,index) => {
                        return <TableItems numberTable={value + 1} key={index}></TableItems>;
                    })
                }
            </div>
        )
    }
}
