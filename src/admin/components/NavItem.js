import React from 'react'
import { Button } from '@material-ui/core'

const NavItem = ({ className, href, title, ...rest}) => {
    return (
        <div>
            <Button to={href}>
                {title}
            </Button>
        </div>
    )
}

export default NavItem
