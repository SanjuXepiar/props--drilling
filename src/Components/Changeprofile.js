import { useState } from "react";
export const Changeprofile = (props) => {
  const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setUsername(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
