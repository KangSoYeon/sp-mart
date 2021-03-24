import React, { useState } from 'react';
import { Box, List } from '@material-ui/core';
import NavItem from './NavItem'

const AdminTab = () => {

    const items = [
        {
          href: '/admin/shop',
          title: '쇼핑몰 관리'
        },
        {
          href: '/admin/customer',
          title: '회원 관리'
        },
        {
          href: '/admin/product',
          title: '상품 관리'
        },
        {
          href: '/admin/order',
          title: '주문 관리'
        },
      ];


    return (
        <Box>
            <List>
                {items.map((item) => (
                    <NavItem
                        href={item.href}
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                    />
                ))}

            </List>
        </Box>
    )
}

export default AdminTab
