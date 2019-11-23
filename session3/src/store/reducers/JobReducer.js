import {LOAD_JOB} from "../actions/JobActions";

const initialState = null;

const JobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_JOB:
            return action.job;
        default:
            return state
    }
};

export default JobsReducer
