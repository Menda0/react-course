import React from "react"

const Job = ({job}) => {
    return (
            <div style={styles.container}>
                {job.company_logo && <img style={styles.logo} src={job.company_logo}/>}
                <h3>{job.title}</h3>
                <a href={job.company_url}><h5>{job.company}</h5></a>
                <p>{job.type}</p>
                <p>{job.location}</p>
                <a href={`/jobs/${job.id}`}>Detail</a>
            </div>
    )
};

const styles = {
    container: {
        padding: 20,
        margin: 20,
        border: "1px solid #e1e1e1",
        display: "inline-grid",
    },
    logo: {
        maxWidth: 200
    }
};

export default Job;
