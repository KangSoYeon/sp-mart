import React, { useState } from 'react'
import { Button, TextField, Input, Grid, FormControlLabel, Switch, FormControl, InputLabel, Select, InputAdornment } from '@material-ui/core'
import Resizer from "react-image-file-resizer";
import useForm from './useForm';
import validate from './validate';

const NewProduct2 = () => {
    const [sizedImg, setSizedImg] = useState("/img/default_img.png")
    const { values, errors, submitting, handleChange, handleSubmit } = useForm({
        initialValues: { "name": "", "size": "", "originalPrice": 0, "salePrice":0, "category": "", "img": "", "info": "" },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
        validate,
    })

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
    // https://www.daleseo.com/react-forms-with-hooks/
    // 여기 에러 고치자... 언제./.? 몰라 
    return (
        <>
            새상품 추가
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="name" label="상품명" variant="outlined" onChange={handleChange} helperText={errors.name} required fullWidth />
                        
                        <TextField id="size" label="사이즈" variant="outlined" onChange={handleChange} required fullWidth />
                        
                        <TextField id="originalPrice" label="정가" variant="outlined" value={values.originalPrice} type="number"
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                            }} required fullWidth />
                        <TextField id="salePrice" label="판매가" value={values.salePrice} type="number" variant="outlined"
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                            }} required fullWidth />

                        <TextField
                            id="category"
                            select
                            label="카테고리"
                            value={values.category}
                            onChange={handleChange}
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
                        <Input type="file" id="img" name="file" id="img" value={values.img} onChange={handleChange}></Input>
                        {/* onChange={(e) => { resizeImg(e) }} */}
                        <TextField
                            id="info"
                            label="정보"
                            multiline
                            onChange={handleChange}
                            rows={10}
                            value={values.info}
                            placeholder="상품 정보를 입력하세요."
                            fullWidth
                            variant="outlined"

                        />
                    </Grid>
                </Grid>
                <Button type="submit" disabled={submitting}>등록</Button>
            </form>

        </>
    )
}

export default NewProduct2
