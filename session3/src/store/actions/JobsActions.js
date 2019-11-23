
export const LOAD_JOBS = "LOAD_JOBS";

const loadJobs = (jobs) => {
    return {
        type: LOAD_JOBS,
        jobs
    }
};

export const getJobs = (location, description) => {
    return (dispatch) => {
        const url = `https://jobs.github.com/positions.json?description=${encodeURI(description)}&location=${encodeURI(location)}`;
        const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${url}`;

        fetch(proxyUrl, {
                crossDomain: true,
                method: 'GET'
            }).then(function (response) {
            if (response.ok) {
                response.json().then(jobs => {
                    dispatch(loadJobs(jobs));
                })
            }
        }).catch(function (error) {
            console.error(error)
        })
    }
};
