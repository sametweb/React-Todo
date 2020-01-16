import React from "react";

class ToDo extends React.Component {
  render() {
    const { item, markCompleted } = this.props;
    const { id, task, completed } = item;

    return (
      <button
        className={`ui ${completed && `teal`} button`}
        onClick={() => markCompleted(id)}
      >
        <i className={`circle ${completed ? "check" : "outline"} icon`}></i>
        {task}
      </button>
    );
  }
}

export default ToDo;
