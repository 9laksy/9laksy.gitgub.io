import React from "react";
import styled from "styled-components";


const PCDiv = styled.div`
  display: block;
  max-width: 600px;
  margin: 0 auto;
`


interface PCProps {
    children: JSX.Element | JSX.Element[]
}


const PanelContainer = (props: PCProps): JSX.Element => {
    return (
        <PCDiv>
            {props.children}
        </PCDiv>
    )
}

export default PanelContainer;