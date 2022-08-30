import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/Dashboard/Main";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

function App() {
  const state = useSelector((reducer) => reducer.reducerSlice);



  return (
    <div className="h-full w-full bg-slate-100">
      {state.showModal && <Login />}
      <Header />
      <Main />
    </div>
  );
}

export default App;
