import React, { Component } from 'react';
// import { _loadProjects } from './services/fetchCalls';
import projectsJSON from './projects.json';
import { SketchPicker } from 'react-color';

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
      complexityChosen: [{
        complexity: null,
        price: null
      }],
      primColor: "",
      secColor: "",
      projBudget: "",
      projTimeline: "",
      projDesc: "",
      businessName: "",
      businessWeb: "",
      businessDesc: "",
      businessSlogan: "",
      businessAud: ""
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
    this.setState({ steps: this.state.steps - 1});
  }

  // project functions
  chooseFirstProject = (project, price) => {
    if (this.state.projectsChosen[0].project != project) {
      this.setState({ complexityChosen: [
        {
          complexity: null,
          price: null
        }
      ]})
    }
    // this.state.projectsChosen.push(project);
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

  noInput = (value, state) => {
    switch (value == "") {
      case state == "primColor":
        this.setState({ primColor: "No Colors"});
        break;
      case state == "projDesc":
        this.setState({ projDesc: "No Input" });
        break;
      case state == "businessName":
        this.setState({ businessName: "No Input" }); 
    }
    this.nextStep();
  }

  // company functions
  inputText = (e, state) => {
    switch (state) {
      case "projBudget":
        this.setState({ projBudget: e.target.value });
        break;
      case "projTimeline":
        this.setState({ projTimeline: e.target.value });
        break;
      case "projDesc":
        this.setState({ projDesc: e.target.value });
        break;
      case "businessName":
        this.setState({ businessName: e.target.value });
        break;
      case "businessWeb":
        this.setState({ businessWeb: e.target.value });
        break;
      case "businessDesc":
        this.setState({ businessDesc: e.target.value });
        break;
      case "businessSlogan":
        this.setState({ businessSlogan: e.target.value });
        break;
      case "businessAud":
        this.setState({ businessAud: e.target.value });
    }
  }

  render() {
    const projChosen = this.state.projectsChosen[0].project != null;
    const compChosen = this.state.complexityChosen[0].complexity != null;
    const colorChosen = this.state.primColor.length > 0;
    const descChosen = this.state.projDesc.length > 0 || this.state.projBudget.length > 0 || this.state.projTimeline.length > 0;
    const nameChosen = this.state.businessName.length > 0;

    const projectsList = this.state.projects.map(project => {
      return <button onClick={() => this.chooseFirstProject(project.project, project.price)} key={project._id}>{project.project}</button>
    });

    return (
      <div>
        <div>
          Estimated Starting Price: ${this.state.finalPrice}
        </div>
        <div>
          { this.state.steps === 0 ? (
            <div>
              <p>What would you like to start with us?</p>
              {projectsList}
            </div>
            ) : this.state.steps === 1 ? (
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
              <p>What's your two main colors? It's fine if you have only one color</p>
              <p>Primary</p>
              <SketchPicker color={this.state.primColor} onChange={this.choosePrimColor} />
              { this.state.primColor.split('')[0] == "#" ? (
                <div>
                  <p>Secondary</p>
                  <SketchPicker color={this.state.secColor} onChange={this.chooseSecColor} />
                  <button onClick={() => this.cancelColor()}>Cancel Color</button>
                </div>
                ): null
              }
              <button onClick={() => this.noInput(this.state.primColor, "primColor")}>&#62;</button>
            </div>
            ) : this.state.steps === 3 ? (
            <div>
              <p>What is your budget for this {this.state.projectsChosen[0].project.toLowerCase()}?</p>
              <input type="text" placeholder="Budget" onChange={e => this.inputText(e, "projBudget")} value={this.state.projBudget} />
              <p>Do you have a timeline for this project?</p>
              <input type="text" placeholder="Budget" onChange={e => this.inputText(e, "projTimeline")} value={this.state.projTimeline} />
              <p>Is there anything specific about your project that you'd like to add?</p>
              <textarea rows="10" style={{ width: "40%" }} placeholder="Comment here" onChange={e => this.inputText(e, "projDesc")} value={this.state.projDesc} />
              <button onClick={() => this.noInput(this.state.projDesc, "projDesc")}>&#62;</button>
            </div>
            ) : this.state.steps === 4 ? (
            <div>
              <p>Tell Us About Your Business</p>
              <p>What's the name of your business?</p>
              <input type="text" placeholder="Name of business" onChange={e => this.inputText(e, "businessName")} value={this.state.businessName} />
              <p>Do you have a website for your business?</p>
              <input type="text" placeholder="Website" onChange={e => this.inputText(e, "businessWeb")} value={this.state.businessWeb} />
              <p>What is your business?</p>
              <textarea rows="10" style={{ width: "40%" }} placeholder="Comment here" onChange={e => this.inputText(e, "businessDesc")} value={this.state.businessDesc} />
              <p>Do you have a motto/slogan?</p>
              <textarea rows="4" style={{ width: "40%" }} placeholder="Comment here" onChange={e => this.inputText(e, "businessSlogan")} value={this.state.businessSlogan} />
              <p>Who is your target audience?</p>
              <input type="text" placeholder="Audience" onChange={e => this.inputText(e, "businessAud")} value={this.state.businessAud} />
              <button onClick={() => this.noInput(this.state.businessName, "businessName")}>&#62;</button>
            </div>
            ) : null
          }
        </div>
        {/*project summary*/}
        <div>
          { projChosen ? (
            <div>
              <p onClick={() => this.goToStep(0)}>Project</p>
              <p>{this.state.projectsChosen[0].project} +${this.state.projectsChosen[0].price}</p>
            </div>
            ) : null
          }
          { compChosen ? (
            <div>
              <p onClick={() => this.goToStep(1)}>Complexity</p>
              <p>{this.state.complexityChosen[0].complexity} +${this.state.complexityChosen[0].price}</p>
            </div>
            ) : null
          }
          { colorChosen ? (
            <div>
              <p onClick={() => this.goToStep(2)}>Color</p>
              <p>{this.state.primColor}</p>
              <p>{this.state.secColor}</p>
            </div>
            ) : null
          }
          { descChosen ?
            <p onClick={() => this.goToStep(3)}>Project Info</p> 
            : null
          }
          { nameChosen ? (
            <div>
              <p onClick={() => this.goToStep(4)}>Business Information</p>
            </div>
            ) : null
          }
        </div>
        {/*next and prev button*/}
        <div>
          <button onClick={() => this.prevStep()}>&#60;</button>
        </div>
      </div>
    );
  }
}

export default App;
