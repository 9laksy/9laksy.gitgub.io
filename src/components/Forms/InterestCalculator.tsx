import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Calculate, Clear } from "@mui/icons-material";
import { TotalHead, TotalData, TextColor } from '../../Styles';
import {
    ButtonStyle,
    dateField,
    dateFieldLabel,
    textField,
    textFieldLabel
} from "../../Styles/commons";
import { calculateInterest, formatDate, getDays } from "../../Utils/Functions";
import { defaultFormData } from "./FormData";


const ICal = styled.div`
`;

interface InterestCalculatorProps {
}

interface FormData {
    [key: string]: any
}

const InterestCalculator = (props: InterestCalculatorProps): JSX.Element => {

    const [state, setState] = useState<FormData>(defaultFormData);
    const [open, setOpen] = useState(false);
    const [fromdate, setFromdate] = useState<Date>(new Date());

    const handleChange = (evt: any) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const handleFromDateChange = (date: Date | null) => {
        let days = getDays(state.fromdate, state.todate);
        let formattedDate = formatDate(date);
        setState({
            ...state,
            fromdate: date,
            strFromDate: formattedDate,
            days: days
        });
    }

    const handleToDateChange = (date: Date | null) => {
        let days = getDays(state.fromdate, state.todate);
        setState({
            ...state,
            todate: date,
            days: days
        });
    }

    const handleCalculate = () => {
        let days = getDays(state.fromdate, state.todate);
        let res = calculateInterest(state);
        setState({
            ...state,
            interest: res.interest,
            total: res.amount,
            days: days
        })
    }

    const handleClear = () => {
        setState(defaultFormData);
    }

    const openDatePicker = (evt: any) => {
        let field = evt.target.name;
        let dateField = field.split("-")[1];
        if(dateField === "fromdate") {
            setOpen(true);
        }
    }

    return (
        <ICal>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={2}>
                    <TextField color={"primary"}
                        id="amount"
                        name="amount"
                        label="Amount"
                        type="number"
                        inputMode="decimal"
                        inputProps={textField("0.01")}
                        InputLabelProps={textFieldLabel()}
                        value={state.amount}
                        onChange={handleChange}
                        variant="outlined" />


                    <TextField id="interest-rate"
                        name="interestRate"
                        label="Interest Rate"
                        type="number"
                        inputMode="decimal"
                        inputProps={textField("0.01")}
                        InputLabelProps={textFieldLabel()}
                        value={state.interestRate}
                        onChange={handleChange}
                        variant="outlined" />

                    <TextField id="no-of-days"
                        name="days"
                        label="Days"
                        type="text"
                        disabled={true}
                        inputProps={textField("0.01")}
                        InputLabelProps={textFieldLabel()}
                        value={state.days}
                        variant="outlined" />

                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={0}>
                        <TextField id="date-from"
                            name="field-fromdate"
                            label="Date From"
                            InputLabelProps={textFieldLabel()}
                            type="text"
                            inputProps={dateField()}
                            onClick={openDatePicker}
                            value={state.strFromDate}
                            variant="outlined" />
                    </Stack>

                    <div style={{display: 'none'}}>
                        <MobileDatePicker
                            open={open}
                            onOpen={() => setOpen(true)}
                            onClose={() => setOpen(false)}
                            closeOnSelect={true}
                            label="Date from"
                            inputFormat="dd/MM/yyyy"
                            value={fromdate}
                            onChange={() => setFromdate}
                            renderInput={(params) => <TextField inputProps={dateField()}
                                InputLabelProps={dateFieldLabel()} {...params}
                                id={"from-date"} name="fromdate" />}

                        />

                        <MobileDatePicker
                            label="Date to"
                            inputFormat="dd/MM/yyyy"
                            value={state.todate}
                            onChange={handleToDateChange}
                            showToolbar={true}
                            renderInput={(params) => <TextField inputProps={dateField()}
                                InputLabelProps={dateFieldLabel()} {...params}
                                id={"to-date"} name="todate" />}
                        />
                    </div>
                    <Typography variant="h6">
                        <Stack direction="row" spacing={2}>
                            <TotalHead>Interest:</TotalHead>
                            <TotalData>{state.interest}</TotalData>
                        </Stack>
                    </Typography>
                    <Typography variant="h6">
                        <Stack direction="row" spacing={2}>
                            <TotalHead>Total:</TotalHead>
                            <TotalData>{state.total}</TotalData>
                        </Stack>
                    </Typography>

                    <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
                        <Button variant="contained"
                            style={ButtonStyle} color="success"
                            onClick={handleCalculate}
                            startIcon={<Calculate />}>Calculate</Button>
                        <Button onClick={handleClear} variant="contained" style={ButtonStyle}
                            startIcon={<Clear />} color={"error"}>Clear</Button>
                    </Stack>
                </Stack>
            </LocalizationProvider>
        </ICal>
    )
}


export default InterestCalculator;