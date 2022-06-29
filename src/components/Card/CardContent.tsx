import React from "react";
import styled from "styled-components";

const ContentStyle = styled.div`
    padding: 14px 10px;
`;

interface ContentProps {
    children: JSX.Element | JSX.Element[]
}

const CardContent = (props: ContentProps): JSX.Element => {
    return (
        <ContentStyle aria-label="card-content">
            {props.children}
        </ContentStyle>
    )
}

export default CardContent;