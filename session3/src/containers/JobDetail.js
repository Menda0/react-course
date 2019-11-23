import React, {useEffect} from "react"
import {
  useParams
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getJob} from "../store/actions/JobActions";
import Job from "../components/Job";


const JobDetail = () => {
    let {jobId} = useParams();

    const dispatch = useDispatch();
    const job = useSelector(state => state.job);

    useEffect(()=>dispatch(getJob(jobId)), [jobId]);

    if(job == null){
        return <h3>Loading job ...</h3>
    }else{
        return <div>
            <Job job={job} />
        </div>
    }
};

export default JobDetail;
