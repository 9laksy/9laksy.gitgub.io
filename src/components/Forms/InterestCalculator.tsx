import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Button, Stack, TextField, Typography} from "@mui/material";
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {Calculate, Clear} from "@mui/icons-material";
import { TotalHead } from '../../Styles';
import {
    ButtonStyle,
    dateField,
    dateFieldLabel,
    textColor,
    textField,
    textFieldLabel
} from "../../Styles/commons";
import {calculateInterest, getDays} from "../../Utils/Functions";
import {orange} from "@mui/material/colors";


const ICal = styled.div`
`;

interface InterestCalculatorProps {
}

interface FormData {
    [key: string]: any
}

const InterestCalculator = (props: InterestCalculatorProps): JSX.Element => {

    const formData = {
        amount: '',
        interestRate: '',
        days: '',
        fromdate: null,
        todate: null,
        interest: '0.00',
        total: '0.00'
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
        if (days > 0) {
            setState({
                ...state,
                days: days
            });
        }
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
                    <TextField color={"primary"}
                               id="amount"
                               name="amount"
                               label="Amount"
                               type="tel"
                               inputProps={textField("0.01")}
                               InputLabelProps={textFieldLabel()}
                               value={state.amount}
                               onChange={handleChange}
                               variant="outlined"/>


                    <TextField id="interest-rate"
                               name="interestRate"
                               label="Interest Rate"
                               type="tel"
                               inputProps={textField("0.01")}
                               InputLabelProps={textFieldLabel()}
                               value={state.interestRate}
                               onChange={handleChange}
                               variant="outlined"/>

                    <TextField id="no-of-days"
                               name="days"
                               label="Days"
                               type="tel"
                               disabled={true}
                               inputProps={textField("0.01", true)}
                               InputLabelProps={textFieldLabel()}
                               value={state.days}
                               onChange={handleChange}
                               variant="outlined"/>


                    <MobileDatePicker
                        label="Date from"
                        inputFormat="dd/MM/yyyy"
                        value={state.fromdate}
                        onChange={handleFromDateChange}
                        onAccept={handleDays}
                        className={"test"}
                        renderInput={(params) => <TextField inputProps={dateField()}
                                                            InputLabelProps={dateFieldLabel()} {...params}
                                                            id={"from-date"} name="fromdate"/>}

                    />

                    <MobileDatePicker
                        label="Date to"
                        inputFormat="dd/MM/yyyy"
                        value={state.todate}
                        onChange={handleToDateChange}
                        onAccept={handleDays}
                        renderInput={(params) => <TextField inputProps={dateField()}
                                                            InputLabelProps={dateFieldLabel()} {...params}
                                                            id={"to-date"} name="todate"/>}
                    />

                    <Typography variant="h6">
                        <Stack direction="row" spacing={2}>
                            <TotalHead>Interest:</TotalHead><div style={textColor} className={"total-data"}>{state.interest}</div>
                        </Stack>
                    </Typography>
                    <Typography variant="h6">
                        <Stack direction="row" spacing={2}>
                            <TotalHead>Total:</TotalHead> <div style={textColor} className={"total-data"}>{state.total}</div>
                        </Stack>
                    </Typography>

                    <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
                        <Button variant="contained"
                                style={ButtonStyle} color="success"
                                onClick={handleCalculate}
                                startIcon={<Calculate/>}>Calculate</Button>
                        <Button onClick={handleClear} variant="contained" style={ButtonStyle}
                                startIcon={<Clear/>} color={"error"}>Clear</Button>
                    </Stack>
                </Stack>
            </LocalizationProvider>
        </ICal>
    )
}


export default InterestCalculator;