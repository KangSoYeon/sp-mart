import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Toolbar, Button, IconButton,Link, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { AuthContext } from '../../AuthForm'
import { NavLink as RouterLink } from 'react-router-dom'
import app from '../../base'


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));


export default function Header() {
  const classes = useStyles();
  // const { sections, title } = props;
  const [sections, setSections] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [mode, setMode] = useState("guest")
  // const navigate = useNavigate();

  useEffect(() => {
    if (!!currentUser) { //login
      console.log(currentUser.email);//이게 admin이면 
      if (currentUser.email === "admin@sp.com") {
        setMode("manager")
      } else {
        setMode("member")
      }
    }
    console.log(mode)
  }, [mode])

  const signOut = () => {
    app.auth().signOut().then(() => {
      setMode("guest")
      window.location.replace('/');
      // navigate('/', { replace: true });
    })
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {/* <Button size="small">Subscribe</Button> */}
        {!!currentUser && currentUser.email}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          제목
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        <>
          {mode === "guest" && <>
            <Button
              to={"/signIn"}
              component={RouterLink} size="small">
              로그인
                </Button>
            <Button
              to={"/signUp"}
              component={RouterLink}
               size="small">
              회원가입
                </Button>
          </>}

          {mode != "guest" && <>
            <Button
              onClick={signOut} size="small">
              로그아웃
                    </Button>

            <Button
              to={"/myPage"}
              component={RouterLink} size="small">
              마이페이지
                    </Button>

          </>
          }
          <Button
            to={"/cart"}
            component={RouterLink} size="small">
            장바구니</Button>

          {mode === "manager" && <>
            <Button
              to={"/admin"}
              component={RouterLink} size="small">
              관리자페이지</Button>
          </>
          }
        </>

      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};