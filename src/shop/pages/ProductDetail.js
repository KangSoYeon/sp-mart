import React from 'react'
import Product from '../../domain/Product'

const ProductDetail = (props) => {
    // const p = new Product({props});
    console.log(props)
    const {code, name} = props;
    return (
        <>
            <div>{code}</div>
            <div>{name}</div>
        </>
    )
}

export default ProductDetail
