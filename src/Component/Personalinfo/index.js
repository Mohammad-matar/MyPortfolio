import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

export default function Personal() {
    const [data, setData] = useState();
    useEffect(() => {
        getall();
    }, []);
    const getall = () => {
        axios.get('http://localhost:1337/api/info?populate=deep')
            .then(res => {
                setData(res.data.data);
                console.log('hello', res.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <section id='about' style={{ paddingTop: '70px' }}>
            <div className="main-text">
                <div className='main-about-page'>
                    <div className="main-text-name">
                        <span>
                            <h1>
                                Hello, I am <i>{data && data.attributes.name}</i>, <br /> {data && data.attributes.headline}.
                            </h1>
                        </span>
                    </div>
                    <br />
                    <div className="main-text-description">
                        {data && data.attributes.biography}
                    </div>
                    <div className='btn_personal_info'>
                        <button className='btn-cv'>
                            <a href={`http://localhost:1337${data && data.attributes.cv.data.attributes.url}`} target={'blank'}>Check My CV</a>
                        </button>
                        <button className='btn-email'>
                            <a href={`http://localhost:1337${data && data.attributes.contact_info[1].url}`} target={'blank'}>Gmail: Moe.matar1998@gmail.com</a>
                        </button>

                    </div>

                </div>

                <div className='main-image'>
                    <img src={`http://localhost:1337${data && data.attributes.profile.image.data.attributes.url}`} alt={`${data && data.attributes.profile.alt}`}></img>
                </div>

            </div>


        </section >
    )
}
