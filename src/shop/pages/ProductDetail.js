import React from 'react'

const ProductDetail = ({ match }) => {
    return (
        <>
            productDetail
            {match.params.id}
        </>
    )
}

export default ProductDetail
