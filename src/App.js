import React from "react";
import ToDoList from "./components/TodoComponents/ToDoList";
import ToDoForm from "./components/TodoComponents/ToDoForm";

class App extends React.Component {
  state = {
    error: "",
    textInput: "",
    toDoList: []
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("state")));
  }

  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }

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
    return (
      <div id="App">
        <div className="ui two column centered grid container">
          <div className="row">
            <div className="column">
              <h2 class="ui center aligned icon header">
                <i class="circular tasks icon"></i>
                Let me do this!
              </h2>
            </div>
          </div>
          <ToDoForm
            textInput={this.state.textInput}
            error={this.state.error}
            addNewItem={this.addNewItem}
            clearCompletedItems={this.clearCompletedItems}
            handleInputChange={this.handleInputChange}
          />
          <ToDoList
            toDoList={this.state.toDoList}
            markCompleted={this.markCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
