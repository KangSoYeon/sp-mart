import React from 'react'
import OptionTable from './OptionTable';

const OptionTableList = ({ addedOption, handleOptions, onRemoveItem }) => {
    return (
        <>
            {addedOption.map(o => (
                <OptionTable title={o.title} sub={o.sub} handleOptions={handleOptions} onRemoveItem={onRemoveItem}></OptionTable>
            ))}
        </>
    )
}

export default OptionTableList
