import React from 'react'
import AdminNav from '../components/AdminNav'
import { Typography } from "@material-ui/core"
import { Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <Typography
                color="textPrimary"
                variant="h4">
                관리자 페이지
                </Typography>
            <AdminNav></AdminNav>
            <Outlet/>
        </>
    )
}

export default Admin
