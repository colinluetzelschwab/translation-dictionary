import {Grid} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import '@axa-ch/modal';
import '@axa-ch/input-text';
import '@axa-ch/table';
import '@axa-ch/button';
import '@axa-ch/heading';
import AXAModalReact from "./AXAModalReact";

export default function TranslationWrapper() {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const [openUpdate, setOpenUpdate] = useState(false)
    const [isModalCreateOpen, setModalCreateOpen] = useState(false)
    const [translations, setTranslations] = useState([])
    const [newTranslationValue, setNewTranslationValues] = useState({});
    const [toUpdateTranslationValue, setToUpdateTranslationValue] = useState({});

    const BASE_URL = "http://localhost:8080/translation"


    useEffect(() => {
        loadAllTranslations()
    }, [])

    function loadAllTranslations() {
        const requestOptions = {
            method: 'GET',
            headers: ({
                'Content-Type': 'application/json'
            })
        };

        fetch(BASE_URL, requestOptions)
            .then(response => response.json())
            .then(
                data => setTranslations(data)
            )
    }

    function split_at_index(value, index) {
        return value.substring(0, index) + " " + value.substring(index);
    }

    const handleCreateNewTranslation = (event) => {
        setNewTranslationValues(newTranslationValue => {
            return {...newTranslationValue, [event.target.name]: event.target.value};
        });
    }

    function handleSubmitCreateNewTranslation() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTranslationValue)

        };

        fetch(BASE_URL, requestOptions)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                }
            ).finally(() => {
            setModalCreateOpen(false)
            loadAllTranslations()
        })
    }

    function deleteTranslation(id) {
        const requestOptions = {
            method: 'DELETE',
            headers: ({
                'Content-Type': 'application/json'
            })
        };

        fetch(BASE_URL + "/" + id, requestOptions)
            .finally(() => loadAllTranslations())
    }

    function handleOpenUpdate(e) {
        const tmpTranslationEntry = translations.find(tr => tr.id == e.target.id)
        setToUpdateTranslationValue(tmpTranslationEntry)
        setOpenUpdate(true)
    }

    function handleUpdateTranslationInput(event) {
        console.log("handleUpdateTranslationInput")
        setToUpdateTranslationValue(toUpdateTranslationValue => {
            return {...toUpdateTranslationValue, [event.target.name]: event.target.value};
        });
    }

    function handleSubmitUpdateTranslation() {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(toUpdateTranslationValue)
        };

        fetch(BASE_URL + "/" + toUpdateTranslationValue.id, requestOptions)
            .then(response => response.json())
            .then(
                data => {
                    let tmpTranslations = translations.filter(tr => tr.id != toUpdateTranslationValue.id)
                    tmpTranslations.push(data)
                    console.log('update')
                    setTranslations(tmpTranslations)
                }
            ).finally(() => {
            setOpenUpdate(false)
            setToUpdateTranslationValue({})
        })
    }


    return (
        <div className="translationWrapper">
            <Grid container direction={"row"} className={"gridContainer"}>
                <Grid item xs={2}>
                    <axa-button onClick={handleOpen}> Neue Übersetzung</axa-button>

                </Grid>
            </Grid>
            <axa-table innerscroll="500" maxheight="450">
                <table>
                    <thead>
                    <tr>
                        <th>App-ID</th>
                        <th>Text-ID</th>
                        <th>Kontext</th>
                        <th>Stage</th>
                        <th>DE</th>
                        <th>EN</th>
                        <th>FR</th>
                        <th>IT</th>
                        <th>zuletzt geändert</th>
                        <td></td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    {translations.map(tr =>
                        <tr>
                            <td>{tr.textId.length > 14 ? split_at_index(tr.textId, (tr.textId.length / 2)) : tr.textId}</td>
                            <td>{tr.appId}</td>
                            <td>{tr.context}</td>
                            <td>{tr.stage}</td>
                            <td>{tr.de}</td>
                            <td>{tr.fr}</td>
                            <td>{tr.it}</td>
                            <td>{tr.en}</td>
                            <td>{tr.lastCall}</td>
                            <td>
                                <axa-button id={tr.id} variant="default" onClick={e => handleOpenUpdate(e)}>aktualisieren</axa-button>
                            </td>
                            <td>
                                <axa-button variant="red" onClick={() => deleteTranslation(tr.id)}>löschen</axa-button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </axa-table>

            <AXAModalReact open={open} small onClose={() => setOpen(false)}>
                <axa-heading rank="4">Add Translation</axa-heading>

                <div className={"newTranslationInputField"}>
                    <axa-input-text placeholder="Text-ID" label="Text-ID"
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text placeholder="App-ID" label="App-ID"
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text placeholder="Kontext" label="Kontext"
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text placeholder="Stage" label="Stage"
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text placeholder="DE" label="DE"
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text placeholder="FR" label="FR"
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text placeholder="IT" label="IT"
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text placeholder="EN" label="EN"
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div>
                    <axa-button variant="red" onClick={() => setOpen(!open)}
                                className={"newTranslationEntryButton"}>abbrechen
                    </axa-button>
                    <axa-button onClick={() => handleSubmitCreateNewTranslation()}
                                className={"newTranslationEntryButton"}>speichern
                    </axa-button>
                </div>


            </AXAModalReact>

            <AXAModalReact open={openUpdate} small onClose={() => {
                setOpenUpdate(false)
                setToUpdateTranslationValue({})
            }}>
                <axa-heading rank="4">Update</axa-heading>
                <div className={"newTranslationInputField"}>
                    <axa-input-text label="Text-ID"
                                    value={toUpdateTranslationValue.textId}
                                    onKeyUp={e => handleUpdateTranslationInput(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text label="App-ID"
                                    value={toUpdateTranslationValue.appId}
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text label="Kontext"
                                    value={toUpdateTranslationValue.context}
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text label="Stage"
                                    value={toUpdateTranslationValue.stage}
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text label="DE"
                                    value={toUpdateTranslationValue.de}
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text label="FR"
                                    value={toUpdateTranslationValue.fr}
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text label="IT"
                                    value={toUpdateTranslationValue.it}
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div className={"newTranslationInputField"}>
                    <axa-input-text label="EN"
                                    value={toUpdateTranslationValue.en}
                                    onKeyUp={e => handleCreateNewTranslation(e)}
                    />
                </div>

                <div>
                    <axa-button variant="red" onClick={() => setOpenUpdate(!openUpdate)}
                                className={"newTranslationEntryButton"}>abbrechen
                    </axa-button>
                    <axa-button onClick={() => handleSubmitUpdateTranslation()}
                                className={"newTranslationEntryButton"}>speichern
                    </axa-button>
                </div>
            </AXAModalReact>


        </div>
    );
}