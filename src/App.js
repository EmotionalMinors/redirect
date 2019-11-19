import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            surveyUrl: null
        };

    }

    determineSurvey() {
        const sites=['https://docs.google.com/forms/d/e/1FAIpQLSfPPt1zpEPNm1jNoc9y7wUEpLIVUojG8SUr5xsejgElAPb9Ag/viewform?usp=pp_url',
            'https://docs.google.com/forms/d/e/1FAIpQLSf-2-wk8A5IhtiZvUkqeIVHZ6owkMyRjN710zr9Vh_TxLRTgw/viewform?usp=pp_url',
            'https://docs.google.com/forms/d/e/1FAIpQLSdqpcZUtqVZobZVZvKrCSimpdfeBOCciwZtepS05ZN8B0Vcrg/viewform?usp=pp_url',
            'https://docs.google.com/forms/d/e/1FAIpQLScg9K64WNZMCCDqMwVTgDIEV7mLe5gQd988qC2V-uwEJ02Mlg/viewform?usp=pp_url',
            'https://docs.google.com/forms/d/e/1FAIpQLSd7wDzYFA_GUpeW7A9oOefRdFNqS6wsKz2B-HtKxCxYSBmaJg/viewform?usp=pp_url'
            ];

        const index = Math.round(Math.random() * (sites.length - 1));
        const href = sites[index];
        const content = `0; URL='${href}'`;

        return (<meta http-equiv="refresh" content={content} />);
    }

    render() {
        return (
            <div className="App">
                {this.determineSurvey()}
            </div>
        );
    }
}

export default App;
