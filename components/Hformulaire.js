import React from 'react';
import {DateTimePicker, TimePicker} from '@material-ui/pickers';
import {Checkbox, TextField} from "@material-ui/core";
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import Autocomplete from "@material-ui/lab/Autocomplete";
import {envies, environnements, villes} from "../pages/api/globalVariables";
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';


const icon = <CheckBoxOutlineBlankOutlinedIcon  fontSize="small" />;
const checkedIcon = <CheckBoxOutlinedIcon fontSize="small" />;


//Envies + environnement
export function CheckboxesTags(props) {
    let optionList = envies;
    if(props.id === "environnement"){
        optionList = environnements;
    }
    return (
        <div>
            <Autocomplete
                {...props}
                size={'small'}
                multiple
                limitTags={1}
                noOptionsText={'Veuillez taper un autre mot'}
                autoHighlight
                options={optionList}
                disableCloseOnSelect
                getOptionLabel={(option) => option}
                renderOption={(option, { selected }) => (
                    <React.Fragment key={option}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        <p>{option}</p>
                    </React.Fragment>
                )}
                style={{ width: 200,marginLeft: 10, margin: 10}}
                renderInput={(params) => (
                    <TextField {...params} label={props.label} variant="outlined"/>
                )}
            />
        </div>
    );
}

//VILLE
export function HinputAutocompletion(props){
    return (
        <div>
            <Autocomplete
                size={"small"}
                {...props}
                options={villes}
                autoHighlight
                getOptionLabel={(option) => option}
                style={{ width: 200, margin:10}}
                renderInput={(params) => <TextField {...params} label={props.label} placeholder={props.placeholder} variant="outlined" />}
                renderOption={(option, { inputValue }) => {
                    const matches = match(option, inputValue);
                    const parts = parse(option, matches);

                    return (
                        <div>
                            {parts.map((part, index) => (
                                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                    {part.text}
                                </span>
                            ))}
                        </div>
                    );
                }}

            />
        </div>
    );
}


//DUREE
export function HTimePickers(props){
    return(
        <TimePicker
                {...props}
                clearable="true"
                size={"small"}
                variant="inline"
                inputVariant={"outlined"}
                style={{width:200, margin:10}}
                format={"HH:mm "}
                allowKeyboardControl
            />
    );
}

//date depart et date retour
function Hformulaire(props) {
    return (
            <DateTimePicker
                {...props}
                inputVariant={"outlined"}
                variant="inline"
                ampm={false}
                size={"small"}
                style={{width:200, margin:10}}
                onError={console.log}
                disablePast
                format="dd/MM/yyyy à hh:mm"
            />
            );
}

export default Hformulaire;
