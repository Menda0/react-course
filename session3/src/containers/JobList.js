import React,{useEffect} from "react"
import jobsList from "./jobs"
import {useDispatch, useSelector} from "react-redux";
import Job from "../components/Job";
import {getJobs} from "../store/actions/JobsActions";
import jobSearch from "../store/reducers/SearchReducer";

const JobList = () => {

    const dispatch = useDispatch();
    const jobs = useSelector(state => state.jobs);
    const jobSearch = useSelector(state => state.jobSearch);

    useEffect(()=>{
        dispatch(getJobs(jobSearch.location, jobSearch.description));
    }, [jobSearch]);

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
