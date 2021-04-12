import React, { useContext, useEffect } from 'react'
import AdminNav from './AdminNav'
import { Typography } from "@material-ui/core"
import { Outlet } from 'react-router-dom'
import Header from '../shop/components/Header'
import { AuthContext } from '../AuthForm'

const Admin = () => {
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (!!currentUser) {
            if (currentUser.email !== "admin@sp.com") {
                alert("접근 권한이 없습니다.")
                window.location.replace('/');
            }
        } else {
            alert("접근 권한이 없습니다.")
            window.location.replace('/');
        }
    }, [])

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
            <Header />
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
