import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import app from '../../base'
import ProductDetail from '../../shop/pages/ProductDetail'
const NewProduct = () => {

    const [preview, setPreview] = useState(true)

    const uploadImg = (e) => {
        e.preventDefault()
        const storageRef = app.storage().ref();
        const tempImageRef = storageRef.child('temp.jpg')
        let file = e.target.files[0]

        tempImageRef.put(file).then(() => {
            
        })
    }

    return (
        <div>
            새상품 추가 
            {/* <Button onClick={uploadImg}>상품 추가</Button> */}
            <input type="file" name="file" id="file-element" multiple onChange={(e) => {uploadImg(e)}}></input>
            {preview && <ProductDetail code="ddd" name="상품1"></ProductDetail>} 
        </div>
    )
}

export default NewProduct
