import React from 'react'

const ProductButton = ({ name, img, price}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{img}</div>
            <div></div>
        </div>
    )
}

export default ProductButton
