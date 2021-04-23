import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import app from '../../base'
import ProductButton from '../components/ProductButton'

const ProductList = () => {

    const { listId } = useParams()
    const products = useState([])
    const fetchingData = async () => {
        const query = await app.firestore().collection("products").where("category", "array-contains", listId).get();
        let listTemp = []
        query.forEach((p) => {
            listTemp.push(p)
        })
        products(o => [...listTemp]);
    }

    useEffect(() => {
        fetchingData()
        //어디가 클릭되면 좋을지 생각해보자~ 
    }, [])

    return (
        <>
            <div>{listId}</div>

            {products.map((p) => {
                <>
                    <ProductButton img={p.img} name={p.name} price={p.salePrice}></ProductButton>
                </>
            })}


        </>
    )
}

export default ProductList
