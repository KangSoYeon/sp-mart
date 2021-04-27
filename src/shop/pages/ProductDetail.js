import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';
import app from '../../base'

const ProductDetail = () => {

    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({})

    const fetchData = async () => {
        const doc = await app.firestore().collection("products").doc(productId).get();
        if ( doc.exists ) {
            setProduct(doc.data())
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
            <div>{productId}</div>
            <div>{product.name}</div>
            <img src={product.img}></img>
        </>
    )
}

export default ProductDetail
