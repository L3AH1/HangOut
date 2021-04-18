import React from "react";

/**
 * Input autocompletion of given suggestions
 * @return {JSX.Element} input autocomplete
 */
class Autocomplete extends React.Component {
    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput:"",
        };
    }

    /**
     * Updates the input value when there is a change
     * @function
     * @param {Event} e changed
     */
    onChange = e => {
        const suggestions  = this.props.suggestions;
        const userInput = e.currentTarget.value;

        //take only the suggestions which contain the value of the input
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };
    /**
     * Puts the suggestion cliked as value of the input
     * @function
     * @param {Event} e event clicked
     */
    onClick = e => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: this.state.filteredSuggestions[e.currentTarget.value]
        });
    };
    /**
     * Chooses a suggestion by keyboard
     * @function
     * @param {Event} e event on key down
     */
    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;
        /**
         * Return(Enter) key : puts the suggestion on key down as value of the input
         */
        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
            e.preventDefault();
        }
        // User pressed the up arrow, increment the index
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
                userInput
            }
        } = this;

        let suggestionsListComponent;
        //Show suggestions when the user types a value in the input
        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="absolute suggestions bg-white border border-solid border-400 border-t-0 list-none mt-0 max-h-20 overflow-y-auto w-40">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className = "";
                            // Customizes the activeSuggestion's style
                            if (index === activeSuggestion) {
                                className = "suggestion-active bg-gray-200 cursor-pointer";
                            }
                            // Puts the chain in the userInput to bold
                            const indexOfUserInput = suggestion.toLowerCase().indexOf(userInput.toLowerCase()) ;
                            const start = suggestion.substring(0,indexOfUserInput),
                                chainUserInput = suggestion.substring(indexOfUserInput ,indexOfUserInput + userInput.length),
                                end = suggestion.substring(indexOfUserInput + userInput.length);

                            return (
                                <li className={className + " hover:bg-gray-200 cursor-pointer"} key={suggestion} onClick={onClick} value={index}>
                                    {start}<strong>{chainUserInput}</strong>{end}
                                </li>
                            );
                        })}
                    </ul>
                );
            }
            //If there is no suggestion matching the user input
            else {
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
export default Autocomplete;
