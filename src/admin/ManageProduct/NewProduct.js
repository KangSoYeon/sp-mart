import React, { useEffect, useState } from 'react'
import { Button, TextField, Input, Grid, FormControlLabel, Switch, FormControl, InputLabel, Select, InputAdornment } from '@material-ui/core'
import app from '../../base'
import ProductDetail from '../../shop/pages/ProductDetail'
import Resizer from "react-image-file-resizer";
import { makeStyles } from '@material-ui/core/styles';

const NewProduct = () => {

    const [sizedImg, setSizedImg] = useState("/img/default_img.png")
    const [show, setShow] = useState(true)
    const [stock, setStock] = useState(true)
    const [category, setCategory] = useState("")
    const [product, setProduct] = useState({})

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

    const handleSubmit = async () => {


        const serverTime = new Date();
        const pId = String(serverTime.getTime());

        const storageRef = app.storage().ref();
        const tempImageRef = storageRef.child(`products/${pId}.jpg`);

        //resize해서 올리기
        await tempImageRef.putString(sizedImg, 'data_url');

        //확인하기
        const httpsReference = await tempImageRef.getDownloadURL()
        // const i = e.target;

        const saveData = {
            name: product.name,
            size: product.size,
            originalPrice: product.originalPrice,
            salePrice: product.salePrice,
            info: product.info,
            img: httpsReference,
            category: product.category,
            show: product.show,
            stock: product.stock
        }
        localStorage.clear();
        await app.firestore().collection('products').doc(pId).set(saveData, { merge: true })

        alert("등록이 완료되었습니다.")
    }

    const handleChange = (e) => {
        // const inputId = e.target.id
        const value = e.target.value
        localStorage.setItem(e.target.id, value);
        setProduct({ ...product, inputId: value });
        console.log({ product })
    }

    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem("newProduct.name")))
    }, [])


    return (
        <div>
            새상품 추가
            <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                    <TextField id="name" label="상품명" variant="outlined" onChange={(e) => localStorage.setItem("newProduct.name", e.target.value)} value={localStorage.getItem("newProduct.name")} required fullWidth />
                    <TextField id="size" label="사이즈" variant="outlined" onChange={(e) => localStorage.setItem("newProduct.size", e.target.value)} value={localStorage.getItem("newProduct.size")} required fullWidth />
                    <TextField id="originalPrice" label="정가" variant="outlined" type="number" onChange={(e) => localStorage.setItem("newProduct.originalPrice", e.target.value)} value={localStorage.getItem("newProduct.originalPrice")}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                        }} required fullWidth />
                    <TextField id="salePrice" label="판매가" variant="outlined" type="number" onChange={(e) => localStorage.setItem("newProduct.salePrice", e.target.value)} value={localStorage.getItem("newProduct.salePrice")}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                        }} required fullWidth />

                    <FormControl variant="outlined">
                        <Grid container>
                            <Grid item xs={6} sm={6}>
                                <Select
                                    native
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    label="Category"
                                    onChange={handleChange}

                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </Grid>
                        </Grid>
                    </FormControl>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={sizedImg} width="200"></img>
                    <Input type="file" name="file" id="img" onChange={(e) => { resizeImg(e) }}></Input>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <TextField
                        id="info"
                        label="정보"
                        multiline
                        rows={10}
                        placeholder="상품 정보를 입력하세요."
                        fullWidth
                    />
                </Grid>

                <Grid container justify="cencter" alignItems="center">
                    <FormControlLabel
                        control={<Switch checked={show} onChange={() => setShow(!show)} name="show" />}
                        label="노출 여부"
                    />
                    <FormControlLabel
                        control={<Switch checked={stock} onChange={() => setStock(!stock)} name="stock" />}
                        label="재고 여부"
                    />
                    <TextField id="orderLimit" label="1회 최대 주문수량" variant="outlined" />


                </Grid>
            </Grid>
            <Button onClick={handleSubmit} fullWidth>등록</Button>
        </div>
    )
}

export default NewProduct
