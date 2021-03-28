import React from 'react'
import app from '../../base'
import Nav from '../AdminNav'
import { Outlet } from 'react-router';

const ManageProduct = () => {
    const items = [
        {
            href: '/admin/product/editMain',
            title: '노출 상품 편집'
        },
        {
            href: '/admin/product/newProduct',
            title: '상품신규등록'
        },
        {
            href: '/admin/product/editProduct',
            title: '기존 상품 수정'
        }
    ];

    return (
        <>
            <Nav items={items}></Nav>
            상품 관리
            <Outlet/>
        </>
    )
}

export default ManageProduct
