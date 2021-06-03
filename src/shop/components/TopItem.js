import React from 'react'
import { useNavigate } from 'react-router'
import { makeStyles, Grid, ButtonBase, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 100
    },
    image: {
        position: 'relative',
        height: 300,
        width: 300,
        [theme.breakpoints.down('xs')]: {
            height: 120,
            width: 120
        },
        [theme.breakpoints.down('sm')]: {
            height: 200,
            width: 200
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const TopItem = ({ id, name, img, price }) => {
    let navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/detail/${id}`);
    }
    const classes = useStyles();

    return (

        <Grid item sm={6} md={4} lg={3} onClick={clickHandler}>
            {/* <div className={classes.root}> */}
            <ButtonBase
                focusRipple
                key={name}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                // style={{
                    
                // }}
            >
                <span
                    className={img}
                    style={{
                        backgroundImage: `url(${img})`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {name}
                        <span className={classes.imageMarked} />
                    </Typography>
                </span>
            </ButtonBase>
            {/* </div> */}
            {/* <Grid item xs={3} sm={3} onClick={clickHandler}>
                <div class="grid">
                    <figure className="effect-lily">
                        <img src={img} alt={img} />
                        <figcaption>
                            <h2>{name}</h2>
                            <span>{price}</span>
                        </figcaption>
                    </figure>
                </div>
            </Grid> */}
        </Grid>

    )
}

export default TopItem
