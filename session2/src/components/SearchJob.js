import React from "react"

class SearchJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description: "", location: ""};

        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component did update");
    }

    handleChangeDescription(event) {
        this.setState({description: event.target.value});
    }

    handleChangeLocation(event) {
        this.setState({location: event.target.value});
    }

    render() {
        return (
            <div style={styles.container}>
                <form onSubmit={(event) => this.props.handleSubmit(event, this.state.location, this.state.description)}>
                    <label style={styles.input}>
                        Description:
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChangeDescription} />
                    </label>
                    <label style={styles.input}>
                        Location:
                        <input type="text" name="location" value={this.state.location} onChange={this.handleChangeLocation}/>
                    </label>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

const styles = {
    container: {
        width: "100%",
        padding: 20,
        backgroundColor: "#e1e1e1"
    },
    input: {
        margin: 10
    }
};

export default SearchJob;
