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
  return (
    <Grid>
      {
        items.map((item, index) => (
          <NavItem
            href={item.href}
            key={index}
            title={item.title}
          />
        ))
      }
    </Grid>
  )
}

export default AdminTab
