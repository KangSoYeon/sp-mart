import React from 'react'
import { useNavigate } from 'react-router'
import { makeStyles, Grid } from '@material-ui/core';

const TopItem = ({ id, name, img, price }) => {
    let navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/detail/${id}`);
    }

    const useStyles = makeStyles((theme) => ({
        container: {
            img: {
                opacity: 1,
                display: "block",
                width: 100,
                height: "auto",
                backface: "hidden",
                '&:hover': {
                    opacity: 0.3
                }
            },
            info: {
                '&:hover': {
                    opacity: 1
                }
            }
        }
    }))

    const classes = useStyles();
    return (
        <>
            <Grid item xs={6} sm={3} onClick={clickHandler}>
                <container>
                    <img className={classes.img} src={img} width="200px"></img>
                    <info>{name} : {price}</info>
                </container>
            </Grid>
        </>
    )
}

export default TopItem
