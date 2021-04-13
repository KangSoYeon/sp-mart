import React, { useEffect, useState } from 'react'
import { Button, TextField, Input } from '@material-ui/core'
import app from '../../base'
import ProductDetail from '../../shop/pages/ProductDetail'
import Resizer from "react-image-file-resizer";
import { makeStyles } from '@material-ui/core/styles';

const NewProduct = () => {

    const [preview, setPreview] = useState(false)
    const [imgRef, setImgRef] = useState("")
    const [sizedImg, setSizedImg] = useState("/img/default_img.png")

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const classes = useStyles();

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                300,
                300,
                "JPEG",
                100,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64"
            );
        });

    const uploadImg = async (e) => {
        e.preventDefault();
        const serverTime = new Date();
        const imgTitle = String(serverTime.getTime());
       
        const storageRef = app.storage().ref();
        const tempImageRef = storageRef.child(`products/${imgTitle}.jpg`);
        let file = e.target.files[0]

        try {
            //resize해서 올리기
            const image = await resizeFile(file);
            setSizedImg(image)
            await tempImageRef.putString(image, 'data_url');

            //확인하기
            const httpsReference = await tempImageRef.getDownloadURL();

            setImgRef(httpsReference);
            setPreview(true);

            await app.firestore().collection('products').doc(imgTitle).set({
                img: httpsReference
            }, { merge: true })
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const i = e.target;
        const name = i.name.value;
        const size = i.size.value;
        const originalPrice = i.originalPrice.value;
        const salePrice = i.salePrice.value;
        const info = i.info.value;
        


    }

    return (
        <div>
            새상품 추가
            <form className={classes.root} onSubmit={handleSubmit} noValidate >
                <TextField id="name" label="상품명" />
                <TextField id="size" label="사이즈" />
                <TextField id="originalPrice" label="정가" />
                <TextField id="salePrice" label="판매가" />
                <img src={sizedImg} width="500"></img>
                <Input type="file" name="file" id="img" onChange={(e) => { uploadImg(e) }}></Input>
                <TextField
                    id="info"
                    label="정보"
                    multiline
                    rows={10}
                    placeholder="상품 정보를 입력하세요."
                />
                <Button type="submit">등록</Button>
            </form>
         
            
        </div>
    )
}

export default NewProduct
