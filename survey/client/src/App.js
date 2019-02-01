import React, { Component } from 'react';
// import { _loadProjects } from './services/fetchCalls';
import projectsJSON from './projects.json';
import { SketchPicker } from 'react-color';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      steps: 0,
      finalPrice: 0,
      projectsChosen: [{
        project: null,
        price: null
      }],
      other: false,
      otherProj: "",
      addProj: false,
      complexityChosen: [{
        complexity: null,
        price: null
      }],
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
        businessSlogan: "",
        businessAud: ""
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
    // return _loadProjects().then(resultingJSON => this.setState({ projects: resultingJSON }))
    this.setState({ projects: projectsJSON })

  }

  // global functions
  totalPrice = () => { 
    let finalPrice = 0
    let projArrPrice = this.state.projectsChosen.map(a => a.price);
    let compArrPrice = this.state.complexityChosen.map(a => a.price);
    for (let i in projArrPrice) {
      finalPrice = finalPrice + projArrPrice[i];
    }
    for (let i in compArrPrice) {
      finalPrice = finalPrice + compArrPrice[i];
    }
    this.setState({ finalPrice: finalPrice });
  }

  goToStep = (step) => {
    this.setState({ steps: step });
  }

  nextStep = () => {
    this.setState({ steps: this.state.steps + 1});
  }

  prevStep = () => {
    if (this.state.projectsChosen[0].price == "TBD") {
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
          this.setState({ projectsChosen: [
            {
              project: project,
              price: price
            }] 
          });
          this.setState({ complexityChosen: [
            {
              complexity: null,
              price: null
            }]
          });
          this.goToStep(2);
        }
      } else {
        if (this.state.projectsChosen[0].project != project) {
          this.setState({ complexityChosen: [
            {
              complexity: null,
              price: null
            }
          ]})
        }
        this.setState({ projectsChosen: [
          {
            project: project,
            price: price
          }] 
        });
        setTimeout(function() {
          this.totalPrice();
        }.bind(this), 1)
        this.setState({ steps: 1 });
      }
    }
  }

  chooseComplexity = (complex, price) => {
    this.setState({ complexityChosen: [
      {
        complexity: complex,
        price: price
      }] 
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
      this.setState({ projInfo: {...this.state.projInfo, projDesc: "No Input"} });
    }
    if (state == "businessName" && this.state.businessInfo[state] == "") {
      this.setState({ businessInfo: {...this.state.businessInfo, businessName: "No Input"} });
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
      case "businessAud":
        this.setState({ businessInfo: {...this.state.businessInfo, businessAud: e.target.value} });
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

  render() {
    const projInfoState = this.state.projInfo;
    const busInfoState = this.state.businessInfo;
    const contactInfoState = this.state.contactInfo;

    const projChosen = this.state.projectsChosen[0].project != null;
    const compChosen = this.state.complexityChosen[0].complexity != null;
    const colorChosen = this.state.primColor.length > 0;
    const descChosen = projInfoState.projDesc.length > 0 || projInfoState.projBudget.length > 0 || projInfoState.projTimeline.length > 0;
    const businessChosen = busInfoState.businessName.length > 0 || busInfoState.businessWeb.length > 0 || busInfoState.businessDesc.length > 0 || busInfoState.businessSlogan.length > 0 || busInfoState.businessAud.length > 0;
    const contactChosen = contactInfoState.contactName.length > 0 || contactInfoState.contactEmail.length > 0 || contactInfoState.contactNumber.length > 0 || contactInfoState.contactMessage.length > 0;

    const projectsList = this.state.projects.map(project => {
      return (
        <React.Fragment>
        { project.project == "Other" ? (
          <div className="buttons" onClick={() => this.chooseProject(project.project, project.price)} key={project._id}>
            <p className="buttons-title">{project.project}</p>
            { this.state.other ? (
              <React.Fragment>
                <input className="inputs" type="text" value={this.state.otherProj} placeholder="e.g. T-shirt Design" onChange={e => this.inputText(e, "otherProj")} />
                <button onClick={() => this.chooseProject(this.state.otherProj, project.price)}>&#62;</button>
              </React.Fragment>
              ): null
            }
            <p className="buttons-price">{project.price}</p>
            <p className="buttons-desc">{project.description}</p>
          </div>
          ) : (
          <div className="buttons" onClick={() => this.chooseProject(project.project, project.price)} key={project._id}>
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
        <div className="question-sec">
          { this.state.steps === 1 ? (
            <div>
              <p className="questions-header">How complex would you like your {this.state.projectsChosen[0].project.toLowerCase()} be?</p>
              { this.state.projectsChosen[0].project === "Custom Logo" ? (
                <div>
                  <div className="buttons" onClick={() => this.chooseComplexity("Simple", 0)}>
                    <p className="buttons-title">Simple</p>
                    <p className="buttons-price">+$0</p>
                    <p className="buttons-desc">Has two or less elements for your logo.</p>
                  </div>
                  <div className="buttons" onClick={() => this.chooseComplexity("Complicated", 50)}>
                    <p className="buttons-title">Complicated</p>
                    <p className="buttons-price">+$50</p>
                    <p className="buttons-desc">Has two or more elements for your logo.</p>
                  </div>
                </div>
                ) : this.state.projectsChosen[0].project === "Business Card" ? (
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
                ) : this.state.projectsChosen[0].project === "Website" ? (
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
              <p className="questions-minor">What is your budget for this {this.state.projectsChosen[0].project.toLowerCase()}?</p>
              <input className="inputs" type="text" placeholder="e.g. $500" onChange={e => this.inputText(e, "projBudget")} value={this.state.projInfo.projBudget} />
              </div>
              <div style={{ display: "inline-block" }}>
              <p className="questions-minor">Do you have a timeline for this project?</p>
              <input className="inputs" type="text" placeholder="e.g. 1 month" onChange={e => this.inputText(e, "projTimeline")} value={this.state.projInfo.projTimeline} />
              </div>
              <p className="questions-minor">Describe your project</p>
              <textarea className="textarea" rows="6" placeholder="Describe Project Here" onChange={e => this.inputText(e, "projDesc")} value={this.state.projInfo.projDesc} />
              <div className="next-button" onClick={() => this.noInput("projDesc")}>Next</div>
            </div>
            ) : this.state.steps === 3 ? (
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
              <div className="next-button" onClick={() => this.noInput("primColor")}>Next</div>
            </div>
            ) : this.state.steps === 4 ? (
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
              <div className="next-button" onClick={() => this.noInput("businessName")}>Next</div>
            </div>
            ) : this.state.steps === 5 ? (
            <div>
              <p className="questions-header">Want to add another project?</p>
              <div className="buttons" onClick={() => this.addProject("yes")}>Yup! Sign me up for another one</div>
              <div className="buttons" onClick={() => this.addProject("no")}>Nope! I'm good to go</div>
            </div>
            ) : this.state.steps === 6 ? (
            <div>
              <p className="questions-header">Contact Information</p>
              <div>
                <p className="questions-minor">Your Name:</p>
                <input className="inputs" type="text" placeholder="e.g. John Smith" onChange={e => this.inputText(e, "contactName")} value={this.state.contactInfo.contactName} />
              </div>
              <div style={{ display: "inline-block", marginRight: 50 }}>
                <p className="questions-minor">Your Email:</p>
                <input className="inputs" type="text" placeholder="e.g. thegraphicjar@gmail.com" onChange={e => this.inputText(e, "contactEmail")} value={this.state.contactInfo.contactEmail} />
              </div>
              <div style={{ display: "inline-block", marginRight: 50 }}>
                <p className="questions-minor">Your Phone Number:</p>
                <input className="inputs" type="text" placeholder="e.g. (123)456-7890" onChange={e => this.inputText(e, "contactNumber")} value={this.state.contactInfo.contactNumber} />
              </div>
              <p className="questions-minor">Message:</p>
              <textarea className="textarea" rows="6" placeholder="Add Message Here" onChange={e => this.inputText(e, "contactMessage")} value={this.state.contactInfo.contactMessage} />
            </div>
            ) : (
            <div>
              <p className="questions-header">What would you like to start with us?</p>
              {projectsList}
            </div>
           ) 
          }
          {/*back button*/}
          <div>
            { this.state.steps > 0 ?
            <div className="back-button" onClick={() => this.prevStep()}>Back</div>
            : null
            }
          </div>
        </div>
        {/*project summary*/}
        <div className="summary-column">
          <p className="summary-title">Project Summary</p>
          { projChosen ? (
            <React.Fragment>
              <p className="category-title" onClick={() => this.goToStep(0)}>Project</p>
              <p className="category-desc">{this.state.projectsChosen[0].project} +${this.state.projectsChosen[0].price}</p>
            </React.Fragment>
            ) : null
          }
          { compChosen ? (
            <React.Fragment>
              <p className="category-title" onClick={() => this.goToStep(1)}>Complexity</p>
              <p className="category-desc">{this.state.complexityChosen[0].complexity} +${this.state.complexityChosen[0].price}</p>
            </React.Fragment>
            ) : null
          }
          { descChosen ?
            <p className="category-title" onClick={() => this.goToStep(2)}>Project Info</p> 
            : null
          }
          { colorChosen ? (
            <React.Fragment>
              <p className="category-title" onClick={() => this.goToStep(3)}>Color</p>
              <p className="category-desc">{this.state.primColor}</p>
              <p className="category-desc">{this.state.secColor}</p>
            </React.Fragment>
            ) : null
          }
          { businessChosen ? (
            <React.Fragment>
              <p className="category-title" onClick={() => this.goToStep(4)}>Business Information</p>
            </React.Fragment>
            ) : null
          }
          { contactChosen ? (
            <React.Fragment>
              <p className="category-title" onClick={() => this.goToStep(5)}>Contact Information</p>
            </React.Fragment>
            ) : null
          }
          {/*price*/}
          <div className="est-price">
            Estimated Starting Price: 
            <span style={{ display: "block", fontSize: 34 }}>${this.state.finalPrice}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
