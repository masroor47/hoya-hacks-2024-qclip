import React from "react";
import "./App.css";
import { ClippyScene } from "./components/ClippyScene";
import { ChatInput } from "./components/ChatInput";
import { LandingSection } from "./components/LandingSection";
import { useRef } from "react";
import { ClippyChatBubble } from "./components/ClippyChatBubble";
import { Typography } from "@mui/material";
import { useScroll } from "framer-motion";

function App() {
  const [ClippyText, setClippyText] = React.useState<string | undefined>(
    undefined
  );
  // const lorem =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum dignissimos mollitia non voluptatem temporibus itaque adipisci libero ullam reprehenderit asperiores porro quod molestias doloribus nihil quasi eius cupiditate exercitationem, earum inventore excepturi error autem similique. Tenetur sequi quas impedit deserunt modi, dolore eligendi magni quidem corrupti quo ea ex, aliquid animi vel totam odio eveniet? Odio similique molestiae quo recusandae esse laboriosam aliquam. Optio eum libero iure exercitationem illum commodi laborum provident, beatae quos consequatur in perferendis? Eaque tempore aliquam debitis ratione. Perferendis perspiciatis tenetur nam officia consequuntur eum aliquid nihil, earum molestias quisquam impedit deserunt est eius accusantium vero cumque neque voluptates inventore suscipit aperiam repellendus animi! Aliquid velit eveniet neque fuga dignissimos aspernatur odio culpa ab, aliquam est non possimus esse atque, assumenda sapiente? Facilis veritatis commodi praesentium consequuntur, dolorum rerum sint nisi adipisci laboriosam. Itaque voluptates omnis ab minus ipsam aspernatur dolore voluptas incidunt nobis laborum? Debitis, aliquam non quaerat eos provident nesciunt quae deleniti autem inventore dignissimos facilis, voluptate amet. Aliquam natus ab provident soluta praesentium vitae harum quo eaque ut vero, nam magnam quae earum iste consectetur deleniti, voluptates voluptatibus mollitia corrupti repellat perspiciatis a dolor eveniet! Inventore debitis est delectus, perferendis quis amet.";
  // const scrollContainerRef = useRef(null);
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
}

export default App;
