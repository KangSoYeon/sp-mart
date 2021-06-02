import React, { useState, useEffect } from 'react';
import { Button, TextField, Input, Grid, Typography, Box } from '@material-ui/core';
import app from '../../base';
import OptionTableList from './OptionTableList';

const AddOption = ({ handleOptions }) => {

    const [title, setTitle] = useState("");
    const [sub, setSub] = useState("");
    const [addedOption, setAddedOption] = useState([])

    const onRemoveItem = async (deleteTitle) => {
        console.log(addedOption);
        setAddedOption(addedOption.filter(o => o.title !== deleteTitle))
    }

    const addOption = () => {
        if(title==="" || sub==="") {
        } else {
            setAddedOption(addedOption.concat({"title": title, "sub": sub}));
            console.log(addedOption)
            setTitle("")
            setSub("")
        }
    }
    // 추가 누를때마다 onChange써서 json만들기.

    return (
        <>
            <Grid item xs={12}>
                <Typography>상품선택 옵션</Typography>
                <Typography>* 옵션항목은 콤마(,)로 구분하여 여러개를 입력할 수 있습니다. ex)라지,미디움,스몰</Typography>
            </Grid>
            <Grid item xs={3}>
                <TextField id="title" label="옵션" variant="outlined" size="small" value={title} onChange={(e) => setTitle(e.currentTarget.value)} required fullWidth />
            </Grid>
            <Grid item xs={8}>
                <TextField id="sub" label="옵션 항목" variant="outlined" size="small" value={sub} onChange={(e) => setSub(e.currentTarget.value)} required fullWidth />
            </Grid>
            <Grid item xs={1}>
                <Button variant="outlined" onClick={addOption}>추가</Button>
            </Grid>
            
            <OptionTableList addedOption={addedOption} handleOptions={handleOptions} onRemoveItem={onRemoveItem}/>
        </>
    )
}

export default AddOption
