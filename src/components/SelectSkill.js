import React from "react";

class SelectSkill extends React.Component {
  render() {
    return (
      <select onChange={this.props.onChange}>
        <option value="4x4" selected>
          4x4
        </option>
        <option value="6x4">6x4</option>
        <option value="6x6">6x6</option>
      </select>
    );
  }
}

export default SelectSkill;
