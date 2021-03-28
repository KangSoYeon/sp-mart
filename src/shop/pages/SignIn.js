import React from 'react'
import { TextField, Button } from "@material-ui/core"

const SignIn = () => {
    return (
        <>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="ID" variant="outlined" />
                <TextField id="outlined-basic" label="Password"
                    type="password" variant="outlined" />
                <Button>제출</Button>
            </form>
        </>
    )
}

export default SignIn
