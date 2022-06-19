import React from "react";
import { CardContent } from '@mui/material';

interface PanelContentProps {
    children: JSX.Element | JSX.Element[]
}


const PanelContent = (props: PanelContentProps): JSX.Element => {
    return (
        <CardContent>
            {props.children}
        </CardContent>
    )
}

export default PanelContent;