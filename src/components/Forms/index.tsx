import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Decimal, Date } from "./Fields";
import { calculateInterest, getDays } from "../../Utils/Functions";
import { ButtonStyle, TotalData, TotalHead } from "../../Styles";
import { Calculate, Clear } from "@mui/icons-material";


const Calculator = ():JSX.Element => {
    const [amount, setAmount] = useState<Number | ''>('');
    const [interest, setInterest] = useState<Number | ''>('');
    const [days, setDays] = useState<Number | ''>('');
    const [fromdate, setFromdate] = useState<Date | null>(null);
    const [todate, setTodate] = useState<Date | null>(null);
    const [int, setInt] = useState<String>("");
    const [total, setTotal] = useState<String>("");

    useEffect(() => {
        let days = getDays(fromdate, todate);
        if(days > 0) setDays(days);
    },[fromdate]);

    useEffect(() => {
        let days = getDays(fromdate, todate);
        if(days > 0) setDays(days);
    },[todate]);

    const handleSubmit = () => {
        console.log(amount, interest, days, fromdate);
        let data = {
            amount: amount,
            interestRate: interest,
            days: days,
            fromdate: fromdate,
            todate: todate,
            interest: '0.00',
            total: '0.00'
        }
        let res = calculateInterest(data);
        setInt(res.interest);
        setTotal(res.amount);
    }

    const handleClear = () => {
        setAmount('');
        setInterest('');
        setDays('');
        setFromdate(null);
        setTodate(null);
        setInt('');
        setTotal('');
    }

    return (
        <Stack spacing={2}>
            <Decimal label={"Amount"} stateField={amount} stateFnc={setAmount}/>
            <Decimal label={"Interest Rate"} stateField={interest} stateFnc={setInterest}/>
            <Decimal label={"No.of Days"} stateField={days} stateFnc={setDays}/>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={0}>
                <Date label={"Date From"} stateField={fromdate} stateFnc={setFromdate}/>
                <Date label={"Date To"} stateField={todate} stateFnc={setTodate}/>
            </Stack>
            
            <div>
            <Typography variant="h6">
                <Stack direction="row" spacing={2}>
                    <TotalHead>Interest:</TotalHead>
                    <TotalData>{int}</TotalData>
                </Stack>
            </Typography>
            <Typography variant="h6">
                <Stack direction="row" spacing={2}>
                    <TotalHead>Total:</TotalHead>
                    <TotalData>{total}</TotalData>
                </Stack>
            </Typography>
            </div>

            <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
                <Button variant="contained"
                    style={ButtonStyle} color="success"
                    onClick={handleSubmit}
                    startIcon={<Calculate />}>Calculate</Button>
                <Button onClick={handleClear} variant="contained" style={ButtonStyle}
                    startIcon={<Clear />} color={"error"}>Clear</Button>
            </Stack>
        </Stack>
    )
}


export default Calculator;