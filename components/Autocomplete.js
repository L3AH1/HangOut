import React from "react";

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
    };
  }
  onChange = (e) => {
    const suggestions = this.props.suggestions;
    const userInput = e.currentTarget.value;

    //take only the suggestions which contain the value of the input
    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };
  onClick = (e) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: this.state.filteredSuggestions[e.currentTarget.value],
    });
  };
  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    //Return(Enter) key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
      e.preventDefault();
    }
    //Up Arrow key
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };
  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="absolute suggestions bg-white border border-solid border-400 border-t-0 list-none mt-0 max-h-20 overflow-y-auto w-40">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active bg-gray-200 cursor-pointer";
              }
              //Put the chain in the userInput to bold
              const indexOfUserInput = suggestion
                .toLowerCase()
                .indexOf(userInput.toLowerCase());
              const start = suggestion.substring(0, indexOfUserInput),
                chainUserInput = suggestion.substring(
                  indexOfUserInput,
                  indexOfUserInput + userInput.length
                ),
                end = suggestion.substring(indexOfUserInput + userInput.length);

              return (
                <li
                  className={className + " hover:bg-gray-200 cursor-pointer"}
                  key={suggestion}
                  onClick={onClick}
                  value={index}
                >
                  {start}
                  <strong>{chainUserInput}</strong>
                  {end}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions text-gray-500 absolute bg-white border border-solid border-400 border-t-0 w-auto">
            <p>Aucune ville trouvée 🙁</p>
          </div>
        );
      }
    }
    return (
      <div>
        <input
          id="ville"
          name="ville"
          type="text"
          placeholder="ex. Nice"
          className="focus:outline-none bg-transparent"
          required
          autoComplete="off"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </div>
    );
  }
}
