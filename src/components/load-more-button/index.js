import React from "react";
import { Button, DivBtn } from "../../styles/home-style";

const ButtonLoadMore = ({ setOffset, offset }) => {
    return (
        <DivBtn>
            <Button onClick={() => setOffset(offset + 10)}>Load more</Button>
        </DivBtn>
    )
}

export { ButtonLoadMore }