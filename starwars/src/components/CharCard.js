import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
width: 80%;
font-size: 20px;
color: black;
text-align: center;
margin-right: 5px;
flex-direction: row;
margin: auto;
background: lightgrey;
border-radius: 20px;
box-shadow: 10px 10px 5px grey;
`

const Title = styled.h1`
font-size: 35px;
font-weight: bold;
justify-content: space-evenly;
text-decoration: underline;
`


const CharCard = props => {
    return (
        <CardStyle>
            <Title>{props.name}</Title>
            <p>Birth Year: {props.birth_year}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Height: {props.height}cm</p>
            <p>Mass: {props.mass} kilograms</p>
            <p>Gender: {props.gender === "n/a" 
                    ? "Robot"
                    : props.gender }</p>
        </CardStyle>
    );
};

export default CharCard;