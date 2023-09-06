import { useState, useEffect } from "react";
import "./styles.css";
import Lottie from "react-lottie";
import darkData from "../src/lotties/clear-night-moon";
import lightData from "../src/lotties/sunny-day";
import { Header } from "./components/Header";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [animationData, setAnimationData] = useState(lightData);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setAnimationData(darkData);
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else if (theme === "dark") {
      setTheme("light");
      setAnimationData(lightData);
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} />
      <h1>React Theme Changer </h1>
      <Lottie options={defaultOptions} height={400} width={400} color="black" />
    </div>
  );
}
