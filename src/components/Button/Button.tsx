import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
`;

export type BUTTON_THEME = {
    primary: string;
    secondary: string;
    tertiary: string;
}

export type BUTTON_VARIANT = 
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";


export const Button = ({text, theme, variant, as}: {
    text: string;
    theme: string;
    variant?: string;
    as?: any;
}) => {
    return (
        <StyledButton theme={theme}>
            {text}
        </StyledButton>
    )
}

export default Button;