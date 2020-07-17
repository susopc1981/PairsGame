import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SelectSkill from "./components/SelectSkill";
import Table from "./components/Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skill: "4x4", images: [] };
  }

  calculateArrays = (skill) => {
    let array = [];
    const finalArray = [];
    for (let i = 1; i < Number(skill) + 1; i++) {
      array.push(i);
    }
    array = array.sort(() => Math.random() - 0.5);
    array.forEach((value) => {
      finalArray.push(Math.ceil(value / 2));
    });
    return finalArray;
  };

  componentDidMount = () => {
    const data = this.state.skill;
    const finalData = Number(data[0]) * Number(data[2]);
    const array = this.calculateArrays(finalData);
    this.setState({ skill: data, images: array });
  };

  HandleOnChangeSkill = (event) => {
    const data = event.target.value;
    const finalData = Number(data[0]) * Number(data[2]);
    const array = this.calculateArrays(finalData);
    this.setState({ skill: data, images: array });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Encuentra las parejas</h2>
              <SelectSkill onChange={this.HandleOnChangeSkill} />
              <Table skill={this.state.skill} data={this.state.images} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
