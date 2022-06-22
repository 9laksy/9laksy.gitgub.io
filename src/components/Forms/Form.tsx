import React from "react";
import styled from "styled-components";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Calculate, Clear, Delete, Save } from "@mui/icons-material";

const FormStyle = styled.div``
const ButtonStyle = {
    width: '45%'
}


interface FormProps { };
interface FormState {
    data: any;
    fromdate: Date | null;
};


class Form extends React.Component<FormProps, FormState> {
    
    state: FormState = {
        data: {
            amount: ''
        },
        fromdate: new Date()
    };

    handleFormChange = (evt: any) => {
        console.log(evt.target);
    }

    handleFromDate = (date: Date | null) => {
        this.setState({...this.state, fromdate: date})
    }

    render() {
        return (
            <FormStyle>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <TextField id="outlined-basic"
                        name="amount"
                        label="Amount"
                        type="number"
                        inputProps={{
                            step: "0.01"
                        }}
                        value={this.state.data?.amount}
                        onChange={this.handleFormChange}
                        variant="outlined" />
                    <MobileDatePicker
                        label="Date mobile"
                        inputFormat="dd/MM/yyyy"
                        value={this.state.fromdate}
                        onChange={this.handleFromDate}
                        renderInput={(params) => <TextField {...params} name="fromdate"/>}
                    />

                    <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
                        <Button variant="contained" style={ButtonStyle} color="success" startIcon={<Calculate />}>Calculate</Button>
                        <Button variant="contained" style={ButtonStyle} startIcon={<Clear />}>Clear</Button>
                    </Stack>
                    
                </Stack>

            </LocalizationProvider>
            </FormStyle>
        );
    }
}

export default Form;