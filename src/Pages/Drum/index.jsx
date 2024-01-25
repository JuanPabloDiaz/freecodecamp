import DrumPad from "./DrumPad.jsx";
import Layout from "@/Components/Layout/index.jsx";
import { useEffect, useState } from "react";
import { FaDrum } from "react-icons/fa";

function Drum() {
  const [activeKey, setActiveKey] = useState("");

  // enable keyboard input for drum pads
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playSound(e.key.toUpperCase());
      // console.log("key: ", e.key);
    });
  }, []);

  const drumPads = [
    {
      triggerKey: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      triggerKey: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      triggerKey: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      triggerKey: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      triggerKey: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      triggerKey: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      triggerKey: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      triggerKey: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      triggerKey: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    // console.log("audio: ", audio);
    audio.play();

    setActiveKey(selector);
  }

  return (
    <>
      <Layout>
        <div className="relative mb-4 flex items-center justify-center gap-4">
          <FaDrum className="h-8 w-8" />
          <h1 className="text-md font-medium sm:text-xl">Drum Machine</h1>
          <FaDrum className="h-8 w-8" />
        </div>
        <div
          id="drum-machine"
          className=" rounded-lg border-2 border-black bg-[#4C4B51] p-6 shadow-md shadow-[#4C4B51]"
        >
          <div
            id="display"
            className="m-2 flex h-10 w-60 justify-center rounded-lg bg-[#08080A] p-2 text-white"
          >
            {activeKey}
          </div>
          <div className="grid grid-flow-col grid-rows-3 gap-4 ">
            {drumPads.map((drum) => (
              <DrumPad
                key={drum.src}
                id={drum.src}
                className="drum-pad"
                triggerKey={drum.triggerKey}
                onClick={() => playSound(drum.triggerKey)}
                src={drum.src}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Drum;
