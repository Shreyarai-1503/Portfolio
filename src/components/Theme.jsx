import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import "./theme.css";

const Theme = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if(theme === 'light'){
        setTheme('dark')
    } else {
        setTheme('light')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  return (
    <div className="themeSwitcher">
      <div className="themeToggler" onClick={toggleTheme}>
        {theme === 'light' ? <BsMoonFill />: <BsSunFill/>}
      </div>
    </div>
  );
};

export default Theme;
