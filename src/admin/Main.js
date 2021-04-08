import React from 'react'
import AdminNav from './AdminNav'
import { Typography } from "@material-ui/core"
import { Outlet } from 'react-router-dom'
import Header from '../shop/components/Header'

const Admin = () => {

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
        <>
            <Header/>
            <Typography
                color="textPrimary"
                variant="h4">
                관리자 페이지
            </Typography>
            <AdminNav items={items}></AdminNav>
            <Outlet />
        </>
    )
}

export default Admin
