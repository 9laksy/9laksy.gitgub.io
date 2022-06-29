import React from "react";
import styled from "styled-components";

//Normal styles
export const ButtonStyle = {
    width: "45%"
}

export const TextColor = {
    color: "rgb(25, 118, 210)"
}






//Styled Component
export const TotalHead = styled.div`
    min-width: 90px;
`;

export const TotalData = styled.div`
    color: rgb(255, 100, 0);
    &::before {
        content: "\20B9";
        margin-right: 4px;
    }
`;
