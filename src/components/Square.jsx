import React from "react";
import classNames from "classnames";

export class Square extends React.Component {
  render() {
    const { className, onClick, children } = this.props;
    return (
      <button className={classNames("square", className )} onClick={onClick}>
        {children}
      </button>
    );
  }
}