import React from "react";
import Image from "./Image";

class TableRow extends React.Component {
  render() {
    const data = [];
    for (let i = 0; i < Number(this.props.qty); i++) {
      data.push(
        <Image
          src={this.props.arr[i]}
          key={i + 1}
          onClick={this.props.onClick}
          show={this.props.show}
          completed={this.props.completed}
          id={(Number(this.props.id) - i).toString()}
        />
      );
    }
    return <tr>{data}</tr>;
  }
}

export default TableRow;
