import React, { Component } from 'react';

class NewCompTemplate extends Component {
    render() {
        // LOAD ANYTHING FROM SITEDATA.JSON IF NEEDED...
        if (this.props.data) {
            var example_data = this.props.data.example_data;
        }

        // THEN RETURN YOUR COMPONENET
        return (
            <section id="did_i_load?">{example_data}</section>  
        );
    }
}

export default NewCompTemplate;
