import React from "react";
import Login from "../Login/Login";
import Sidebar from "./Sidebar";
import Snippet from "./Snippet";
import { useSelector, useDispatch } from "react-redux";

function Main() {
  const state = useSelector((reducer) => reducer.reducerSlice);
  const dispatch = useDispatch();
  const savedList =
    state.savedData.find((saveList) => saveList.userId == state.loggedInId) !=
    null
      ? state.data.filter((item) =>
          state.savedData
            .find((saveList) => saveList.userId == state.loggedInId)
            .ids.includes(item.id)
        )
      : [];
  return (
    <div>
      <div className="grid grid-cols-8 gap-8 m-8">
        <div className="lg:col-span-5 col-span-8">
          <Snippet list={state.showSavedData ? savedList : state.data} />
        </div>
        <div className="lg:col-span-3 col-span-8">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Main;
