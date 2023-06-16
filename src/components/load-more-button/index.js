import React from "react";
import styled from "styled-components";

const ButtonLoadMore = ({ setOffset, offset }) => {
    return (
        <DivBtn>
            <Button onClick={() => setOffset(offset + 10)}>Load more</Button>
        </DivBtn>
    )
}

const DivBtn = styled.div`
    text-align: center;
`

const Button = styled.button`
    padding: 12px 30px;
    margin: 35px 0;
    font-weigth: bold;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    
    &:hover {
        scale: 1.08;
    }
`

export { ButtonLoadMore }