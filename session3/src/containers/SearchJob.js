import React, {useState} from "react"
import {useDispatch} from "react-redux";
import {setSearch} from "../store/actions/SearchActions";

const SearchJob = () => {

    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setSearch(location, description));
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit}>
                <label style={styles.input}>
                    Description:
                    <input type="text" name="description" value={description}
                           onChange={handleChangeDescription}/>
                </label>
                <label style={styles.input}>
                    Location:
                    <input type="text" name="location" value={location}
                           onChange={handleChangeLocation}/>
                </label>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
};

const styles = {
    container: {
        width: "100%",
        padding: 20,
        backgroundColor: "#e1e1e1"
    },
    input: {
        margin: 10
    }
};

export default SearchJob;
