import React, { useState } from "react";
import "./App.css";

import Header from "./Header";
import Body from "./Body";

function App() {
  const [displayTableState, setDisplayTableState] = useState(true);

  const onHideTable = (): void => {
    setDisplayTableState(false);
  };

  const onShowTable = (): void => {
    setDisplayTableState(true);
  };

  return (
    <div id="body">
      <Header
        onHideTable={onHideTable}
        onShowTable={onShowTable}
      />
      <Body displayTableState={displayTableState} />
    </div>
  );
}

export default App;
