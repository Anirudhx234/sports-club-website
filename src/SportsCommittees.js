import React from 'react';
import './SportsCommittees.css'
import Data from './pages/data/SportsInfo.json';

class SportsCommittees extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sport: 0, divs: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]};
    }
    none = (i) => {
        for (let u = 1; u < 10; u++) {
            document.getElementsByClassName("sport " + this.state.divs[u])[0].classList.add("none");
        }

        document.getElementsByClassName("info none")[0].classList.remove("none");

        document.getElementsByClassName("back sport")[0].classList.remove("none");
    }

    back = () => {
        document.getElementsByClassName("info")[0].classList.add("none");

        for (let u = 1; u < 10; u++) {
            document.getElementsByClassName("sport " + this.state.divs[u])[0].classList.remove("none");
        }

        document.getElementsByClassName("back sport")[0].classList.add("none");

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

    render() {
        return (
            < div id='sc-container' className="sc-container" >
                <div className="sport 1" onClick={this.changeState1}>{Data[1].sport}</div>
                <div className="sport 2" onClick={this.changeState2}>{Data[2].sport}</div>
                <div className="sport 3" onClick={this.changeState3}>{Data[3].sport}</div>
                <div className="break" />
                <div className="sport 4" onClick={this.changeState4}>{Data[4].sport}</div>
                <div className="sport 5" onClick={this.changeState5}>{Data[5].sport}</div>
                <div className="sport 6" onClick={this.changeState6}>{Data[6].sport}</div>
                <div className="break" />
                <div className="sport 7" onClick={this.changeState7}>{Data[7].sport}</div>
                <div className="sport 8" onClick={this.changeState8}>{Data[8].sport}</div>
                <div className="sport 9" onClick={this.changeState9}>{Data[9].sport}</div>
                <div className="info none">
                    <div className="name-description">
                        {Data[this.state.sport].chead1}
                        <div className="break" />
                        {Data[this.state.sport].chead1_d}
                    </div>
                    <div className="break" />
                    <div className="chead2">
                        {Data[this.state.sport].chead2}
                        {Data[this.state.sport].chead2_d}
                    </div>
                    <div className="break" />
                    <div className="chead3">
                        {Data[this.state.sport].chead3}
                        {Data[this.state.sport].chead3_d}
                    </div>
                    <div className="break" />
                    <div className="chead4">
                        {Data[this.state.sport].chead4}
                        {Data[this.state.sport].chead4_d}
                    </div>
                </div>
                <div className="back sport none" onClick={this.back}>Back</div>
            </div >
        );
    }
}
export default SportsCommittees;