import React from 'react'
import AdminNav from '../components/AdminNav'
import { Typography } from "@material-ui/core"

const Admin = () => {
    return (
        <>
            <Typography
                color="textPrimary"
                variant="h4">
                관리자 페이지
                </Typography>
            <AdminNav></AdminNav>
        </>
    )
}

export default Admin
