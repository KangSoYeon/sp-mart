import React from 'react'
import { useNavigate } from 'react-router'
import { makeStyles, Grid } from '@material-ui/core';

const TopItem = ({ id, name, img, price }) => {
    let navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/detail/${id}`);
    }

    return (
        <>
            <Grid item xs={3} sm={3} onClick={clickHandler}>
                <div class="grid">
                    <figure className="effect-lily">
                        <img src={img} alt={img} />
                        <figcaption>
                            <h2>{name}</h2>
                            <span>{price}</span>
                        </figcaption>
                    </figure>
                </div>
            </Grid>
            {/* <container>
                    <img className={classes.img} src={img} width="200px"></img>
                    <info>{name} : {price}</info>
                </container> */}
        </>
    )
}

export default TopItem
