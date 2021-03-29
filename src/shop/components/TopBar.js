import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { NavLink as RouterLink } from 'react-router-dom'
import { AuthContext } from '../../AuthForm'
import { useNavigate } from 'react-router-dom'
import app from '../../base'

const TopBar = () => {
    //탑바 실시간으로 안바뀌는 문제 해결~~ 
    const { currentUser } = useContext(AuthContext);
    const [mode, setMode] = useState("guest")
    const navigate = useNavigate();

    useEffect(() => {
        if (!!currentUser) { //login
            console.log(currentUser.email);//이게 admin이면 
            if (currentUser.email === "admin@sp.com") {
                setMode("manager")
            } else {
                setMode("member")
            }
        }
    }, [mode])

    const signOut = () => {
        app.auth().signOut().then(() => {
            setMode("guest")
            navigate('/', { replace: true });
        })
    }

    if (mode === "guest") {
        return (
            <>
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
            </>
        )
    } else if (mode === "member") {
        return (
            <div>
                {currentUser.email}
                <Button
                    onClick={signOut}>
                    로그아웃
                </Button>
                <Button
                    to={"/cart"}
                    component={RouterLink}>
                    장바구니
                </Button>
                <Button
                    to={"/myPage"}
                    component={RouterLink}>
                    마이페이지
                </Button>
            </div>
        )
    } else if (mode === "manager") {
        return (
            <div>
                {currentUser.email}
                <Button
                    onClick={signOut}>
                    로그아웃
                </Button>
                <Button
                    to={"/cart"}
                    component={RouterLink}>
                    장바구니
                </Button>
                <Button
                    to={"/myPage"}
                    component={RouterLink}>
                    마이페이지
                </Button>
                <Button
                    to={"/admin"}
                    component={RouterLink}>
                    관리자페이지
                </Button>

            </div>
        )
    }
}

export default TopBar
