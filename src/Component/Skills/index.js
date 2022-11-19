import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./style.css";

export default function Skills() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getall();
    }, []);

    const getall = () => {
        axios
          .get("http://localhost:4040/skills")
          .then((res) => {
            setData(res.data.data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    
    return (
      <section id="skills">
        <hr />
        <div className="skill-title">
          <b>
            <i>
              <u>Skills</u>
            </i>
          </b>
        </div>
        <div className="skills-container">

          {isLoading?<>isLoading...</>: data.map((data)=>{
            return (
              <div className="skills_name">
                <h3>{data.name}</h3>
                <img src={`http://localhost:4040/uploads/${data.img}`}></img>
              </div>
            );
          })
          
        }
          
        </div>
      </section>
    );
}
