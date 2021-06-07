import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';
import { Grid } from "@material-ui/core"
import ProductDetailOption from '../components/ProductDetailOption'
import app from '../../base'

const ProductDetail = () => {

    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({})

    const fetchData = async () => {
        const doc = await app.firestore().collection("products").doc(productId).get();
        if (doc.exists) {
            setProduct(doc.data())
            console.log(doc.data().options[0])
        } else {
            alert("해당 게시글을 찾을 수 없습니다.")
            navigate("/");
        }
    }

    useEffect(() => {
        fetchData();
    }, [productId])

    return (
        <>
            {product.category !== undefined && product.category.map(c =>
                <div>{c} > {product.name}</div>)}
            <Grid container spacing={2}>
                <Grid item item sm={12} md={6} lg={6} >
                    <img src={product.img} width={400}></img>
                </Grid>
                <Grid item sm={12} md={6} lg={6} >
                    <div>상품명 {product.name}</div>
                    <div>시중가격 {product.originalPrice}</div>
                    <div>판매가격 {product.salePrice}</div>
                    {product.options !== undefined && product.options.map(option =>(
                        <ProductDetailOption option={option} ></ProductDetailOption>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default ProductDetail
