export const SET_LOCATION = "SET_LOCATION";
export const SET_DESCRIPTION = "SET_DESCRIPTION";
export const SET_SEARCH = "SET_SEARCH";

export const setLocation = (location) => ({type:SET_LOCATION, location});
export const setDescription = (description) => ({type:SET_DESCRIPTION, description});
export const setSearch = (location, description) => ({type:SET_SEARCH, location, description});
