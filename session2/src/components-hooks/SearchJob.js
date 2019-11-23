import React, {useState} from "react"

const SearchJob = ({handleSubmit}) => {

    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div style={styles.container}>
            <form onSubmit={(event) => handleSubmit(event, location, description)}>
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
}

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
