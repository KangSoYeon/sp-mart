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
            <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
                useGPURender={true}
                navStyle={1}
                navSize={50}
                navMargin={30}
                slideDuration={0.5}
            />
            <Typography>Top Rate</Typography>
            물품 여덟개 정도
        </>
    )
}

export default MainTitle
