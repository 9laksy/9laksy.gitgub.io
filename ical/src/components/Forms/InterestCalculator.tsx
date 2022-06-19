import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Button, Stack, TextField, Typography } from "@mui/material";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Calculate, Clear, Delete, Save } from "@mui/icons-material";
import { ButtonStyle } from "../Styles/commons";
import { calculateInterest, getDays, getFromDate } from "../Utils/Functions";



const ICal = styled.div`
`;


interface InterestCalculatorProps {}
interface FormData {
    [key: string]: any
}

const InterestCalculator = (props: InterestCalculatorProps): JSX.Element => {

    const formData = {
        amount: '',
        interestRate: '',
        days: '',
        fromdate: getFromDate(),
        todate: new Date(),
        interest: '',
        total: ''
    }

    const [state, setState] = useState<FormData>(formData);

    const handleChange = (evt: any) => {
        //console.log(evt);
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const handleFromDateChange = (date: Date | null) => {
        setState({
            ...state,
            fromdate: date
        });
    }

    const handleToDateChange = (date: Date | null) => {
        setState({
            ...state,
            todate: date
        });
    }

    const handleDays = () => {
        let days = getDays(state.fromdate, state.todate);
        setState({
            ...state,
            days: days
        });
    }

    const handleCalculate = () => {
        let res = calculateInterest(state);
        setState({
            ...state,
            interest: res.interest,
            total: res.amount
        })
    }

    const handleClear = () => {
        setState(formData);
    }

    useEffect(handleDays, []);

    return (
        <ICal>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={2}>
                    <TextField id="outlined-basic"
                        name="amount"
                        label="Amount"
                        type="number"
                        inputProps={{
                            step: "0.01"
                        }}
                        value={state.amount}
                        onChange={handleChange}
                        variant="outlined" />


                    <TextField id="outlined-basic"
                        name="interestRate"
                        label="Interest Rate"
                        type="number"
                        inputProps={{
                            step: "0.01"
                        }}
                        value={state.interestRate}
                        onChange={handleChange}
                        variant="outlined" />

                    <TextField id="outlined-basic"
                        name="days"
                        label="Days"
                        type="number"
                        inputProps={{
                            step: "1"
                        }}
                        value={state.days}
                        onChange={handleChange}
                        variant="outlined" />


                    <MobileDatePicker
                        label="Days from"
                        inputFormat="dd/MM/yyyy"
                        value={state.fromdate}
                        onChange={handleFromDateChange}
                        onAccept={handleDays}
                        renderInput={(params) => <TextField {...params} name="fromdate"/>}
                    />

                    <MobileDatePicker
                        label="Days to"
                        inputFormat="dd/MM/yyyy"
                        value={state.todate}
                        onChange={handleToDateChange}
                        onAccept={handleDays}
                        renderInput={(params) => <TextField {...params} name="todate"/>}
                    />

                    <Typography variant="h6">
                        Interest: {state.interest}
                    </Typography>
                    <Typography variant="h6">
                        Total: {state.total}
                    </Typography>

                    <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
                        <Button variant="contained" 
                        style={ButtonStyle} color="success" 
                        onClick={handleCalculate}
                        startIcon={<Calculate />}>Calculate</Button>
                        <Button onClick={handleClear} variant="contained" style={ButtonStyle} startIcon={<Clear />}>Clear</Button>
                    </Stack>
                </Stack>
            </LocalizationProvider>
        </ICal>
    )
}


export default InterestCalculator;