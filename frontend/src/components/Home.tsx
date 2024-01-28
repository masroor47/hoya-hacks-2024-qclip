import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClippyScene } from "./ClippyScene";
import { ChatInput } from "./ChatInput";
import { LandingSection } from "./LandingSection";
import { useRef } from "react";
import { ClippyChatBubble } from "./ClippyChatBubble";
import { Typography } from "@mui/material";
import { useScroll } from "framer-motion";

const Home: React.FC = () => {
    const [ClippyText, setClippyText] = React.useState<string | undefined>(
        undefined
      );
    return (
    <div>
        <div>
            <LandingSection color="#8bafe5" />
        </div>
        <div style={{ position: "relative" }}>
            {!ClippyText && <h1 className="clippy-text">Ask Me Anything.</h1>}
            <ClippyScene />
            <ChatInput setClippyText={setClippyText} />
            <ClippyChatBubble text={ClippyText} />
        </div>
    </div>
    );
};

export default Home;
