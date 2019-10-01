import React, { useEffect, useState } from "react";
import axios from "axios";
import CharCard from "./CharCard";

export default function CharGrid() {
    const [person, setPerson] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                setPerson(response.data.results);
            })
            .catch(error => {
                console.log("Sorry, no characters!", error);
            })
    }, []);

    return (
        <div>
            {person.map((person) => {
                return <CharCard 
                name={person.name} 
                birth_year={person.birth_year}
                eye_color={person.eye_color}
                hair_color={person.hair_color}
                height={person.height}
                gender={person.gender}
                mass={person.mass} 
                />
            })}
        </div>
    )
}