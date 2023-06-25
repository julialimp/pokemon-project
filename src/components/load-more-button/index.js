import React from "react";
import { Button, DivBtn } from "../../styles/home-style";

const ButtonLoadMore = ({ setRenderAmount, renderAmount }) => {
    return (
        <DivBtn>
            <Button onClick={() => setRenderAmount(renderAmount + 10)}>Load more</Button>
        </DivBtn>
    )
}

export { ButtonLoadMore }