import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./style.css";

export default function Skills() {
    const [data, setData] = useState();
    useEffect(() => {
        getall();
    }, []);
    const getall = () => {
        axios.get('http://localhost:1337/api/skills?populate=deep')
            .then(res => {
                setData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <section id='skills'>
            <hr />
            <div className='skill-title'>
                <b><i><u>Skills</u></i></b>
            </div>
            <div className='skills-container'>
                {data && data.map((elt) => {
                    return (
                        <div key={elt.id}>
                            <img src={`http://localhost:1337${elt.attributes.skill_logo.image.data.attributes.url}`} alt={`${elt.attributes.skill_logo.alt}`}></img>
                        </div>
                    )
                })}
            </div>
        </section >
    );
}
