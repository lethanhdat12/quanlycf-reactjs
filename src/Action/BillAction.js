

export const AddProductBill = (product)=>{
    return {
        type : "ADD_ProductBill",
        payload : product,
    }
}
export const DeleteProductBill = (product)=>{
    return {
        type : "DELETE_ProductBill",
        payload : product,
    }
}