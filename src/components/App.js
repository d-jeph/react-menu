import React from "react";
import SongList from "./SongList";
import MenuList from "./MenuList";
import MenuDetail from "./MenuDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <h1 style={{ marginTop: "20px" }}>Okolea Restaurant</h1>
      <div className="ui row">
        <div className="column eight wide">
          <MenuList />
        </div>
        <div className="column eight wide">
          {/* <SongDetail /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
