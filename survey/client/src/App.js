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

    const projChosen = this.state.projectsChosen[0].project != null;
    const compChosen = this.state.complexityChosen[0].complexity != null;
    const colorChosen = this.state.primColor.length > 0;
    const descChosen = projInfoState.projDesc.length > 0 || projInfoState.projBudget.length > 0 || projInfoState.projTimeline.length > 0;
    const businessChosen = busInfoState.businessName.length > 0 || busInfoState.businessWeb.length > 0 || busInfoState.businessDesc.length > 0 || busInfoState.businessSlogan.length > 0 || busInfoState.businessAud.length > 0;

    const projectsList = this.state.projects.map(project => {
      return (
        <React.Fragment>
        { project.project == "Other" ? (
          <div style={{ display: "inline-block", width: "200px", height: "200px", border: "1px solid #000", cursor: "pointer", padding: 10 }} onClick={() => this.chooseProject(project.project, project.price)} key={project._id}>
            <p>{project.project}</p>
            { this.state.other ? (
              <React.Fragment>
                <input type="text" value={this.state.otherProj} placeholder="Input Your Project" onChange={e => this.inputText(e, "otherProj")} />
                <button onClick={() => this.chooseProject(this.state.otherProj, project.price)}>&#62;</button>
              </React.Fragment>
              ): null
            }
            <p>{project.price}</p>
            <p>{project.description}</p>
          </div>
          ) : (
          <div style={{ display: "inline-block", width: "200px", height: "200px", border: "1px solid #000", cursor: "pointer", padding: 10 }} onClick={() => this.chooseProject(project.project, project.price)} key={project._id}>
            <p>{project.project}</p>
            <p>{project.price}</p>
            <p>{project.description}</p>
          </div>
          )
        }
        </React.Fragment>
      ) 
    });

    return (
      <div style={{ position: "relative", height: "100%"}}>
        {/*questions*/}
        <div style={{ width: "75%", height:"100%", display: "inline-block"}}>
          { this.state.steps === 1 ? (
            <div>
              <p>How complex would you like your {this.state.projectsChosen[0].project.toLowerCase()} be?</p>
              { this.state.projectsChosen[0].project === "Custom Logo" ? (
                <div>
                  <button onClick={() => this.chooseComplexity("Simple", 0)}>Simple +$0</button>
                  <button onClick={() => this.chooseComplexity("Complicated", 50)}>Complicated +$50</button>
                </div>
                ) : this.state.projectsChosen[0].project === "Business Card" ? (
                <div>
                  <button onClick={() => this.chooseComplexity("Single Side", 0)}>Single Side +$0</button>
                  <button onClick={() => this.chooseComplexity("Double Side", 100)}>Double Side +$100</button>
                </div>
                ) : this.state.projectsChosen[0].project === "Website" ? (
                <div>
                  <button onClick={() => this.chooseComplexity("Single Page", 0)}>Single Page +$0</button>
                  <button onClick={() => this.chooseComplexity("Multiple Pages", 200)}>Multiple Pages +$200</button>
                </div>
                ) : null
              }
            </div>
            ) : this.state.steps === 2 ? (
            <div>
              <p>What is your budget for this {this.state.projectsChosen[0].project.toLowerCase()}?</p>
              <input type="text" placeholder="Budget" onChange={e => this.inputText(e, "projBudget")} value={this.state.projInfo.projBudget} />
              <p>Do you have a timeline for this project?</p>
              <input type="text" placeholder="Timeline" onChange={e => this.inputText(e, "projTimeline")} value={this.state.projInfo.projTimeline} />
              <p>Describe your project</p>
              <textarea rows="10" style={{ width: "40%" }} placeholder="Comment here" onChange={e => this.inputText(e, "projDesc")} value={this.state.projInfo.projDesc} />
              <button onClick={() => this.noInput("projDesc")}>&#62;</button>
            </div>
            ) : this.state.steps === 3 ? (
            <div>
              <p>What are your business colors?</p>
              <p>Primary</p>
              <SketchPicker color={this.state.primColor} onChange={this.choosePrimColor} />
              { this.state.primColor.split('')[0] == "#" ? (
                <div>
                  <p>Secondary (It's alright if you only have one)</p>
                  <SketchPicker color={this.state.secColor} onChange={this.chooseSecColor} />
                  <button onClick={() => this.cancelColor()}>Cancel Color</button>
                </div>
                ): null
              }
              <button onClick={() => this.noInput("primColor")}>&#62;</button>
            </div>
            ) : this.state.steps === 4 ? (
            <div>
              <p>Tell Us About Your Business</p>
              <p>What's the name of your business?</p>
              <input type="text" placeholder="Name of business" onChange={e => this.inputText(e, "businessName")} value={this.state.businessInfo.businessName} />
              <p>Do you have a website for your business?</p>
              <input type="text" placeholder="Website" onChange={e => this.inputText(e, "businessWeb")} value={this.state.businessInfo.businessWeb} />
              <p>What is your business?</p>
              <textarea rows="10" style={{ width: "40%" }} placeholder="Comment here" onChange={e => this.inputText(e, "businessDesc")} value={this.state.businessInfo.businessDesc} />
              <p>Do you have a motto/slogan?</p>
              <textarea rows="4" style={{ width: "40%" }} placeholder="Comment here" onChange={e => this.inputText(e, "businessSlogan")} value={this.state.businessInfo.businessSlogan} />
              <p>Who is your target audience?</p>
              <input type="text" placeholder="Audience" onChange={e => this.inputText(e, "businessAud")} value={this.state.businessInfo.businessAud} />
              <button onClick={() => this.noInput("businessName")}>&#62;</button>
            </div>
            ) : this.state.steps === 5 ? (
            <div>
              <p>Want to add another project?</p>
              <button onClick={() => this.addProject("yes")}>Yup! Sign me up for another one</button>
              <button onClick={() => this.addProject("no")}>Nope! I'm good to go</button>
            </div>
            ) : this.state.steps === 6 ? (
            <div>
              <p>Contact Information</p>
              <p>Name:</p>
              <input type="text" placeholder="Your Name" onChange={e => this.inputText(e, "contactName")} value={this.state.contactInfo.contactName} />
              <p>Email:</p>
              <input type="text" placeholder="Your Email" onChange={e => this.inputText(e, "contactEmail")} value={this.state.contactInfo.contactEmail} />
              <p>Phone Number:</p>
              <input type="text" placeholder="Your Phone Number" onChange={e => this.inputText(e, "contactNumber")} value={this.state.contactInfo.contactNumber} />
              <p>Message:</p>
              <textarea rows="10" style={{ width: "40%" }} placeholder="Your Message" onChange={e => this.inputText(e, "contactMessage")} value={this.state.contactInfo.contactMessage} />
            </div>
            ) : (
            <div>
              <p>What would you like to start with us?</p>
              {projectsList}
            </div>
           ) 
          }
          {/*back button*/}
          <div>
            { this.state.steps > 0 ?
            <button onClick={() => this.prevStep()}>&#60;</button>
            : null
            }
          </div>
        </div>
        {/*project summary*/}
        <div style={{ width: "20%", display: "inline-block", position: "absolute", top: 0, left: "80%", height: "100%", backgroundColor: "#ddd" }}>
          <p style={{ margin: "20px auto", paddingBottom: "10px", textAlign: "center", fontSize: 20, fontWeight: "bold", borderBottom: "1px solid #000", width: "80%" }}>Project Summary</p>
          { projChosen ? (
            <React.Fragment>
              <p onClick={() => this.goToStep(0)}>Project</p>
              <p>{this.state.projectsChosen[0].project} +${this.state.projectsChosen[0].price}</p>
            </React.Fragment>
            ) : null
          }
          { compChosen ? (
            <React.Fragment>
              <p onClick={() => this.goToStep(1)}>Complexity</p>
              <p>{this.state.complexityChosen[0].complexity} +${this.state.complexityChosen[0].price}</p>
            </React.Fragment>
            ) : null
          }
          { descChosen ?
            <p onClick={() => this.goToStep(2)}>Project Info</p> 
            : null
          }
          { colorChosen ? (
            <React.Fragment>
              <p onClick={() => this.goToStep(3)}>Color</p>
              <p>{this.state.primColor}</p>
              <p>{this.state.secColor}</p>
            </React.Fragment>
            ) : null
          }
          { businessChosen ? (
            <React.Fragment>
              <p onClick={() => this.goToStep(4)}>Business Information</p>
            </React.Fragment>
            ) : null
          }
          {/*price*/}
          <div style={{ position: "fixed", bottom: 0, width: "100%", height: 80, backgroundColor: "green", color: "white", fontSize: 24, fontWeight: "bold" }}>
            Estimated Starting Price: 
            <span style={{ display: "block", fontSize: 34 }}>${this.state.finalPrice}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
