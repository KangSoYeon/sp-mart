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
            <Button
                to={"/cart"}
                component={RouterLink}>
                장바구니
            </Button>
            {/* 로그인 상태에서만 보이기, 접근가능 */}
            <Button
                to={"/myPage"}
                component={RouterLink}>
                마이페이지
            </Button>

        </div>
    )
}

export default TopBar
