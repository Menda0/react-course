import React, {useState, useEffect} from 'react';
import './App.css';
import JobList from "./containers/JobList";
import SearchJob from "./containers/SearchJob";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import JobDetail from "./containers/JobDetail";

const App = () => {
    return (
        <div>
            <Router>
                <SearchJob/>
                <Switch>
                    <Route path="/jobs/:jobId">
                        <JobDetail/>
                    </Route>
                    <Route path="/jobs">
                        <JobList/>
                    </Route>
                    <Route path="/" >
                        <JobList/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
