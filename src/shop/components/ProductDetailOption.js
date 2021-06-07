import React, { useState } from 'react'
import { FormControl, Select } from '@material-ui/core';

function SubOption({ subOption }) {

    const [titleArray, setTitleArray] = useState(Object.keys(subOption))

    return (
        <>
            {titleArray.map(sub => (
                subOption[sub]["on"] && <option>{sub}   +{Number(subOption[sub]["additionalPrice"])}원</option>
            ))}
        </>
    )
}

function ProductDetailOption({ option }) {

    const [title, setTitle] = useState(Object.keys(option)[0])

    return (
        <div>
            {title}
            <FormControl variant="outlined" fullWidth>
                <Select
                    native
                    // value={category}
                    defaultValue=""
                // onClick={(e) => setCategory(e.target.value)}
                // label="Category"
                // onChange={handleChange}
                >
                    <SubOption subOption={option[title]}></SubOption>
                </Select>
            </FormControl>

        </div>
    )
}

export default ProductDetailOption
