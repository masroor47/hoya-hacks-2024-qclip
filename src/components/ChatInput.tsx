import { TextField } from "@mui/material";
import React from "react"; // Ensure React is in scope when using JSX
import "../App.css";

interface ChatInputProps {
  setClippyText: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const ChatInput = ({ setClippyText }: ChatInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClippyText(event.target.value); // Update the state with the new input value
  };

  return (
    <div className="chat-input">
      <TextField
        variant="standard"
        fullWidth
        multiline
        rows={1}
        onChange={handleChange} // Add the onChange handler here
        inputProps={{
          style: { fontSize: "1.5rem" }, // Directly style the <input> element
        }}
        InputProps={{
          sx: {
            fontSize: "1.5rem", // Style the root of the input component
            padding: "12px", // Adjust the padding
          },
        }}
        InputLabelProps={{
          sx: { fontSize: "1.25rem" }, // If you have a label and want to adjust its size
        }}
      />
    </div>
  );
};
