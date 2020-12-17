
const initiaalStateBill = {
    productList: [1,2,3,4,5],
}

const BillReducer = (state = initiaalStateBill, action) => {
    switch (action.type) {
        case "ADD_ProductBill": {
            return state;
        }
        case "DELETE_ProductBill": {
            return state;
        }
        default:
            return state;
    }
}
export default BillReducer;