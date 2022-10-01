import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    {
      this.setState({ term: e.target.value });
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    //TODO :make sure we call
    //callback from parent component
  };

  render() {
    return (
      <div
        className="search-bar ui segment"
        style={{
          margin: "10px",
        }}
      >
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label for="">VideoSearch</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
