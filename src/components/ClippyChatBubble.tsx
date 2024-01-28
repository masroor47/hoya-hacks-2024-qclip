import React from "react";
import { Typography } from "@mui/material";
import "../App.css";

interface ClippyChatBubbleProps {
  text?: string;
}

export const ClippyChatBubble = ({ text }: ClippyChatBubbleProps) => {
  // Initialize wordElements as null
  let wordElements = null;

  // If text is not null or undefined, split into words and map to spans
  if (text) {
    const words = text.split(" ");
    wordElements = words.map((word, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>
        {word + "\u00A0"}
      </span>
    ));
  }

  return (
    <div>
      {wordElements && (
        <div className="clippy-chat-bubble">
          <Typography variant="h5" className="typing-animation">
            {wordElements}{" "}
          </Typography>
        </div>
      )}
    </div>
  );
};
