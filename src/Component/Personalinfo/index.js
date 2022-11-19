import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

export default function Personal() {
    const [data, setData] = useState();
    const [isloading, setIsLoading] = useState(true);
    useEffect(() => {
        getall();
    }, []);
    const getall = () => {
        axios
          .get("http://localhost:4040/personalinfo")
          .then((res) => {
            setData(res.data.data[0]);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
    }

if(isloading){
    return (<div> isLoading </div>)
}else{
    return (
      <section id="about" style={{ paddingTop: "70px" }}>
        <div className="main-text">
          <div className="main-about-page">
            <div className="main-text-name">
              <span>
                <h1>
                  Hello, I am{" "}
                  <span style={{ color: "#04aa6d" }}>
                    <i>{data.name} </i>
                  </span>{" "}
                  <br /> Junior Web Development
                </h1>
              </span>
            </div>
            <br />
            <div className="main-text-description">{data.description}</div>
            <div className="btn_personal_info">
              <button className="btn-cv">
                <a
                  href={`https://drive.google.com/file/d/1yptMF2q_Rzu7P1XH1FXm7LGHJPwttuMz/view?usp=sharing`}
                  target={"blank"}
                >
                  Check My CV
                </a>
              </button>
              <button className="btn-email">
                <a href="mailto:moe.matar1998@gmail.com">
                  Gmail: moe.matar1998@gmail.com
                </a>
              </button>
            </div>
          </div>

          <div className="main-image">
            <img src={`http://localhost:4040/uploads/${data.img}`} />
          </div>
        </div>
      </section>
    );
}

  
}
