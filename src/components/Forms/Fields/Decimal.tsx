import { TextField } from "@mui/material";
import React, { useCallback } from "react";
import { textField, textFieldLabel } from "../../../Styles/commons";
import { convertToSlug } from "../../../Utils/Functions";


interface DecimalProps {
    label: String,
    stateField: Number | '',
    stateFnc: React.Dispatch<React.SetStateAction<"" | Number>>
}

const Decimal = ({label, stateField, stateFnc}: DecimalProps): JSX.Element => {
    
    const handleInputChange = useCallback((event: { target: { value: any; }; }) => {
        stateFnc(event.target.value)
      }, [stateFnc])

    return (
        <TextField 
        color={"primary"} 
        id={convertToSlug(label)} 
        name={convertToSlug(label)}
        label={label} 
        type="number" 
        inputMode="decimal" 
        inputProps={textField("0.01")} 
        InputLabelProps={textFieldLabel()}
        value={stateField}
        onChange={handleInputChange}
        variant="outlined" />
    )
}

export default Decimal;