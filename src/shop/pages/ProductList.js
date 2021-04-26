import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import app from '../../base'
import ProductButton from '../components/ProductButton'
import { Grid } from "@material-ui/core"

const ProductList = () => {

    const { listId } = useParams()
    const [products, setProducts] = useState([])

    const fetchingData = async () => {
        const query = await app.firestore().collection("products").where("category", "array-contains", listId).get();
        let listTemp = []
        query.forEach((p) => {
            listTemp.push({...p.data(), "id" : p.id})
        })
        setProducts(o => [...listTemp]);
    }

    useEffect(() => {
        fetchingData()
    }, [listId])

    let showedList = []
    products.map((p) => {
        showedList.push(<ProductButton id={p.id} img={p.img} name={p.name} price={p.salePrice}></ProductButton>)
    })
    
    return (
        <>
            <Grid container spacing={2}>
            {showedList}
            </Grid>
        </>
    )
}

export default ProductList
