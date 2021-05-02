import React, { useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Typography } from '@material-ui/core';

const MainTitle = () => {

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
            {/* <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
                slideDuration={0.5}
                useGPURender={true}
                navStyle={1}
                navSize={50}
                navMargin={30}
                slideDuration={0.5}
                style={{verticalAlign: "middle"}}
            /> */}
            <Typography>Top Rate</Typography>
            물품 여덟개 정도
        </>
    )
}

export default MainTitle
