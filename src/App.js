import React, { useContext } from "react";
import Inicio from "./components/Inicio_Usuario/Inicio";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import OthersProfile from "./components/OthersProfile/OthersProfile";
import MyProfile from "./components/MyProfile/MyProfile";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="App">

     <Routes>
 <Route path="/profile/:authorUid" element={<OthersProfile />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>) 
    </div>
  );
}

export default App;
