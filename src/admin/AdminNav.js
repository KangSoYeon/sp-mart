import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import NavItem from './NavItem'

const AdminTab = ({ items }) => {

  return (
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
