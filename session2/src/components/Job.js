import React from "react"

class Job extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                {this.props.job.company_logo && <img style={styles.logo} src={this.props.job.company_logo}/>}
                <h3>{this.props.job.title}</h3>
                <a href={this.props.job.company_url}><h5>{this.props.job.company}</h5></a>
                <p>{this.props.job.type}</p>
                <p>{this.props.job.location}</p>
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
    logo: {
        maxWidth: 200
    }
};

export default Job;
