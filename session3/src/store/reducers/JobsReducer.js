import {LOAD_JOBS} from "../actions/JobsActions";

const initialState = [];

const JobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_JOBS:
            return action.jobs;
        default:
            return state
    }
};

export default JobsReducer
