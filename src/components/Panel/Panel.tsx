import React from "react";
import Card from '@mui/material/Card';

interface PanelProps {
    children: JSX.Element | JSX.Element[]
}

const Panel = (props: PanelProps): JSX.Element => {
    return (
        <Card variant="outlined">{props.children}</Card>
    )
}

export default Panel;