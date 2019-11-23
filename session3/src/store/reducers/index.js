import { combineReducers } from 'redux'
import jobs from "./JobsReducer";
import job from "./JobReducer";
import jobSearch from "./SearchReducer";

const reducers = combineReducers({
    job,
    jobs,
    jobSearch
});

export default reducers;
