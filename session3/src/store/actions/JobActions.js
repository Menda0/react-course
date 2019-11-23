export const LOAD_JOB = "LOAD_JOB";

const loadJob = (job) => ({type:LOAD_JOB, job});

export const getJob = (jobId) => {
    return (dispatch) => {
        const url = `https://jobs.github.com/positions/${jobId}.json`;
        const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${url}`;

        fetch(proxyUrl, {
                crossDomain: true,
                method: 'GET'
            }).then(function (response) {
            if (response.ok) {
                response.json().then(job => {
                    dispatch(loadJob(job));
                })
            }
        }).catch(function (error) {
            console.error(error)
        })
    }
};
