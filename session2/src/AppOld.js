import React from 'react';
import './App.css';
import JobList from "./components/JobList";
import SearchJob from "./components/SearchJob";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {description: "", location: ""};
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(event, description, location){
        // Avoid default form behavior. Page will not reload.
        event.preventDefault();
        this.setState({description: description, location: location});
        console.log(`New Search with location ${location} and description: ${description}`);
    }

    render() {
        return (
            <div>
                <SearchJob handleSubmit={this.handleSearchSubmit}/>
                <JobList/>
            </div>
        );
    }
}

export default App;
