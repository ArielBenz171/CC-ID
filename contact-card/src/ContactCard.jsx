import React from "react";
import PropTypes from "prop-types";


class ContactCard extends React.Component {
    render(){
        return (
            <div id="cc">
                <h3>Name:</h3>
                <p>{this.props.name}</p>
                
                <h3>Phone Number:</h3>
                {this.props.pNum}
                
                <h3>Email:</h3>
                <p>{this.props.email}</p>
            </div>
        )
    }
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    workphone: PropTypes.number
}

export default ContactCard;
