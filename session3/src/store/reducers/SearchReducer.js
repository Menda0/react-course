import {SET_DESCRIPTION, SET_LOCATION, SET_SEARCH} from "../actions/SearchActions";

const initialState = {
    "location":"",
    "description": ""
};

const SearchReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case SET_DESCRIPTION:
            newState.description = action.description;
            return newState;
        case SET_LOCATION:
            newState.location = action.location;
            return newState;
        case SET_SEARCH:
            newState.location = action.location;
            newState.description = action.description;
            return newState;
        default:
            return state
    }
};

export default SearchReducer
