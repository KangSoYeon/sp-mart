import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Switch, TextField, Box, Button, Typography, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useEffect, useState, useRef } from 'react'


const OptionTable = ({ title, sub, handleOptions, onRemoveItem }) => {
    const [rows, setRows] = useState([])
    const [saved, setSaved] = useState(false);
    let option = useRef({});

    useEffect(() => {
        const arr = sub.split(",")
        setRows(o => [...arr])
        option.current = { [title]: {} };

        arr.forEach(e => {
            option.current[title][e] = { "additionalPrice": 0, "stock": 99, "on": true }
        });
    }, [])

    const handleChange = (e) => {
        const c = e.currentTarget;
        console.log(option.current)
        if (c.name === "on") {
            option.current[title][c.id][c.name] = c.checked;
        } else {
            option.current[title][c.id][c.name] = Number(c.value);
        }
    }

    const saveOption = (input) => {
        //ui적인 변화
        //table사라지고
        setSaved(true);
        handleOptions(input)
    }

    const onRemoveItemList = (n) => {
        setRows(rows.filter(r => r !== n))
    }
    if (saved) {
        return (
            <>
            <p>{title}</p>
            {/* 아래에 저장 내용 어떻게 보여줄건지 결정하자,, */}
            {/* {option.current[title].map(o => (
                o.additionalPrice
            ))} */}
            </>
        )
    } else {
        return (
            <>
                <TableContainer>
                    <Table aria-label={title} size="small">
                        <TableHead>
                            <Typography>{title}</Typography>
                            <TableRow>
                                <TableCell>항목 </TableCell>
                                <TableCell align="right">추가금액</TableCell>
                                <TableCell align="right">재고수량</TableCell>
                                <TableCell align="right">사용여부</TableCell>
                                <TableCell align="right">삭제하기</TableCell>
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
                                        onChange={handleChange}
                                        defaultChecked={true} id={row} name="on"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    /></TableCell>
                                    <TableCell align="right" onClick={() => onRemoveItemList(row)}><IconButton aria-label="delete">
                                        <DeleteIcon fontSize="small" />
                                    </IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="outlined" onClick={() => saveOption(option.current)}>추가</Button>
                <Button variant="outlined" onClick={() => onRemoveItem(title)}>삭제</Button>
                <Box m={3} />
            </>
        )
    }

}

export default OptionTable
