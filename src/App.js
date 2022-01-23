import React, { useContext } from "react";
import Inicio from "./components/Inicio_Usuario/Inicio";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import { AppContext } from "./context/AppContext";
import OthersProfile from "./components/OthersProfile/OthersProfile";
import MyProfile from "./components/MyProfile/MyProfile";
import Feed from "./components/Feed/Feed";

function App() {
  const { user, isLoading } = useContext(AppContext);
  return (
    <div className="App">
        {isLoading ? (
        <Loading />
      ) : user ? (
     <Routes>
 <Route path="/profile/:authorUid" element={<OthersProfile />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>) : (
        <Inicio />
      )}
    </div>
  );
}

export default App;
