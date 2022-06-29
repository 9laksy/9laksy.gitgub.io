import React, { useCallback } from "react";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { dateField, dateFieldLabel } from "../../../Styles/commons";
import { TextField } from "@mui/material";
import { convertToSlug } from "../../../Utils/Functions";

interface DateProps {
    label: String,
    stateField: Date | null,
    stateFnc: React.Dispatch<React.SetStateAction<Date | null>>
}


const Date = ({label, stateField, stateFnc}: DateProps): JSX.Element => {
    const handleInputChange = useCallback((date: Date | null) => {
        stateFnc(date)
      }, [stateFnc])

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
            label={label}
            inputFormat="dd-MM-yyyy"
            value={stateField}
            onChange={handleInputChange}
            showToolbar={false}
            closeOnSelect={true}
            renderInput={(params) => <TextField className="yd-picker" inputProps={dateField()}
                InputLabelProps={dateFieldLabel()} {...params}
                id={convertToSlug(label)} name={convertToSlug(label)} />}
        />
        </LocalizationProvider>
    )
}

export default Date;