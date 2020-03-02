import React from "react";
import ToDo from "./ToDo";

class ToDoList extends React.Component {
  render() {
    const { toDoList, markCompleted } = this.props;

    return (
      <div className="row">
        <div className="column">
          <h4 class="ui horizontal divider header">
            <i class="sticky note outline chart icon"></i>
            Your list
          </h4>
          {toDoList.length > 0 ? (
            <div className="ui vertical fluid buttons">
              {toDoList.map(item => {
                return (
                  <ToDo
                    key={item.id}
                    item={item}
                    markCompleted={markCompleted}
                  />
                );
              })}
            </div>
          ) : (
            "There is nothing in the list!"
          )}
        </div>
      </div>
    );
  }
}

export default ToDoList;
