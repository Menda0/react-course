import React from "react"
import Job from "./Job";

class JobList extends React.Component {

    componentDidMount() {
        console.log("Component mounted");
    }

    render() {
        return (
            <div style={styles.container}>
                <Job />
                <Job />
                <Job />
            </div>
        );
    }
}

const styles = {
    container: {
        width: "100%",
        display: "grid",
        "grid-template-columns": "auto auto auto auto auto"
    }
};


export default JobList;
