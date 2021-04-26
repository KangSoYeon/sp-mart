import React from 'react'
import { Grid } from "@material-ui/core"
import { useNavigate } from 'react-router-dom';

const ProductButton = ({ id, name, img, price }) => {

    let navigate = useNavigate();

    const clickHandler = () => {
        //productDetail로 이동 
        navigate(`/detail/${id}`)
    }

    return (
        <Grid item xs={6} sm={3} onClick={clickHandler}>
            <img src={img} width="200px"></img>
            <div>{name}</div>
            <div>{price}</div>
        </Grid>
    )
}

export default ProductButton
