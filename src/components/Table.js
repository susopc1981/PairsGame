import React from "react";
import TableRow from "./TableRow";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: [], shown: 0, completed: [], showkey: [] };
    this.timeout = 0;
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ show: [], shown: 0, completed: [], showkey: [] });
      this.timeout = 0;
    }
  }

  HandleOnClickPhoto = (id, key) => {
    if (this.state.shown === 0) {
      this.setState({
        ...this.state,
        show: [id],
        shown: 1,
        showkey: [key],
      });
      return;
    }
    const data = this.state.completed.find((value) => value === id);
    if (this.state.show[0] === id || data) return;
    if (this.state.shown === 1) {
      if (key === this.state.showkey[0]) {
        this.setState({
          ...this.state,
          completed: [...this.state.completed, id, this.state.show[0]],
          shown: 0,
          show: [],
          showkey: [],
        });

        return;
      }
      this.setState({
        ...this.state,
        show: [...this.state.show, id],
        shown: 2,
      });
      this.timeout = setTimeout(() => {
        this.setState({ ...this.state, show: [], shown: 0 });
      }, 3000);
      return;
    }
    if (this.state.shown === 2) {
      clearTimeout(this.timeout);
      this.setState({ ...this.state, show: [id], shown: 1, showkey: [key] });
      return;
    }
  };

  render() {
    let data = [];
    const param1 = Number(this.props.skill[0]);
    const param2 = Number(this.props.skill[2]);
    let count = 0;
    for (let i = 0; i < param1; i++) {
      const rowArray = [];
      for (let j = 0; j < param2; j++) {
        rowArray.push(this.props.data[count]);
        count++;
      }
      data.push(
        <TableRow
          qty={param2}
          arr={rowArray}
          onClick={this.HandleOnClickPhoto}
          id={count}
          show={this.state.show}
          completed={this.state.completed}
        />
      );
    }
    if (this.props.data.length < 1) {
      return <></>;
    }
    return (
      <>
        <table className="table">
          <tbody>{data}</tbody>
        </table>
      </>
    );
  }
}

export default Table;
