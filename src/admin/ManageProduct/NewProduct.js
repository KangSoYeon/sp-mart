import React, { useEffect } from 'react'
import { Button } from '@material-ui/core'
import app from '../../base'

const NewProduct = () => {

    const uploadImg = (e) => {
        e.preventDefault()
        const storageRef = app.storage().ref();
        const tempImageRef = storageRef.child('temp.jpg')
        let file = e.target.files[0]

        tempImageRef.put(file).then(() => {
            console.log("ddd")
        })
        
    }

    return (
        <div>
            새상품 추가 
            {/* <Button onClick={uploadImg}>상품 추가</Button> */}
            <input type="file" name="file" id="file-element" multiple onChange={(e) => {uploadImg(e)}}></input>

        </div>
    )
}

export default NewProduct
