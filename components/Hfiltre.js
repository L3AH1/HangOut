import React from "react";
import {Button, ButtonGroup, Dropdown, DropdownButton, SplitButton} from "react-bootstrap";
import {variableFormulaire} from "../pages/api/globalVariables";


function Hfiltre(){
    const {ville,dateDepart,dateRetour,envie,environnement,duree} = {...variableFormulaire};
    const listEnvies = envie.map((env) =>
        <Dropdown.Item key={env}>{env}</Dropdown.Item>
    )
    const listEnvironnements = environnement.map((env) =>
        <Dropdown.Item key={env}>{env}</Dropdown.Item>
    )
    return(
        <>
            <ButtonGroup>
                {ville && <Button variant="outline-secondary">{ville}</Button>}

                {envie.length > 0 &&
                <DropdownButton as={ButtonGroup} title="Envies" id="bg-nested-dropdown" variant="outline-secondary">
                    {listEnvies}
                </DropdownButton>
                }

                {dateDepart && <Button variant="outline-secondary">{dateDepart}</Button>}
                {dateRetour && <Button variant="outline-secondary">{dateRetour}</Button>}

                {environnement.length > 0 &&
                <DropdownButton as={ButtonGroup} title="Environnements" id="bg-nested-dropdown" variant="outline-secondary">
                    {listEnvironnements}
                </DropdownButton>}

                {duree && <Button variant="outline-secondary">{duree}</Button>}
            </ButtonGroup>
        </>
    );
}

export default Hfiltre;
