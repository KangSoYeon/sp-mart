import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button } from "@material-ui/core"
import app from "../../base"

const SignIn = () => {

    const navigate = useNavigate();
    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            console.log(email.value, password.value)
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            navigate('/', {replace:true});
          } catch (error) {
            alert(error);
          }
        },
        []
      );

    return (
        <>
            <form noValidate autoComplete="off" onSubmit={handleLogin}>
                <TextField id="email" type="email" label="Email" variant="outlined" />
                <TextField id="password" label="Password" type="password" variant="outlined" />
                <Button type="submit">제출</Button>
            </form>
        </>
    )
}

export default SignIn
