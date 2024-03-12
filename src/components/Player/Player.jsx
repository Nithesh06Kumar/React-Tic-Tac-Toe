import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onPlayerNameSet }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playername, setPlayerName] = useState(name);

  const handleSetPlayerName = (e) => {
    setPlayerName(e?.target?.value);
  };
  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      onPlayerNameSet(symbol, playername);
    }
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            onChange={handleSetPlayerName}
            value={playername}
            autoFocus
          />
        ) : (
          <span className="player-name">{playername}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
