import React from 'react';
import './app.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import Results from '../Result/Results/Results';
const name = require('@rstacruz/startup-name-generator')
class App extends React.Component {
    state = {
        headerText: "Name It !",
        headerExpanded: true,
        suggestedItems: []
    };

    handelInputChange = (input) => {
       this.setState({
           headerExpanded: !input.length,
           suggestedItems: !input.length ? [] : name(input),
        })
    }

    render() {
       return (
        <div className="container">
            <Header title={this.state.headerText} headerExpanded={this.state.headerExpanded} />
            <SearchBox onInputChange={this.handelInputChange} />
            <Results suggetions={this.state.suggestedItems} />
        </div>
       )
    }
}

export default App;