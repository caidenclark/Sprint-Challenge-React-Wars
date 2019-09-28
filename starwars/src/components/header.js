import React from 'react';
import styled from 'styled-components';

const HeaderText = styled.h2`
    font-size: 40px;
    color: white;
    text-shadow: 2px 2px black;
    font-weight: bold;
`


export default function Header () {
    return (
        <HeaderText>The Greatest Star Wars Characters Ever</HeaderText>
    )
}