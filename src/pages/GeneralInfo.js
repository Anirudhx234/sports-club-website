import React from "react";
import { Question } from './components/QuestionBox.js';
import Data from './data/FAQ.json';
import './GeneralInfo.css';

class GeneralInfo extends React.Component {
    openSite = (site) => {
        if (site !== '') window.open(site);
    };

    render() {
        return (
            <div className="info-container">
                <h1>FAQ!</h1>
                <div className="faq-container">
                    <div className="faq-side left">
                        <Question color="#3ABFEF" question={Data[0].question} answer={Data[0].answer} />
                        <Question color="#3ABFEF" question={Data[1].question} answer={Data[1].answer} />
                        <Question color="#3ABFEF" question={Data[2].question} answer={Data[2].answer} />
                        <Question color="#3ABFEF" question={Data[3].question} answer={Data[3].answer} />
                    </div>
                    <div className="faq-side right">
                        <Question color="#6270F0" question={Data[4].question} answer={Data[4].answer} />
                        <Question color="#6270F0" question={Data[5].question} answer={Data[5].answer} />
                        <Question color="#6270F0" question={Data[6].question} answer={Data[6].answer} />
                        <Question color="#6270F0" question={Data[7].question} answer={Data[7].answer} />
                    </div>
                </div>
                <h2>Check out our socials:</h2>
                <div className="social-media-icons">
                    <img src='/images/facebook.png' alt="Facebook" className="icon" onClick={this.openSite.bind(this, 'https://www.facebook.com/groups/tamssports2122')}/>
                    <img src='/images/instagram.png' alt="Instagram" className="icon" onClick={this.openSite.bind(this, '')}/>
                </div>
                <h2>Contact Us!</h2>
                <a href="mailto:TAMSSportsClub123@gmail.com">TAMSSportsClub123@gmail.com</a>
                <h2>Acknowledgements</h2>
                <div>Adheesh Kadiresan - Website Lead Development</div>
            </div>
        );
    }
}

export default GeneralInfo;