import React from "react";

class ToDoForm extends React.Component {
  render() {
    const {
      error,
      textInput,
      addNewItem,
      clearCompletedItems,
      handleInputChange
    } = this.props;

    return (
      <div className="row">
        <div className="column">
          <form onSubmit={addNewItem} onReset={clearCompletedItems}>
            <div className="ui fluid action input">
              <input
                onChange={handleInputChange}
                value={textInput}
                type="text"
                placeholder="new item..."
              />
              <button type="submit" className="ui teal button">
                Add Task
              </button>
              <button type="reset" className="ui button">
                Clear Completed Tasks
              </button>
            </div>
            {error && <div class="ui red message">{error}</div>}
          </form>
        </div>
      </div>
    );
  }
}

export default ToDoForm;
