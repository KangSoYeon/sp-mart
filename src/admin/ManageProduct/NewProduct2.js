import React, { useState, useEffect } from 'react'
import { Button, TextField, Input, Grid, FormControlLabel, Switch, FormControl, InputLabel, Select, InputAdornment } from '@material-ui/core'
import useForm from './useForm';
import validate from './validate';
import AddOption from './AddOption';
import app from "../../base"

const NewProduct2 = () => {

    const [categories, setCategories] = useState([])

    const fetchingCategory = async () => {
        //카테고리 넣기 
        const fetchList = await app.firestore().collection("categories").get();
        let listC = []
        fetchList.forEach(p => {
            listC.push({ ...p.data(), "id": p.id });
        })
        setCategories(o => [...listC]);
    }

    useEffect(() => {
        fetchingCategory();
    }, [])

    const { values, errors, submitting, handleChange, handleSubmit } = useForm({
        initialValues: {
            name: "", size: [], originalPrice: 0, salePrice: 0, category: [], color: [],
            img: "", info: "", orderLimit: 99, index: 0, show: true, stock: true, top: true
        },
        onSubmit: async (values) => {
            const date = new Date();

            //how to import TimeForm globally.
            // const docID = date.

            const docID = String(date.getTime());
            try {
                
                //이미지 올리기
                const storageRef = app.storage().ref();
                const tempImageRef = storageRef.child(`products/${docID}.jpg`);
                await tempImageRef.putString(values.img, 'data_url');
                const httpsReference = await tempImageRef.getDownloadURL();

                //DB에 저장 
                await app.firestore().collection("products").doc(docID).set({...values, "img": httpsReference});

            } catch (error) {
                alert('상품 등록이 실패했습니다.')
                console.log(error);
            }
            alert("성공적으로 상품이 등록되었습니다.")
            // window.location.replace("/admin/product/newProduct");
        },
        validate,
    })

    // https://www.daleseo.com/react-forms-with-hooks/

    let showedCategories = [<option key={"default"} value={"default"}>{"카테고리를 선택하세요."}</option>]
    categories.map((c) => {
        showedCategories.push(<option key={c.id} value={c.id}>{c.name}</option>)
    })

    return (
        <>
            새상품 추가
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="name" name="name" label="상품명" variant="outlined" 
                            onChange={handleChange} helperText={errors.name} required fullWidth autoComplete />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField id="size" name="size" label="사이즈" variant="outlined"
                            onChange={handleChange} helperText={"옵션간의 구분은 , 로 기입합니다. ex) [대] 21*26cm,[중] 17.5*22cm"} required fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="originalPrice" name="originalPrice" label="정가" variant="outlined" type="number"
                            onChange={handleChange} helperText={errors.originalPrice}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                            }} required fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="salePrice" name="salePrice" label="판매가" type="number" variant="outlined"
                            onChange={handleChange} helperText={errors.salePrice}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                            }} required fullWidth />
                    </Grid>
                    <AddOption></AddOption>
                    <Grid item xs={12} sm={6}>
                        <Input type="file" id="img" name="img" onChange={handleChange}></Input>
                        {errors.img && <span className="errorMessage">{errors.img}</span>}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="category" name="category" label="카테고리"
                            onChange={handleChange} helperText={errors.category}
                            SelectProps={{ native: true, }} select
                        >
                            {showedCategories}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="index" name="index" label="노출 우선 순서" defaultValue={0} variant="outlined"
                            onChange={handleChange} helperText={"입력하지 않으면 자동값 0개로 입력됩니다."} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="color" name="color" label="상품 색상" variant="outlined"
                            onChange={handleChange} helperText={"간의 구분은 , 로 기입합니다. ex) 옐로우,블랙,블루"} fullWidth />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="info" name="info" label="정보"
                            multiline rows={1} fullWidth
                            onChange={handleChange} placeholder="상품 정보를 입력하세요."
                            variant="outlined" helperText={errors.info}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControlLabel
                            control={
                                <Switch
                                    defaultChecked onChange={handleChange}
                                    name="show" color="primary"
                                />
                            } label="노출 여부"
                        />

                        <FormControlLabel
                            control={
                                <Switch
                                    defaultChecked onChange={handleChange}
                                    name="stock" color="primary"
                                />
                            } label="재고 여부"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    defaultChecked onChange={handleChange}
                                    name="top" color="primary"
                                />
                            } label="메인 노출 여부"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="orderLimit" name="orderLimit" label="1회 최대 주문수량"
                            variant="outlined" defaultValue={99} onChange={handleChange}
                            helperText={"입력하지 않으면 자동값 99개로 입력됩니다."}></TextField>
                    </Grid>
                </Grid>
                <Button variant="outlined" type="submit" disabled={submitting}>등록</Button>
            </form>

        </>
    )
}

export default NewProduct2
