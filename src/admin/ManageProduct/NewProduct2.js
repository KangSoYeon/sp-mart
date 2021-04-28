import React, { useState } from 'react'
import { Button, TextField, Input, Grid, FormControlLabel, Switch, FormControl, InputLabel, Select, InputAdornment } from '@material-ui/core'
import Resizer from "react-image-file-resizer";

const NewProduct2 = () => {
    const [sizedImg, setSizedImg] = useState("/img/default_img.png")


    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                500,
                500,
                "JPEG",
                100,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64"
            );
        });

    const resizeImg = async (e) => {
        e.preventDefault();

        let file = e.target.files[0]
        console.log(file)

        const image = await resizeFile(file);
        setSizedImg(image)

    }
    return (
        <>
            새상품 추가
            <form noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="name" label="상품명" variant="outlined" required fullWidth />
                        <TextField id="size" label="사이즈" variant="outlined" required fullWidth />
                        <TextField id="originalPrice" label="정가" variant="outlined" type="number"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                            }} required fullWidth />
                        <TextField id="salePrice" label="판매가" type="number" variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                            }} required fullWidth />

                        <TextField
                            id="category"
                            select
                            label="카테고리"
                            // value={currency}
                            // onChange={handleChange}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your currency"
                        >
                            {/* {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))} */}
                        </TextField>
                        <Input type="file" name="file" id="img" onChange={(e) => { resizeImg(e) }}></Input>
                        <TextField
                            id="info"
                            label="정보"
                            multiline
                            rows={10}
                            placeholder="상품 정보를 입력하세요."
                            fullWidth
                            variant="outlined"

                        />
                    </Grid>
                </Grid>
                <Button type="submit">등록</Button>
            </form>

        </>
    )
}

export default NewProduct2
