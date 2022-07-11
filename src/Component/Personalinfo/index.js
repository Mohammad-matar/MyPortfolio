import React from 'react';
import './style.css';

export default function Personal() {
    return (
        <section id='about' style={{ paddingTop: '70px' }}>
            <div className="main-text">
                <div className='main-about-page'>
                    <div className="main-text-name">
                        <span>
                            <h1>
                                Hi, I am <i>Mohammad Matar</i>, I am a Software Developer based in Tripoli.
                            </h1>
                        </span>
                    </div>
                    <br />
                    <div className="main-text-description">
                        Hard-working and self-motivated team player <br />with good time management skills,
                        looking for <br /> new challenges and experiences in a fast-moving industry
                        <br />and passionate, ambitious Full-Stack web developer who enjoys coding and learning new technologies and tools that make our life easier
                    </div>
                    <div className='about-email'>
                        <a href='mailto:moe.matar1998@gmail.com'>Gmail: Moe.matar1998@gmail.com</a>
                    </div>
                </div>

                <div className='main-image'>
                    <img src='/images/image.jpg'></img>
                </div>

            </div>


        </section >
    )
}
