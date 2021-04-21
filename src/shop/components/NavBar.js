import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'

import app from '../../base'

const NavBar = () => {

    const [categories, setCategories] = useState([{}])

    const fetchingData = async () => {
        const categorySnapshot = await app.firestore().collection("categories").get();
        const temp = []
        categorySnapshot.forEach((doc) => {
            const data = doc.data()
            if(data.open) {
                if(data.isOption) {
                    data.options.map((o2) => {
                        if(o2.open) {
                            
                        }
                    })
                }
                temp.push(data)    
            } 
        })  
        console.log(temp)
        setCategories(o => [...temp]);
    }
    useEffect(() => {
        fetchingData()
    }, [])

    const handleClick = (e) => {
        console.log(e.currentTarget.value)  


    }

    let category1 = []
    categories.map((c) => {
        category1.push(<Button value={c.name} onClick={(e) => handleClick(e)}>{c.name}</Button>)
        
    })

    
    return (
        <>
            {category1}
        </>
    )
}

export default NavBar
