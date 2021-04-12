import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import app from '../../base'
import ProductDetail from '../../shop/pages/ProductDetail'
const NewProduct = () => {

    const [preview, setPreview] = useState(false)
    const [imgRef, setImgRef] = useState("")

    const uploadImg = async (e) => {

        const serverTime = new Date();
        const imgTitle = String(serverTime.getTime());
        e.preventDefault()
        const storageRef = app.storage().ref();
        const tempImageRef = storageRef.child(`products/${imgTitle}.jpg`);
        let file = e.target.files[0]

        await tempImageRef.put(file);
        const httpsReference = await tempImageRef.getDownloadURL();

        setImgRef(httpsReference);
        setPreview(true);

        await app.firestore().collection('products').doc(imgTitle).set({
            img: httpsReference
        }, {merge: true})

    }

    return (
        <div>
            새상품 추가
            {/* <Button onClick={uploadImg}>상품 추가</Button> */}
            <input type="file" name="file" id="file-element" multiple onChange={(e) => { uploadImg(e) }}></input>
            {preview && <ProductDetail code="ddd" name="상품1" img={imgRef}></ProductDetail>}
        </div>
    )
}

export default NewProduct
