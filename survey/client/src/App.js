import React, { Component } from 'react';
import { _emailClient } from './services/fetchCalls';
import projectsJSON from './projects.json';
import firebase from './firebase.js';
import './App.css';

import { SketchPicker } from 'react-color';

import image from './images/tgj_logo2.png';
import image2 from './images/Full-logo.png';

// const optionsCursorTrueWithMargin = {
//   followCursor: true,
//   shiftX: 20,
//   shiftY: 0
// }

const dateStamp = new Date().toString();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      steps: 0,
      finalPrice: 0,
      projectsChosen: {
        project: null,
        price: null
      },
      other: false,
      otherProj: "",
      addProj: false,
      complexityChosen: {
        complexity: null,
        price: null
      },
      primColor: "",
      secColor: "",
      projInfo: {
        projBudget: "",
        projTimeline: "",
        projDesc: "",
      },
      businessInfo: {
        businessName: "",
        businessWeb: "",
        businessDesc: "",
        businessSlogan: ""
      },
      contactInfo: {
        contactName: "",
        contactEmail: "",
        contactNumber: "",
        contactMessage: ""
      }
    };
  };

  componentDidMount() {
    this.setState({ projects: projectsJSON })
  }

  // global functions
  totalPrice = () => { 
    let finalPrice = 0
    let projArrPrice = this.state.projectsChosen.price;
    let compArrPrice = this.state.complexityChosen.price;
    this.setState({ finalPrice: projArrPrice + compArrPrice });
  }

  goToStep = (step) => {
    this.setState({ steps: step });
  }

  nextStep = () => {
    this.setState({ steps: this.state.steps + 1});
  }

  prevStep = () => {
    if (this.state.projectsChosen.price == "TBD") {
      this.goToStep(0);
    } else {
      this.setState({ steps: this.state.steps - 1 });
    }
  }

  // project functions
  chooseProject = (project, price) => {
    if (this.state.addProj == true) {
      // sequential projects
      
    } else {
      // first project
      if (price == "TBD") {
        if (project == "Other") {
          this.setState({ other: true });
        } else {
          this.setState({ finalPrice: price });
          this.setState({ projectsChosen:
            {
              project: project,
              price: price
            }
          });
          this.setState({ complexityChosen:
            {
              complexity: null,
              price: null
            }
          });
          this.goToStep(2);
        }
      } else {
        if (this.state.projectsChosen.project != project) {
          this.setState({ complexityChosen:
            {
              complexity: null,
              price: null
            }
          })
        }
        this.setState({ projectsChosen:
          {
            project: project,
            price: price
          }
        });
        setTimeout(function() {
          this.totalPrice();
        }.bind(this), 1)
        this.setState({ steps: 1 });
      }
    }
  }

  chooseComplexity = (complex, price) => {
    this.setState({ complexityChosen:
      {
        complexity: complex,
        price: price
      }
    });
    setTimeout(function() {
      this.totalPrice();
    }.bind(this), 1)
    this.nextStep();
  } 

  choosePrimColor = (color) => {
    this.setState({ primColor: color.hex });
  }

  chooseSecColor = (color) => {
    this.setState({ secColor: color.hex })
  }

  cancelColor = () => {
    this.setState({ primColor: "" });
    this.setState({ secColor: "" });
  } 

  noInput = (state) => {
    if (state == "primColor" && this.state[state] == "") {
      this.setState({ primColor: "No Colors" });
    }
    if (state == "projDesc" && this.state.projInfo[state] == "") {
      this.setState({ projInfo: {...this.state.projInfo, projBudget: "No Input"} });
      this.setState({ projInfo: {...this.state.projInfo, projTimeline: "No Input"} });
      this.setState({ projInfo: {...this.state.projInfo, projDesc: "No Input"} });
    }
    if (state == "businessName" && this.state.businessInfo[state] == "") {
      this.setState({ businessInfo: {...this.state.businessInfo, businessName: "No Input"} });
      this.setState({ businessInfo: {...this.state.businessInfo, businessWeb: "No Input"} });
      this.setState({ businessInfo: {...this.state.businessInfo, businessDesc: "No Input"} });
      this.setState({ businessInfo: {...this.state.businessInfo, businessSlogan: "No Input"} });
    }
    this.nextStep();
  }

  addProject = (answer) => {
    if (answer == "yes") {
      this.setState({ addProj: true });
      this.goToStep(0);
    } else {
      this.nextStep();
    }
  }

  inputText = (e, state) => {
    switch (state) {
      case "otherProj": 
        this.setState({ otherProj: e.target.value });
        break;
      case "projBudget":
        this.setState({ projInfo: {...this.state.projInfo, projBudget: e.target.value} });
        break;
      case "projTimeline":
        this.setState({ projInfo: {...this.state.projInfo, projTimeline: e.target.value} });
        break;
      case "projDesc":
        this.setState({ projInfo: {...this.state.projInfo, projDesc: e.target.value} });
        break;
      case "businessName":
        this.setState({ businessInfo: {...this.state.businessInfo, businessName: e.target.value} });
        break;
      case "businessWeb":
        this.setState({ businessInfo: {...this.state.businessInfo, businessWeb: e.target.value} });
        break;
      case "businessDesc":
        this.setState({ businessInfo: {...this.state.businessInfo, businessDesc: e.target.value} });
        break;
      case "businessSlogan":
        this.setState({ businessInfo: {...this.state.businessInfo, businessSlogan: e.target.value} });
        break;
      case "contactName":
        this.setState({ contactInfo: {...this.state.contactInfo, contactName: e.target.value} });
        break;
      case "contactEmail":
        this.setState({ contactInfo: {...this.state.contactInfo, contactEmail: e.target.value} });
        break;
      case "contactNumber":
        this.setState({ contactInfo: {...this.state.contactInfo, contactNumber: e.target.value} });
        break;
      case "contactMessage":
        this.setState({ contactInfo: {...this.state.contactInfo, contactMessage: e.target.value} });
        break;
    }
  }

  surveySubmit = () => {
    const surveyRef = firebase.database().ref('surveys');
    const survey = {
      dateTime: dateStamp,
      finalPrice: this.state.finalPrice,
      projectsChosen: this.state.projectsChosen,
      projectsInfo: this.state.projInfo,
      complexityChosen: this.state.complexityChosen,
      colorsInfo: [this.state.primColor, this.state.secColor],
      businessInfo: this.state.businessInfo,
      contactInfo: this.state.contactInfo
    }
    surveyRef.push(survey);
    this.nextStep();
    return _emailClient(survey);
  };

  render() {
    const projInfoState = this.state.projInfo;
    const busInfoState = this.state.businessInfo;
    const contactInfoState = this.state.contactInfo;

    const projChosen = this.state.projectsChosen.project != null;
    const compChosen = this.state.complexityChosen.complexity != null;
    const colorChosen = this.state.primColor.length > 0;
    const descChosen = projInfoState.projDesc.length > 0 || projInfoState.projBudget.length > 0 || projInfoState.projTimeline.length > 0;
    const businessChosen = busInfoState.businessName.length > 0 || busInfoState.businessWeb.length > 0 || busInfoState.businessDesc.length > 0 || busInfoState.businessSlogan.length > 0;
    const contactChosen = contactInfoState.contactName.length > 0 || contactInfoState.contactEmail.length > 0 || contactInfoState.contactNumber.length > 0 || contactInfoState.contactMessage.length > 0;

    const projectsList = this.state.projects.map(project => {
      return (
        <React.Fragment>
        { project.project == "Other" ? (
          <div className="buttons buttons-proj" onClick={() => this.chooseProject(project.project, project.price)} key={project._id}>
            <p className="buttons-title">{project.project}</p>
            { this.state.other ? (
              <React.Fragment>
                <input className="other-input" type="text" value={this.state.otherProj} placeholder="e.g. T-shirt Design" onChange={e => this.inputText(e, "otherProj")} />
                <button onClick={() => this.chooseProject(this.state.otherProj, project.price)}>&#62;</button>
              </React.Fragment>
              ): null
            }
            <p className="buttons-price">{project.price}</p>
            <p className="buttons-desc">{project.description}</p>
          </div>
          ) : (
          <div className="buttons buttons-proj" onClick={() => this.chooseProject(project.project, project.price)} key={project._id}>
            <p className="buttons-title">{project.project}</p>
            <p className="buttons-price">${project.price}</p>
            <p className="buttons-desc">{project.description}</p>
          </div>
          )
        }
        </React.Fragment>
      ) 
    });

    return (
      <div className="survey">
        {/*questions*/}
        <div className={this.state.steps < 6 ? "question-sec" : "question-sec step-7"}>
          { this.state.steps === 1 ? (
            <div>
              <p className="questions-header">How complex would you like your {this.state.projectsChosen.project.toLowerCase()} be?</p>
              { this.state.projectsChosen.project === "Custom Logo" ? (
                <div>
                  <div className="buttons" onClick={() => this.chooseComplexity("Simple", 0)}>
                    <p className="buttons-title">Simple</p>
                    <p className="buttons-price">+$0</p>
                    <img style={{ width: 150 }} src={image} alt="image" />
                    <p className="buttons-desc">Has two or less elements for your logo.</p>
                  </div>
                  <div className="buttons" onClick={() => this.chooseComplexity("Complicated", 50)}>
                    <p className="buttons-title">Intricate</p>
                    <p className="buttons-price">+$50</p>
                    <img style={{ width: 325 }} src={image2} alt="image" />
                    <p className="buttons-desc">Has two or more elements for your logo.</p>
                  </div>
                </div>
                ) : this.state.projectsChosen.project === "Business Card" ? (
                <div>
                  <div className="buttons" onClick={() => this.chooseComplexity("Single Side", 0)}>
                    <p className="buttons-title">Single Side</p>
                    <p className="buttons-price">+$0</p>
                    <p className="buttons-desc">Keep all your information neat on a side.</p>
                  </div>
                  <div className="buttons" onClick={() => this.chooseComplexity("Double Side", 100)}>
                    <p className="buttons-title">Double Side</p>
                    <p className="buttons-price">+$100</p>
                    <p className="buttons-desc">Add more design to your card by inluding another side.</p>
                  </div>
                </div>
                ) : this.state.projectsChosen.project === "Website" ? (
                <div>
                  <div className="buttons" onClick={() => this.chooseComplexity("Single Page", 0)}>
                    <p className="buttons-title">Single Page</p>
                    <p className="buttons-price">+$0</p>
                    <p className="buttons-desc">Keep it simple with a fluid one page website for your business.</p>
                  </div>
                  <div className="buttons" onClick={() => this.chooseComplexity("Multiple Pages", 200)}>
                    <p className="buttons-title">Multiple Pages</p>
                    <p className="buttons-price">+$200</p>
                    <p className="buttons-desc">Have more to show? Add more pages for your customers to read.</p>
                  </div>
                </div>
                ) : null
              }
            </div>
            ) : this.state.steps === 2 ? (
            <div>
              <p className="questions-header">Tell Us More About The Project</p>
              <div style={{ display: "inline-block", marginRight: 50 }}>
              <p className="questions-minor">What is your budget for this {this.state.projectsChosen.project.toLowerCase()}?</p>
              <input className="inputs" type="text" placeholder="e.g. $500" onChange={e => this.inputText(e, "projBudget")} value={this.state.projInfo.projBudget} />
              </div>
              <div style={{ display: "inline-block" }}>
              <p className="questions-minor">Do you have a timeline for this project?</p>
              <input className="inputs" type="text" placeholder="e.g. 1 month" onChange={e => this.inputText(e, "projTimeline")} value={this.state.projInfo.projTimeline} />
              </div>
              <p className="questions-minor">Describe your project</p>
              <textarea className="textarea" rows="6" placeholder="Describe Project Here" onChange={e => this.inputText(e, "projDesc")} value={this.state.projInfo.projDesc} />
            </div>
            ) : this.state.steps === 3 ? (
            <div>
              <p className="questions-header">Tell Us About Your Business</p>
              <div style={{ display: "inline-block", marginRight: 50 }}>
                <p className="questions-minor">What's the name of your business?</p>
                <input className="inputs" type="text" placeholder="e.g. The Graphic Jar" onChange={e => this.inputText(e, "businessName")} value={this.state.businessInfo.businessName} />
              </div>
              <div style={{ display: "inline-block" }}>
                <p className="questions-minor">Do you have a website for your business?</p>
                <input className="inputs" type="text" placeholder="e.g. thegraphicjar.com" onChange={e => this.inputText(e, "businessWeb")} value={this.state.businessInfo.businessWeb} />
              </div>
              <p className="questions-minor">What is your business?</p>
              <textarea className="textarea" rows="6" placeholder="Describe Business Here" onChange={e => this.inputText(e, "businessDesc")} value={this.state.businessInfo.businessDesc} />
              <p className="questions-minor">Do you have a motto/slogan?</p>
              <textarea className="textarea" rows="4" placeholder="Add Motto/Slogan Here" onChange={e => this.inputText(e, "businessSlogan")} value={this.state.businessInfo.businessSlogan} />
            </div>
            ) : this.state.steps === 4 ? (
            <div>
              <p className="questions-header">What are your business colors?</p>
              <div style={{ display: "inline-block", verticalAlign: "top" }}>
              <p className="questions-minor">Primary</p>
              <SketchPicker color={this.state.primColor} onChange={this.choosePrimColor} />
              </div>
              { this.state.primColor.split('')[0] == "#" ? (
                <div style={{ display: "inline-block", marginLeft: 40}}>
                  <p className="questions-minor">Secondary (Optional)</p>
                  <SketchPicker color={this.state.secColor} onChange={this.chooseSecColor} />
                  <div className="back-button" onClick={() => this.cancelColor()}>Cancel Color</div>
                </div>
                ): null
              }
            </div>
            ) : this.state.steps === 5 ? (
            <div>
              <p className="questions-header">Contact Information</p>
              <div>
                <p className="questions-minor">Your Name:</p>
                <input className="inputs" type="text" placeholder="e.g. John Smith" onChange={e => this.inputText(e, "contactName")} value={this.state.contactInfo.contactName} />
              </div>
              <div>
                <p className="questions-minor">Your Email:</p>
                <input className="inputs" type="text" placeholder="e.g. thegraphicjar@gmail.com" onChange={e => this.inputText(e, "contactEmail")} value={this.state.contactInfo.contactEmail} />
              </div>
              <div>
                <p className="questions-minor">Your Phone Number:</p>
                <input className="inputs" type="text" placeholder="e.g. (123)456-7890" onChange={e => this.inputText(e, "contactNumber")} value={this.state.contactInfo.contactNumber} />
              </div>
              <p className="questions-minor">Message:</p>
              <textarea className="textarea" rows="6" placeholder="Add Message Here" onChange={e => this.inputText(e, "contactMessage")} value={this.state.contactInfo.contactMessage} />
            </div>
            ) : this.state.steps === 6 ? (
              <div>
                <h4>Thank you! Your order has been submitted!</h4>
                <p>Shown below is your project summary, which has also been emailed to {this.state.contactInfo.contactEmail}</p>
                <p>Estimated Project Price: ${this.state.finalPrice}</p>
                <p>Project: {this.state.projectsChosen.project} ${this.state.projectsChosen.price}</p>
                <p>Complexity: {this.state.complexityChosen.complexity} ${this.state.complexityChosen.price}</p>
                <p>Budget: {this.state.projInfo.projBudget}</p>
                <p>Timeline: {this.state.projInfo.projTimeline}</p>
                <p>Project Description: {this.state.projInfo.projDesc}</p>
                <p>Company Name: {this.state.businessInfo.businessName}</p>
                <p>Company Website: {this.state.businessInfo.businessWeb}</p>
                <p>Company Description: {this.state.businessInfo.businessDesc}</p>
                <p>Company Slogan: {this.state.businessInfo.businessSlogan}</p>
                <p>Color(s): {this.state.primColor}, {this.state.secColor}</p>
                <p>Contact Name: {this.state.contactInfo.contactName}</p>
                <p>Contact Email: {this.state.contactInfo.contactEmail}</p>
                <p>Contact Number: {this.state.contactInfo.contactNumber}</p>
                <p>Contact Message: {this.state.contactInfo.contactMessage}</p>
              </div>
            ) : (
            <div>
              <p className="questions-header">What would you like to start with us?</p>
              {projectsList}
            </div>
           ) 
          }
          {/*button*/}
          <div>
            { this.state.steps > 0 && this.state.steps < 6 ?
              <div className="back-button" onClick={() => this.prevStep()}>Back</div>
            : null
            }
            { this.state.steps == 2 ? 
              <div className="next-button" onClick={() => this.noInput("projDesc")}>Next</div>
            : this.state.steps == 3 ?
              <div className="next-button" onClick={() => this.noInput("businessName")}>Next</div>
            : this.state.steps == 4 ?
              <div className="next-button" onClick={() => this.noInput("primColor")}>Next</div>
            : this.state.steps == 5 ?
              <div className="next-button" onClick={() => this.surveySubmit()}>Submit</div>
            : null
            }
          </div>
        </div>
        {/*project summary*/}
        { this.state.steps < 6 ? (
          <React.Fragment>
            <div className="summary-column">
              <p className="summary-title">Project Summary</p>
              { projChosen ? (
                <React.Fragment>
                  <p className="category-title" onClick={() => this.goToStep(0)}>Project</p>
                  <p className="category-desc">{this.state.projectsChosen.project} +${this.state.projectsChosen.price}</p>
                </React.Fragment>
                ) : null
              }
              { compChosen ? (
                <React.Fragment>
                  <p className="category-title" onClick={() => this.goToStep(1)}>Complexity</p>
                  <p className="category-desc">{this.state.complexityChosen.complexity} +${this.state.complexityChosen.price}</p>
                </React.Fragment>
                ) : null
              }
              { descChosen ?
                <p className="category-title" onClick={() => this.goToStep(2)}>Project Info</p> 
                : null
              }
              { businessChosen ? (
                <React.Fragment>
                  <p className="category-title" onClick={() => this.goToStep(3)}>Business Information</p>
                </React.Fragment>
                ) : null
              }
              { colorChosen ? (
                <React.Fragment>
                  <p className="category-title" onClick={() => this.goToStep(4)}>Color</p>
                  <p className="category-desc">{this.state.primColor}</p>
                  <p className="category-desc">{this.state.secColor}</p>
                </React.Fragment>
                ) : null
              }
              { contactChosen ? (
                <React.Fragment>
                  <p className="category-title" onClick={() => this.goToStep(5)}>Contact Information</p>
                </React.Fragment>
                ) : null
              }
            </div>
            {/*price*/}
            <div className="est-price">
              <span>Est. Starting Price:</span>
              <span style={{ display: "block", fontSize: 34 }}>${this.state.finalPrice}</span>
            </div>
          </React.Fragment>
        ) : null
        }
      </div>
    );
  }
}

export default App;
