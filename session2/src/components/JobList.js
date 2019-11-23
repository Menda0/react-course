import React from "react"
import Job from "./Job";
import jobs from "./jobs"

class JobList extends React.Component {

    constructor() {
        super();
        this.state = {jobs: jobs};
    }

    render() {
        return (
            <div style={styles.container}>
                {this.state.jobs.map((job)=> <Job job={job} />)}
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
