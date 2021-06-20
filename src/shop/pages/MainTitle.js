import React, { useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Typography, makeStyles, Grid } from '@material-ui/core';
import TopItem from '../components/TopItem';
import app from '../../base'

const MainTitle = () => {

    const [topList, setTopList] = useState([]);

    const fetchingData = async () => {
        const fetchData = await app.firestore().collection("products").where("top", "==", true).get();
        let tempList = []
        fetchData.forEach((data) => {
            tempList.push({ ...data.data(), "id": data.id })
        })
        setTopList(o => [...tempList])
    }

    useEffect(() => {
        fetchingData();
    }, [])

    const images = [
        { url: "/img/1.png" },
        { url: "/img/2.png" },
        { url: "/img/3.png" }
    ];

    return (
        <>
            <div className="slider">
                <div className="figure">
                    <img src={images[0].url} alt></img>
                    <img src={images[1].url} alt></img>
                    <img src={images[2].url} alt></img>
                </div>
            </div>
            <Grid container justify="center" >
                <Typography variant="h3" component="h3" gutterBottom>Top Rate</Typography>
            </Grid>
            <Grid container justify="center" spacing={3} >
                {topList.map((e) => (
                    <TopItem id={e.id} name={e.name} img={e.img} price={e.price}></TopItem>
                ))}
            </Grid>
        </>
    )
}

export default MainTitle
