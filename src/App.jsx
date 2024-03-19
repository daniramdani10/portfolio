import { useState } from "react";

import DarkMode from "./component/DarkMode";
import Profile from "./component/Profile";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"} `}>
      <div className="dark:bg-[#24292F] dark:text-white">
        <DarkMode toogleDarkMode={toogleDarkMode} darkMode={darkMode} />
        <Profile />
      </div>
    </div>
  );
}

export default App;
