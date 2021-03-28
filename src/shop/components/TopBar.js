import React from 'react'
import { Button } from '@material-ui/core'
import { NavLink as RouterLink } from 'react-router-dom'

const TopBar = () => {
    return (
        <div>
            탑바
            <Button
                to={"/signIn"}
                component={RouterLink}>
                로그인
            </Button>
            <Button
                to={"/signUp"}
                component={RouterLink}>
                회원가입
            </Button>
        </div>
    )
}

export default TopBar
