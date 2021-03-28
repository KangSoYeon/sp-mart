import React from 'react'
import { Button } from '@material-ui/core'
import { NavLink as RouterLink } from 'react-router-dom'

const NavItem = ({ className, href, title, ...rest }) => {
    return (
        <>
            <Button
                to={href}
                component={RouterLink}
            >
                {title}
            </Button>

        </>
    )
}

export default NavItem
