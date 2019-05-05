import React, { Component } from 'react';
import '../../App.css';

class ContactInfoSec extends Component {
  render() {
    return(
      <div>
        <p className="questions-header">Contact Information</p>
        <div>
          <p className="questions-minor">Your Name:</p>
          <input className="inputs" type="text" placeholder="e.g. John Smith" onChange={e => this.props.func(e, "contactName")} value={this.props.contactName} />
        </div>
        <div>
          <p className="questions-minor">Your Email:</p>
          <input className="inputs" type="text" placeholder="e.g. thegraphicjar@gmail.com" onChange={e => this.props.func(e, "contactEmail")} value={this.props.contactEmail} />
        </div>
        <div>
          <p className="questions-minor">Your Phone Number:</p>
          <input className="inputs" type="text" placeholder="e.g. (123)456-7890" onChange={e => this.props.func(e, "contactNumber")} value={this.props.contactNumber} />
        </div>
        <p className="questions-minor">Message:</p>
        <textarea className="textarea" rows="6" placeholder="Add Message Here" onChange={e => this.props.func(e, "contactMessage")} value={this.props.contactMessage} />
      </div>
    )
  }
}

export default ContactInfoSec;