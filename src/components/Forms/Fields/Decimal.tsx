import { TextField } from "@mui/material";
import React, { useCallback } from "react";
import styled from "styled-components";
import { textField, textFieldLabel } from "../../../Styles/commons";
import { convertToSlug } from "../../../Utils/Functions";

const MyText = styled(TextField)`
  & label.Mui-focused {
    color: #ff0065;
    margin-top: -3px !important;
    width: 50%;
  }
  
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #ff0065;
    }
  }
`;

interface DecimalProps {
    label: String,
    stateField: Number | String,
    stateFnc: React.Dispatch<React.SetStateAction<String | Number>>
}

const Decimal = ({label, stateField, stateFnc}: DecimalProps): JSX.Element => {
    
    const handleInputChange = useCallback((event: { target: { value: any; }; }) => {
        stateFnc(event.target.value)
      }, [stateFnc])

    return (
        <MyText 
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