import React from 'react'
import Product from '../../domain/Product'

const ProductDetail = (props) => {
    // const p = new Product({props});
    console.log(props)
    const {code, name, img} = props;
    return (
        <>
            <div>{code}</div>
            <div>{name}</div>
            <img src={img} width="100px"></img>
        </>
    )
}

export default ProductDetail
