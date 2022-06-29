import React from "react";
import styled from "styled-components";


const CardContainer = styled.div`
    display: block;
    max-width: 600px;
    margin: 0 auto;
`;


const CardStyle = styled.div`
    border: 1px solid #e2e2e2;
    border-radius: 6px;
    box-shadow: 1px 2px 3px #eeeeee;
`;


interface CardProps {
    children: JSX.Element | JSX.Element[]
}

const Card = (props: CardProps): JSX.Element => {
    return (
        <CardContainer>
            <CardStyle aria-label="card">
                {props.children}
            </CardStyle>
        </CardContainer>
    )
}

export default Card;