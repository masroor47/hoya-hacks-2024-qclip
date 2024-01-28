import { TextField } from "@mui/material";
import React from "react"; // Ensure React is in scope when using JSX
import "../App.css";

interface ChatInputProps {
  setClippyText: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const ChatInput = ({ setClippyText }: ChatInputProps) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      setClippyText("");
      // setClippyText(inputValue);
      setInputValue("");

      const url = "https://ajjadb.pythonanywhere.com/get-completion";
      const headers = {
        "Content-Type": "application/json",
      };
      const data = {
        content: inputValue,
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          const { content } = data.choices[0].message;
          setClippyText(content);
          console.log("TEST", content);
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <div className="chat-input">
      <TextField
        value={inputValue}
        variant="standard"
        fullWidth
        multiline
        rows={1}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        inputProps={{
          style: { fontSize: "1.5rem" },
        }}
        InputProps={{
          sx: {
            fontSize: "1.5rem",
            padding: "12px",
          },
        }}
        InputLabelProps={{
          sx: { fontSize: "1.25rem" },
        }}
      />
    </div>
  );
};
