import React, { useState, useEffect } from 'react'
import { Button, Typography, Toolbar, Link} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink as RouterLink } from 'react-router-dom'

import { Router } from 'react-router-dom'
import app from '../../base'
const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  }));

const NavBar = () => {

    const [categories, setCategories] = useState([{}]);
    const [subCategory, setSubCategory] = useState([]);
    const classes = useStyles();

    const fetchingData = async () => {
        const categorySnapshot = await app.firestore().collection("categories").get();
        const temp = []
        categorySnapshot.forEach((doc) => {
            const data = doc.data()
            if (data.open) {
                temp.push({ ...data, "id": doc.id })
            }
        })
        setCategories(o => [...temp]);
    }

    const handleClick = (e) => {
        categories.map((c) => {
            if (c.id === e.currentTarget.id) {
                if (c.isOption) {
                    const options = c.options;
                    let secondCategory = [];

                    options.map((c2) => {
                        if (c2.open) {
                            secondCategory.push(c2)
                        }
                    })
                    setSubCategory(o => [...secondCategory])
                } else {
                    setSubCategory(o => [])
                }
            }
        })
    }

    useEffect(() => {
        fetchingData()
    }, [])

    let category1 = []
    categories.map((c) => {
        category1.push(<Button className={classes.toolbarLink} id={c.id} to={`/list/${c.id}`} component={RouterLink} value={c.name} onClick={(e) => handleClick(e)}>{c.name}</Button>)
    })

    let category2 = []
    subCategory.map((c) => {
        category2.push(<Button id={c.id} value={c.name} to={`/list/${c.id}`} component={RouterLink}>{c.name}</Button>)
    })

    return (
        <>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {category1}
            </Toolbar>
            <br />
            {/* category 2 ??? ??? ???    */}
            {category2.length !== 0 && <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {category2}
            </Toolbar>}
            
        </>
    )
}

export default NavBar
