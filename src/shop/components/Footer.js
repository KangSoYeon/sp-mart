import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                상패가게
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        // backgroundColor: theme.palette.background.paper,
        // marginTop: theme.spacing(8),
        backgroundColor: "black",
        color: "white",
        padding: theme.spacing(6, 0),
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        제목
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        설명
                    </Typography>
                    <Copyright/>
                </Container>
            </footer>
        </>
    )
}

export default Footer
