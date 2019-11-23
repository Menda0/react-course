import React,{useState} from "react"
import Job from "./Job";
import jobsList from "./jobs"

const JobList = () => {

    const [jobs, setJobs] = useState(jobsList);

    return (
        <div style={styles.container}>
            {jobs.map((job)=> <Job job={job} />)}
        </div>
    );
}

const styles = {
    container: {
        width: "100%",
        display: "grid",
        "grid-template-columns": "auto auto auto auto auto"
    }
};

export default JobList;
