import React from 'react';
import './App.css';
import profilePhoto from './images/myPhoto.jpg';
import '../src/scss/base.scss';
import linkedin from './images/icons8-линкедин-50.png';
import github from './images/icons8-github-50.png';
import phone from './images/phone.svg';
import email from './images/email.svg';
import location from './images/location.svg';
import video from './images/video.mp4';
import video1 from './images/video.webm';
import pdf from './pdf/CV_Anastasiya_Muzychenko_Junior_FD.pdf';
import arrow from './images/down-arrow.svg';

function App() {

    return (
        <div className="App">
            <div className="bg-video">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                    <source src={video1} type="video/webm"/>
                    Your brouser does not support video, get a new lap top.
                </video>
            </div>
            <div className={'wrapper'}>

                <section className={'profilePhoto'}>
                    <img className={'photo'} src={profilePhoto}/>
                    <a href={pdf} target="_blank" rel="noopener noreferrer" download>
                        <button className={'button'}>
                            <img src={arrow}/>
                            <span>PDF</span>
                        </button>
                    </a>
                </section>

                <section className={'goals'}>
                    <h1>Anastasiya Muzychenko</h1>
                    <h2>Front-end (React) Developer</h2>
                    <h4>Birth date: October 15, 1997</h4>
                    <h5>GOALS</h5>
                    <p>
                        Hi, I’m a Front-end developer with good knowledge of how the Web works.
                        Interested by web applications and client-side technologies and everything by the other side.
                        I enjoy developing responsive, user-friendly applications with aesthetic design.
                        I am committed to using React to create modern, fast, and capable application.
                    </p>
                    <p>
                        I strive to gain more commercial experience in this field,
                        for this reason I'm currently looking for a new opportunity
                        develop and progress as a team, as well as have fun and learn along the way.
                        Please feel free to contact me by email or through instant messengers at any time.
                    </p>
                </section>
                <section className={'profileInfo'}>

                    <h5>PROFILE & CONTACTS</h5>
                    <p className={'iconInfo'}><img className={'icon'} src={phone}/>+380951663712</p>
                    <p className={'iconInfo'}><img className={'icon'} src={email}/>psevernyj69@gmail.com</p>
                    <p className={'iconInfo'}><img className={'icon'} src={location}/>Kyiv.Ukraine</p>
                    <a className={'iconLink'}
                       href={'https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B0%D1%81%D0%B8%D1%8F-%D0%BC%D1%83%D0%B7%D1%8B%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-750b29163/'}>
                        <img src={linkedin}/></a>
                    <a className={'iconLink'} href={'https://github.com/psevernyj'}><img src={github}/></a>
                </section>
                <section className={'workExperince'}>
                    <h5>WORK EXPERIENCE</h5>
                    <ul>

                        <li>10/2019 - Present, Front-end Developer, Freelance</li>

                        <li>03/2019 - 09/2019, Junior Front-end Developer, Cadeau Concepten, Kiev, Remote
                            <p><a href={'https://www.cadeauconcepten.nl/'}>https://www.cadeauconcepten.nl/</a> - leading
                                and innovative provider of gift cards in Netherlands.</p>
                            <p>Worked in a remote team as a junior developer
                                The main goal was to develop a responsive website with interactivity.
                                I also worked with forms, validation and animation.</p>
                        </li>
                        <li>03/2018 - 03/2019, Support Specialist, Strela Trans Group, Kiev
                            <p>Worked with clients, accounts, and other related tasks. My responsibilities
                                including communication with customers about their packages from America,
                                also communicating with an office in Brooklyn, and
                                I solved the problems that arose during the events.</p>
                        </li>
                    </ul>
                </section>
                <section className={'skills'}>
                    <h5>SKILLS</h5>
                    <ul>
                        <li>REACT.JS</li>
                        <li>CSS3</li>
                        <li>SASS/SCSS</li>
                        <li>JAVA SCRIPT</li>
                        <li>REACT/REDUX</li>
                        <li>REST/AJAX</li>
                        <li>BOOTSTRAP</li>
                    </ul>
                </section>
                <section className={'education'}>
                    <h5>EDUCATION</h5>
                    <ul>
                        <li>2020 Beetroot Academy, Front-end</li>
                        <li>2019 Skill-up, Front-end</li>
                        <li>2014-2018 - Petro Mohyla Black Sea National University,
                            philology of romano-german languages.
                        </li>
                    </ul>
                </section>
                <section className={'languages'}>
                    <h5>LANGUAGES</h5>
                    <ul>
                        <li>English: Pre-Intermediate</li>
                        <li>Ukraine: Native or Bilingual</li>
                        <li>Russian: Native or Bilingual</li>
                    </ul>
                </section>


                <section className={'hobbies'}>
                    <h5>HOBBIES & INTERESTS</h5>
                    <p>Psychology/Blockchain/Drawing/Cycling</p>
                </section>
            </div>


        </div>
    );
}

export default App;
