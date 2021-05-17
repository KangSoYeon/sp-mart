import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Switch, TextField, Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const OptionTable = ({ title, sub }) => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        const arr = sub.split(",")
        setRows(o => [...arr])
    }, [])
    return (
        <>

            <TableContainer>
                <Table aria-label={title} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>항목 </TableCell>
                            <TableCell align="right">추가금액</TableCell>
                            <TableCell align="right">재고수량</TableCell>
                            <TableCell align="right">사용여부</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row}
                                </TableCell>
                                <TableCell align="right"><TextField id="title" label="옵션" variant="outlined" size="small" fullWidth /></TableCell>
                                <TableCell align="right"><TextField id="title" label="옵션" variant="outlined" size="small" fullWidth /></TableCell>
                                <TableCell align="right"><Switch
                                    // checked={state.checkedA}
                                    // onChange={handleChange}
                                    name="checkedA"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box m={3} />
        </>
    )
}

export default OptionTable
