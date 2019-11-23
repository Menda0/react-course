import React from "react"

class Job extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <img style={styles.logo}
                     src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdE4zIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2bfd2dd7d55405f9d7f63ca530bf2b19edd7c063/2018%20Gartner%20Logo.jpg"
                />
                <h3>Full Stack Software Engineer</h3>
                <a href="www.google.pt"><h5>Gartner Inc.</h5></a>
                <p>Full time</p>
                <p>Berlin/Remote</p>
            </div>
        )
    }
}

const styles = {
    container: {
        padding: 20,
        margin: 20,
        border: "1px solid #e1e1e1",
        display: "inline-grid",
    },
    logo:{
      maxWidth: 200
    }
};

export default Job;
