import React from "react";
import styled from "styled-components";


const PwDiv = styled.div`
    padding: 16px 10px 10px 10px;
`;


interface PageWrapperProps {
    children: JSX.Element | JSX.Element[]
}



const PageWrapper = (props: PageWrapperProps): JSX.Element => {
    return (
        <PwDiv>
            {props.children}
        </PwDiv>
    )
}

export default PageWrapper;