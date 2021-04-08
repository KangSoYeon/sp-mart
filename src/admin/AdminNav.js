import React, { useState } from 'react';
import { Grid, Toolbar, Button, IconButton, Typography, Link } from '@material-ui/core';
import NavItem from './NavItem'
import { makeStyles } from '@material-ui/core/styles';


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

const AdminTab = ({ items }) => {
  const classes = useStyles();
  return (
    // <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
    //   {items.map((section) => (
    //     <Link
    //       color="inherit"
    //       noWrap
    //       key={section.title}
    //       variant="body2"
    //       href={section.url}
    //       className={classes.toolbarLink}
    //     >
    //       {section.title}
    //     </Link>
    //   ))}
    // </Toolbar>
    <Grid>
      {
        items.map((item) => (
          <NavItem
            href={item.href}
            key={item.title}
            title={item.title}
          />
        ))
      }
    </Grid>
  )
}

export default AdminTab
