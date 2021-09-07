import React from 'react';
import './Execs.css';
import AOS from 'aos';
import Data from './data/SportsInfo.json';
import "aos/dist/aos.css";

class Execs extends React.Component {
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
            // initialise with other settings
            duration: 1500
        });
    }
    render() {
        return (
            <div className="execs">
                <h1 data-aos={"fade-down"}>Meet the Execs!</h1>
                <div>
                    <div className="exec" data-aos={"fade-right"} data-aos-once={"true"}>
                        <h2>President</h2>
                        <div className="template" />
                        <div className="description">
                            <p>Description</p>
                        </div>
                        <div className="line" />
                    </div>
                    <div className="exec" data-aos={"fade-left"} data-aos-once={"true"}>
                        <h2>Events Coordinator</h2>
                        <div className="description">
                            <p>{Data[1].chead1_d}</p>
                        </div>
                        <img className="picture" src={Data[1].chead1_i} alt="Aadhunik Sundar" />
                        <div className="line" />
                    </div>
                    <div className="exec" data-aos={"fade-right"} data-aos-once={"true"}>
                        <h2>Business Coordinator</h2>
                        <img className="picture" src={Data[3].chead1_i} alt="Madhuran Selva" />
                        <div className="description">
                            <p>{Data[3].chead1_d}</p>
                        </div>
                        <div className="line" />
                    </div>
                    <div className="exec" data-aos={"fade-left"} data-aos-once={"true"}>
                        <h2>Volunteer Coordinator</h2>
                        <div className="description">
                            <p>Description</p>
                        </div>
                        <div className="template" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Execs;