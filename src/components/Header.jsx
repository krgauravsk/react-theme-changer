import React from "react";

export const Header = ({ toggleTheme }) => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <div>Kumar Gaurav</div>
          <div>
            <button onClick={toggleTheme}>Change Theme</button>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};
