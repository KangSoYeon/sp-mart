import React, { useContext, useEffect, useState } from 'react'
import { Link as RouterLink, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Button, IconButton, Link, Typography, Tooltip } from '@material-ui/core';

// import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Person from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import { ShoppingCartOutlinedIcon, PersonOutlineIcon } from '@material-ui/icons';


import { AuthContext } from '../../AuthForm'
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
    <>
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
          onClick={() => window.location.replace('/')}
        >
          상패마트
        </Typography>

        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        <>
          {mode === "guest" && <>
            <Button
              to={"/signIn"}
              component={NavLink} size="small">
              로그인
                </Button>

            <RouterLink to="/signUp">
              <Tooltip title="회원가입" aria-label="회원가입">
                <PersonAddIcon color="action"></PersonAddIcon>
              </Tooltip>
            </RouterLink>

          </>}

          {mode != "guest" && <>

            <Tooltip title="로그아웃" aria-label="로그아웃">
              <ExitToAppIcon color="action" onClick={signOut}></ExitToAppIcon>
              {/* <Button onClick={signOut}>로그아웃</Button> */}
            </Tooltip>

            <RouterLink to="/myPage">
              <Tooltip title="마이페이지" aria-label="마이페이지">
                <Person color="action"></Person>
              </Tooltip>
            </RouterLink>

          </>
          }

          <RouterLink to="/cart">
            <Tooltip title="장바구니" aria-label="장바구니">
              <ShoppingCart color="action"></ShoppingCart>
            </Tooltip>
          </RouterLink>

          {mode === "manager" && <>
            <Button
              to={"/admin"}
              component={NavLink} size="small">
              관리자페이지</Button>
          </>
          }
        </>
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};