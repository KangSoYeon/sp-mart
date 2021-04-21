import React, { useEffect } from 'react'

const ProductList = (props) => {

    useEffect(() => {
        console.log({props})
        //이건 Router로 해야한다아아아앙 NavLink 아니다아아아아
    }, [])

    return (
        <>
            <div>{props.url}</div>
            <div>{props.match.url}</div>        

        </>
    )
}

export default ProductList
