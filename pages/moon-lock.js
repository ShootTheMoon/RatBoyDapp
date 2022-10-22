// React Imports
import { useContext, useState } from "react";
//Component Imports
import StandardLock from "../components/Assets/MoonLock/StandardLock";
import GradientButton from "../components/Assets/Buttons/GradientButton";
// Context Imports
import { GlobalContext, ThemeContext } from "./_app";

const MoonLock = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main>
      <StandardLock />
    </main>
  );
};

export default MoonLock;
