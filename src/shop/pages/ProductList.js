import React from 'react'

const ProductList = ({ match }) => {

    return (
        <>
            <div>{match.params.listId}</div>        
        </>
    )
}

export default ProductList
