import React, { Component } from 'react';
import { _emailClient } from './services/fetchCalls';
import projectsJSON from './projects.json';
import firebase from './firebase.js';
import Media from 'react-media';
import './App.css';

// components
import ProjectsList from './components/ProjectsList';
import ComplexitySec from './components/ComplexitySec';
import ProjectInfoSec from './components/ProjectInfoSec';
import BusinessInfoSec from './components/BusinessInfoSec';
import ColorsSec from './components/ColorsSec';
import ContactInfoSec from './components/ContactInfoSec';
import EndSummarySec from './components/EndSummarySec';
import SmallButtons from './components/SmallButtons';
import ProjSummaryColumn from './components/ProjSummaryColumn';
import NavbarCollapse from './components/NavbarCollapse';

import newLogo from './images/tgj_new_logo.svg';

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
    if (this.state.projectsChosen.price == "TBD" && this.state.steps == 2) {
      this.goToStep(0);
    } else {
      this.setState({ steps: this.state.steps - 1 });
    }
  }

  // project functions
  chooseProject = (project, price) => {
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
      this.setState({ finalPrice: 0 });
      this.setState({ projectsChosen: {
        project: null,
        price: null
      }});
      this.setState({ complexityChosen: {
        complexity: null,
        price: null
      }});
      this.setState({ otherProj: "" });
      this.setState({ other: false });
      this.setState({ projInfo: {
        projBudget: "",
        projTimeline: "",
        projDesc: "",
      }})
      this.goToStep(0);
    } else {
      window.close();
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
    return (
      <div className="survey">
        {/*questions*/}
        <div className={this.state.steps < 6 ? "question-sec" : "question-sec step-7"}>
          <div className="tgj">
            <img className="tgj-logo" src={newLogo} />
            <h3 className="tgj-name">the <span className="tgj-name-graphic">graphic</span> jar</h3>
          </div>
          { this.state.steps === 1 ? (
            <ComplexitySec func={this.chooseComplexity} project={this.state.projectsChosen.project} />
            ) : this.state.steps === 2 ? (
            <ProjectInfoSec func={this.inputText} project={this.state.projectsChosen.project} projBudget={this.state.projInfo.projBudget} projTimeline={this.state.projInfo.projTimeline} projDesc={this.state.projInfo.projDesc} />
            ) : this.state.steps === 3 ? (
            <BusinessInfoSec func={this.inputText} businessName={this.state.businessInfo.businessName} businessWeb={this.state.businessInfo.businessWeb} businessDesc={this.state.businessInfo.businessDesc} businessSlogan={this.state.businessInfo.businessSlogan} />
            ) : this.state.steps === 4 ? (
            <ColorsSec primFunc={this.choosePrimColor} secFunc={this.chooseSecColor} cancelFunc={this.cancelColor} primColor={this.state.primColor} secColor={this.state.secColor} />
            ) : this.state.steps === 5 ? (
            <ContactInfoSec func={this.inputText} contactName={this.state.contactInfo.contactName} contactEmail={this.state.contactInfo.contactEmail} contactNumber={this.state.contactInfo.contactNumber} contactMessage={this.state.contactInfo.contactMessage} />
            ) : this.state.steps === 6 ? (
            <EndSummarySec func={this.addProject} finalPrice={this.state.finalPrice} project={this.state.projectsChosen.project} projPrice={this.state.projectsChosen.price} complexity={this.state.complexityChosen.complexity} compPrice={this.state.complexityChosen.price} projBudget={this.state.projInfo.projBudget} projTimeline={this.state.projInfo.projTimeline} projDesc={this.state.projInfo.projDesc} businessName={this.state.businessInfo.businessName} businesWeb={this.state.businessInfo.businesWeb} businessDesc={this.state.businessInfo.businessDesc} businessSlogan={this.state.businessInfo.businessSlogan} primColor={this.state.primColor} secColor={this.state.secColor} contactName={this.state.contactInfo.contactName} contactEmail={this.state.contactInfo.contactEmail} contactNumber={this.state.contactInfo.contactNumber} contactMessage={this.state.contactInfo.contactMessage} />
            ) : (
            <ProjectsList chooseProjFunc={this.chooseProject} inputTextFunc={this.inputText} projects={this.state.projects} other={this.state.other} otherProj={this.state.otherProj} />
           ) 
          }
          {/*next back buttons*/}
          <SmallButtons backFunc={this.prevStep} noInputFunc={this.noInput} submitFunc={this.surveySubmit} steps={this.state.steps} />
        </div>
        {/*project summary*/}
        <Media query="(min-width: 1080px)">
        { matches =>
          matches ? (
            <ProjSummaryColumn stepFunc={this.goToStep} finalPrice={this.state.finalPrice} projInfo={this.state.projInfo} businessInfo={this.state.businessInfo} contactInfo={this.state.contactInfo} steps={this.state.steps} project={this.state.projectsChosen.project} projPrice={this.state.projectsChosen.price} complexity={this.state.complexityChosen.complexity} compPrice={this.state.complexityChosen.price} primColor={this.state.primColor} secColor={this.state.secColor} />
          ) : (
            <NavbarCollapse stepFunc={this.goToStep} finalPrice={this.state.finalPrice} projInfo={this.state.projInfo} businessInfo={this.state.businessInfo} contactInfo={this.state.contactInfo} steps={this.state.steps} project={this.state.projectsChosen.project} projPrice={this.state.projectsChosen.price} complexity={this.state.complexityChosen.complexity} compPrice={this.state.complexityChosen.price} primColor={this.state.primColor} secColor={this.state.secColor} />
          )
        }
        </Media>
      </div>
    );
  }
}

export default App;
