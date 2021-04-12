import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import app from '../../base'
import ProductDetail from '../../shop/pages/ProductDetail'
import Resizer from "react-image-file-resizer";
const NewProduct = () => {

    const [preview, setPreview] = useState(false)
    const [imgRef, setImgRef] = useState("")
    const [sizedImg, setSizedImg] = useState("")


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

        const serverTime = new Date();
        const imgTitle = String(serverTime.getTime());
        e.preventDefault()
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

    return (
        <div>
            새상품 추가
            {/* <Button onClick={uploadImg}>상품 추가</Button> */}
            <input type="file" name="file" id="file-element" multiple onChange={(e) => { uploadImg(e) }}></input>
            {preview && <ProductDetail code="ddd" name="상품1" img={sizedImg}></ProductDetail>}
        </div>
    )
}

export default NewProduct
