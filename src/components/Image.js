import React from "react";

class Image extends React.Component {
  render() {
    const paired = this.props.completed.find(
      (value) => value === this.props.id
    );
    const data = this.props.show.find((value) => value === this.props.id);
    return (
      <>
        <td
          onClick={() => this.props.onClick(this.props.id, this.props.src)}
          id={this.props.id}
        >
          {!data && !paired ? (
            <img src="negro.jpg" width="150px" key={this.props.src} />
          ) : (
            <img
              src={this.props.src + ".jpg"}
              width="150px"
              key={this.props.src}
            />
          )}
        </td>
      </>
    );
  }
}

export default Image;
