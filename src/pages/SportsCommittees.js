import React from 'react';
import './SportsCommittees.css'
import Data from './data/SportsInfo.json';
//import maddy from "./images/maddy.png";

class SportsCommittees extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sport: 0, divs: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"] };
    }


    none = (i) => {
        for (let u = 0; u < 11; u++) {
            document.getElementsByClassName("sport " + this.state.divs[u])[0].classList.add("none");
        }

        document.getElementsByClassName("info none")[0].classList.remove("none");

        document.getElementsByClassName("back")[0].classList.remove("none");

        if (Data[i].chead3_d == null) {
            document.getElementsByClassName("chead")[2].classList.add("none");
        }
        if (Data[i].chead4_d == null) {
            document.getElementsByClassName("chead")[3].classList.add("none");
        }

        window.scrollTo(0, 0);
    }

    back = () => {
        document.getElementsByClassName("info")[0].classList.add("none");

        for (let u = 0; u < 11; u++) {
            document.getElementsByClassName("sport " + this.state.divs[u])[0].classList.remove("none");
        }

        document.getElementsByClassName("chead")[2].classList.remove("none");
        document.getElementsByClassName("chead")[3].classList.remove("none");

        document.getElementsByClassName("back")[0].classList.add("none");

        document.getElementsByClassName("sport " + this.state.divs[this.state.sport - 1])[0].scrollIntoView();
    }




    changeState1 = () => {
        this.setState({ sport: 1 });
        this.none(1);
    }
    changeState2 = () => {
        this.setState({ sport: 2 });
        this.none(2);
    }
    changeState3 = () => {
        this.setState({ sport: 3 });
        this.none(3);
    }
    changeState4 = () => {
        this.setState({ sport: 4 });
        this.none(4);
    }
    changeState5 = () => {
        this.setState({ sport: 5 });
        this.none(5);
    }
    changeState6 = () => {
        this.setState({ sport: 6 });
        this.none(6);
    }
    changeState7 = () => {
        this.setState({ sport: 7 });
        this.none(7);
    }
    changeState8 = () => {
        this.setState({ sport: 8 });
        this.none(8);
    }
    changeState9 = () => {
        this.setState({ sport: 9 });
        this.none(9);
    }
    changeState10 = () => {
        this.setState({ sport: 10 });
        this.none(10);
    }
    changeState11 = () => {
        this.setState({ sport: 11 });
        this.none(10);
    }

    render() {
        return (
            < div id='sc-container' className="sc-container" >
                <div className="break" />
                <div className="sport one" onClick={this.changeState1}>{Data[1].sport}</div>
                <div className="sport two" onClick={this.changeState2}>{Data[2].sport}</div>
                <div className="sport three" onClick={this.changeState3}>{Data[3].sport}</div>
                <div className="break" />
                <div className="sport four" onClick={this.changeState4}>{Data[4].sport}</div>
                <div className="sport five" onClick={this.changeState5}>{Data[5].sport}</div>
                <div className="sport six" onClick={this.changeState6}>{Data[6].sport}</div>
                <div className="break" />
                <div className="sport seven" onClick={this.changeState7}>{Data[7].sport}</div>
                <div className="sport eight" onClick={this.changeState8}>{Data[8].sport}</div>
                <div className="sport nine" onClick={this.changeState9}>{Data[9].sport}</div>
                <div className="break" />
                <div className="sport ten" onClick={this.changeState10}>{Data[10].sport}</div>
                <div className="sport eleven" onClick={this.changeState11}>{Data[11].sport}</div>
                <div className="info none">
                    <h1 className="csport">{Data[this.state.sport].sport}</h1>
                    <div className="chead">
                        <div className="namel">{Data[this.state.sport].chead1}
                            <div className="description">{Data[this.state.sport].chead1_d}</div>
                        </div>
                        <img className="math" alt={Data[this.state.sport].chead1} src={Data[this.state.sport].chead1_i} />
                        <div className="break" />
                    </div>
                    <div className="chead">
                        <img className="math" alt={Data[this.state.sport].chead2} src={Data[this.state.sport].chead2_i} />
                        <div className="namer">{Data[this.state.sport].chead2}
                            <div className="description">{Data[this.state.sport].chead2_d}</div>
                        </div>
                        <div className="break" />
                    </div>
                    <div className="chead">
                        <div className="namel">{Data[this.state.sport].chead3}
                            <div className="description">{Data[this.state.sport].chead3_d}</div>
                        </div>
                        <img className="math" alt={Data[this.state.sport].chead3} src={Data[this.state.sport].chead3_i} />
                        <div className="break" />
                    </div>
                    <div className="chead">
                        <img className="math" alt={Data[this.state.sport].chead4} src={Data[this.state.sport].chead4_i} />
                        <div className="namer">{Data[this.state.sport].chead4}
                            <div className="description">{Data[this.state.sport].chead4_d}</div>
                        </div>
                        <div className="break" />
                    </div>
                </div>
                <div className="break" />
                <div className="back none" onClick={this.back}>Back</div>
            </div >
        );
    }
}
export default SportsCommittees;