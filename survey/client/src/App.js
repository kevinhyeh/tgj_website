import React, { Component } from 'react';
import { _loadProjects } from './services/fetchCalls';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      steps: 0,
      finalPrice: 0,
      projectsChosen: [],
      companyName: '',
      complexityChosen: []
    };
  };

  componentDidMount() {
    return _loadProjects().then(resultingJSON => this.setState({ projects: resultingJSON }))
  }

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

  chooseFirstProject = (project, price) => {
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

  inputName = (e) => {
    this.setState({ companyName: e.target.value });
  }

  inputNameBut = () => {
    if (this.state.companyName == "") {
      this.setState({ companyName: "No Input"});
    }
    this.nextStep();
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
  } 

  render() {
    const projChosen = this.state.projectsChosen.length === 1;
    const nameChosen = this.state.companyName.length > 0;
    const compChosen = this.state.complexityChosen.length === 1;

    const projectsList = this.state.projects.map(project => {
      return <button onClick={() => this.chooseFirstProject(project.project, project.price)} key={project.id}>{project.project}</button>
    });

    return (
      <div>
        <div>
          Estimated Starting Price: ${this.state.finalPrice}
        </div>
        <div>
          { this.state.steps == 0 ? (
            <div>
              <p>What would you like to start with us?</p>
              {projectsList}
            </div>
            ) : this.state.steps == 1 ? (
            <div>
              <p>What's your company?</p>
              <input type="text" placeholder="Your Company Name" onChange={e => this.inputName(e)} value={this.state.companyName} />
              <button onClick={() => this.inputNameBut()}>&#62;</button>
            </div>
            ) : this.state.steps == 2 ? (
              <div>
                <p>How complex would you like your {this.state.projectsChosen[0].project.toLowerCase()} be?</p>
                <button onClick={() => this.chooseComplexity("Simple", 0)}>Simple +$0</button>
                <button onClick={() => this.chooseComplexity("Moderate", 20)}>Moderate +$20</button>
                <button onClick={() => this.chooseComplexity("Complicated", 50)}>Complicated +$50</button>
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
          { nameChosen ? (
            <div>
              <p onClick={() => this.goToStep(1)}>Company Name</p>
              <p>{this.state.companyName}</p>
            </div>
            ) : null
          }
          { compChosen ? (
            <div>
              <p onClick={() => this.goToStep(2)}>Complexity</p>
              <p>{this.state.complexityChosen[0].complexity} +${this.state.complexityChosen[0].price}</p>
            </div>
            ) : null
          }
        </div>
        {/*next and prev button*/}
        <div>
          <button onClick={() => this.prevStep()}>&#60;</button>
          <button onClick={() => this.nextStep()}>&#62;</button>
        </div>
      </div>
    );
  }
}

export default App;
