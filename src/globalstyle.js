import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        word-break: keep-all;
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: -.8;
    }

    a{
        text-decoration: none;
        color: white;
    }

`;
