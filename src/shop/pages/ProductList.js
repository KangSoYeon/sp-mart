import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import app from '../../base'
import ProductButton from '../components/ProductButton'

const ProductList = () => {

    const { listId } = useParams()
    const [products, setProducts] = useState([])

    const fetchingData = async () => {
        const query = await app.firestore().collection("products").where("category", "array-contains", listId).get();
        let listTemp = []
        query.forEach((p) => {
            listTemp.push(p.data())
        })
        console.log(listTemp)
        setProducts(o => [...listTemp]);
    }

    useEffect(() => {
        fetchingData()
        //어디가 클릭되면 좋을지 생각해보자~ 
    }, [])

    let showedList = []
    showedList = [...products]


    return (
        <>
            <div>{listId}</div>

            {showedList.map((p, index) => {
                <>
                    <div>{p.name}</div>
                    <ProductButton id={index} img={p.img} name={p.name} price={p.salePrice}></ProductButton>
                </>
            })}


        </>
    )
}

export default ProductList
