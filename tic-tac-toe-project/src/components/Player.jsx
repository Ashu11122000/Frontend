import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        const [playerName, setPlayerName] = useState(initialName);
        setIsEditing(editing => !editing);    // => schedules a state update to true
        // setIsEditing(editing => !editing);    // => schedules a state update to true
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = "Edit";


    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
        // btnCaption = "Save";
    }

    return (
        <li>
            {playerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}