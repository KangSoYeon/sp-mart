import React, { useState, useEffect } from 'react'
import { Button, TextField, Input, Grid, FormControlLabel, Switch, FormControl, InputLabel, Select, InputAdornment } from '@material-ui/core'
import Resizer from "react-image-file-resizer";
import useForm from './useForm';
import validate from './validate';
import app from "../../base"

const NewProduct2 = () => {
    const [sizedImg, setSizedImg] = useState("/img/default_img.png")

    Date.prototype.yyyymmddhhmmss = function () {
        return this.yyyymmdd() + this.hhmmss();
    };

    const fetchingCategory = async () => {
        //카테고리 넣기 
        await app.firestore().collection("categories").get();
    }

    useEffect(() => {
        fetchingCategory();
    }, [])

    const { values, errors, submitting, handleChange, handleSubmit } = useForm({
        initialValues: { name: "", size: "", originalPrice: 0, salePrice: 0, category: "", img: "", info: "", show: true, stock: true, top: true},
        onSubmit: async (values) => {
            // alert(JSON.stringify(values, null, 2))
            //서버에 저장
            //현재시간 가져오기
            const time = new Date();
            const docID = time.yyyymmddhhmmss();
            console.log(docID)
            await app.firestore().collection("products").doc(docID).set(values);
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

    return (
        <>
            새상품 추가
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="name" label="상품명" variant="outlined" onChange={handleChange} required fullWidth />
                        {errors.name && <span className="errorMessage">{errors.name}</span>}
                        <TextField id="size" label="사이즈" variant="outlined" onChange={handleChange} required fullWidth />
                        {errors.name && <span className="errorMessage">{errors.name}</span>}

                        <TextField id="originalPrice" label="정가" variant="outlined" type="number"
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                            }} required fullWidth />
                        {errors.originalPrice && <span className="errorMessage">{errors.originalPrice}</span>}

                        <TextField id="salePrice" label="판매가" type="number" variant="outlined"
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                            }} required fullWidth />
                        {errors.salePrice && <span className="errorMessage">{errors.salePrice}</span>}

                        <TextField
                            id="category"
                            select
                            label="카테고리"
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
                        {errors.category && <span className="errorMessage">{errors.category}</span>}

                        <Input type="file" id="img" name="file" id="img" onChange={handleChange}></Input>
                        {errors.img && <span className="errorMessage">{errors.img}</span>}

                        {/* onChange={(e) => { resizeImg(e) }} */}
                        <TextField
                            id="info"
                            label="정보"
                            multiline
                            onChange={handleChange}
                            rows={10}
                            placeholder="상품 정보를 입력하세요."
                            fullWidth
                            variant="outlined"

                        />
                        {errors.info && <span className="errorMessage">{errors.info}</span>}

                        <FormControlLabel
                            control={
                                <Switch
                                    // checked={state.checkedB}
                                    onChange={handleChange}
                                    name="show"
                                    color="primary"
                                />
                            }
                            label="노출 여부"
                        />


                        <FormControlLabel
                            control={
                                <Switch
                                    // checked={state.checkedB}
                                    onChange={handleChange}
                                    name="stock"
                                    color="primary"
                                />
                            }
                            label="재고 여부"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    // checked={state.checkedB}
                                    onChange={handleChange}
                                    name="top"
                                    color="primary"
                                />
                            }
                            label="메인 노출 여부"
                        />
                        <TextField id="orderLimit" label="1회 최대 주문수량" variant="outlined"></TextField>
                        입력하지 않으면 자동값 99게로 입력됩니다.
                    </Grid>
                </Grid>
                <Button type="submit" disabled={submitting}>등록</Button>
            </form>

        </>
    )
}

export default NewProduct2
