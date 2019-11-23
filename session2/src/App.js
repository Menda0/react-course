import React, {useState, useEffect} from 'react';
import './App.css';
import JobList from "./components-hooks/JobList";
import SearchJob from "./components-hooks/SearchJob";

const App = () => {

    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        console.log(`New Search with location ${location} and description: ${description}`);
    },[location, description]);

    const handleSearchSubmit = (event, description, location) => {
        // Avoid default form behavior. Page will not reload.
        event.preventDefault();
        setDescription(description);
        setLocation(location);
    };

    return (
        <div>
            <SearchJob handleSubmit={handleSearchSubmit}/>
            <JobList/>
        </div>
    );
};

export default App;
