import React from "react";

class App extends React.Component {
  state = {
    error: "",
    textInput: "",
    toDoList: []
  };

  handleInputChange = e => {
    this.setState({
      ...this.state,
      textInput: e.target.value
    });
  };

  addNewItem = e => {
    e.preventDefault();

    if (!this.state.textInput) {
      this.setState({ ...this.state, error: "You must enter a task name!" });
    } else {
      this.setState({
        ...this.state,
        textInput: "",
        error: "",
        toDoList: [
          ...this.state.toDoList,
          { task: this.state.textInput, id: Date.now(), completed: false }
        ]
      });
    }
  };

  markCompleted = id => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    });
  };

  clearCompletedItems = () => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.filter(item => item.completed === false)
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui two column centered grid">
        <div className="row">
          <div className="column">
            <form onSubmit={this.addNewItem} onReset={this.clearCompletedItems}>
              <div className="ui fluid action input">
                <input
                  onChange={this.handleInputChange}
                  value={this.state.textInput}
                  type="text"
                  placeholder="new item..."
                />
                <button type="submit" className="ui teal button">
                  Add Item
                </button>
                <button type="reset" className="ui button">
                  Clear Completed Tasks
                </button>
              </div>
              {this.state.error && (
                <div class="ui red message">{this.state.error}</div>
              )}
            </form>
          </div>
        </div>
        <div className="row">
          <div className="column">
            {this.state.toDoList.map(item => (
              <div
                className={`ui fluid ${
                  item.completed ? `green inverted` : ""
                } vertical menu`}
              >
                <a
                  key={item.id}
                  className="item"
                  onClick={() => this.markCompleted(item.id)}
                >
                  {item.task}
                  {item.completed ? <i className="check icon white"></i> : null}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
