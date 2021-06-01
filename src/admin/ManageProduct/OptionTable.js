import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Switch, TextField, Box, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'


const OptionTable = ({ title, sub, handleOptions }) => {
    const [rows, setRows] = useState([])
    // const [option, setOption] = useState({})
    let option = {};

    useEffect(() => {
        const arr = sub.split(",")
        setRows(o => [...arr])
        option= {[title] : {}};
        // setOption({[title] : {}});
        
        arr.forEach(e => {
            option[title][e] = {"additionalPrice": 0, "stock": 99, "on": true }
        });
    }, [])

    const addOption = () => {
        //여기있는 값 다들고가서 value에 넣는 함수
        //useForm 에 handleOptions로 만들기

        handleOptions(option)
    }

    const handleChange = (e) => {
        console.log(option)
        const idT = e.currentTarget.id;
        const nameT = e.currentTarget.name;
        const valueT = e.currentTarget.value;
        console.log(e.currentTarget.value);
        console.log(e.currentTarget.id);
        console.log(e.currentTarget.name);
        // console.log(option)
        option[title][idT][nameT] = valueT;
    }

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
                                <TableCell align="right"><TextField id={row} name="additionalPrice" defaultValue={0}
                                    variant="outlined" size="small" fullWidth onChange={handleChange} /></TableCell>
                                <TableCell align="right"><TextField id={row} name="stock" defaultValue={99}
                                    variant="outlined" size="small" fullWidth onChange={handleChange} /></TableCell>
                                <TableCell align="right"><Switch
                                    // checked={state.checkedA}
                                    onChange={handleChange}
                                    defaultChecked={true}
                                    name="on"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="outlined" onClick={addOption}>추가</Button>
            <Box m={3} />
        </>
    )
}

export default OptionTable
