import React, { useState } from 'react'
import { Button, TextField, Input, Grid, Typography } from '@material-ui/core'
import app from '../../base'

const AddOption = () => {

    const [options, setOptions] = useState([])

    const addOption = () => {

    }

    return (
        <>
            <Grid item xs={12}>
                <Typography>상품선택 옵션</Typography>
                <Typography>* 옵션항목은 콤마(,)로 구분하여 여러개를 입력할 수 있습니다. ex)라지,미디움,스몰</Typography>
            </Grid>
            <Grid item xs={3}>
                <TextField id="option1" label="옵션" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={8}>
                <TextField id="option1_sub" label="옵션 항목" variant="outlined" size="small"  fullWidth />
            </Grid>
            <Grid item xs={1}>
                <Button variant="outlined" onClick={addOption}>추가</Button>
            </Grid>
            {/* <Grid item xs={12}><Button variant="outlined" size="small" fullWidth>+ 옵션 추가</Button></Grid> */}

        </>
    )
}

export default AddOption
