import React, { Component } from 'react';
import '../../App.css';

class NavbarCollapse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navClicked: false
    }
  }

  collapse = () => {
    this.setState(prevState => ({
      navClicked: !prevState.navClicked
    }));
  }

  render() {
    const projInfoState = this.props.projInfo;
    const busInfoState = this.props.businessInfo;
    const contactInfoState = this.props.contactInfo;

    const currentStep = this.props.steps < 6;
    const projChosen = this.props.project != null;
    const compChosen = this.props.complexity1 != null;
    const colorChosen = this.props.primColor.length > 0;
    const descChosen = projInfoState.projDesc.length > 0 || projInfoState.projBudget.length > 0 || projInfoState.projTimeline.length > 0;
    const businessChosen = busInfoState.businessName.length > 0 || busInfoState.businessWeb.length > 0 || busInfoState.businessDesc.length > 0 || busInfoState.businessSlogan.length > 0;
    const contactChosen = contactInfoState.contactName.length > 0 || contactInfoState.contactEmail.length > 0 || contactInfoState.contactNumber.length > 0 || contactInfoState.contactMessage.length > 0;

    return (
      currentStep ? (
        <React.Fragment>
          <div className="summary-column">
            { this.state.navClicked ? (
              <React.Fragment>
              <i className="fa fa-bars" onClick={() => this.collapse()}></i>
              <p className="summary-title">Hello Summary</p>
              { projChosen ? (
                <React.Fragment>
                  <p className="category-title" onClick={() => this.props.stepFunc(0)}>Project</p>
                  <p className="category-desc">{this.props.project} +${this.props.projPrice}</p>
                </React.Fragment>
                ) : null
              }
              { compChosen ? (
                <React.Fragment>
                  <p className="category-title" onClick={() => this.props.stepFunc(1)}>Complexity</p>
                  <p className="category-desc">{this.props.complexity1} +${this.props.compPrice1}</p>
                  <p className="category-desc">{this.props.complexity2} +${this.props.compPrice2}</p>
                </React.Fragment>
                ) : null
              }
              { descChosen ?
                <p className="category-title" onClick={() => this.props.stepFunc(2)}>Project Info</p> 
                : null
              }
              { businessChosen ? (
                <React.Fragment>
                  <p className="category-title" onClick={() => this.props.stepFunc(3)}>Business Information</p>
                </React.Fragment>
                ) : null
              }
              { colorChosen ? (
                <React.Fragment>
                  <p className="category-title" onClick={() => this.props.stepFunc(4)}>Color</p>
                  <p className="category-desc">{this.props.primColor}</p>
                  <p className="category-desc">{this.props.secColor}</p>
                </React.Fragment>
                ) : null
              }
              { contactChosen ? (
                <React.Fragment>
                  <p className="category-title" onClick={() => this.props.stepFunc(5)}>Contact Information</p>
                </React.Fragment>
                ) : null
              }
              {/*price*/}
              <div className="est-price">
                <span>Est. Starting Price:</span>
                <span style={{ display: "block", fontSize: 28 }}>${this.props.finalPrice}</span>
              </div>
              </React.Fragment>
              ) : (
              <i className="fa fa-bars" onClick={() => this.collapse()}></i>
              )
            }    
          </div>
        </React.Fragment>
      ) : null
    )
  }
}

export default NavbarCollapse;