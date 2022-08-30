import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  closeSavedData,
  logoutUser,
  showSavedData,
  toggleLogin,
  updateSearch,
  updateState,
} from "../../app/reducers/reducer";

function Header() {
  const state = useSelector((reducer) => reducer.reducerSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      localStorage["master-india"] &&
      localStorage["master-india"] !== "undefined"
    ) {
      dispatch(updateState(JSON.parse(localStorage["master-india"]))); // Maintaing local storage
    }
  }, [localStorage["master-india"]]);
  return (
    <div className="p-10 bg-white flex justify-between items-center sticky top-0 z-10 shadow-lg">
      <div className="flex gap-2 w-3/5 items-center">
        <div
          className="flex gap-2"
          onClick={() => {
            dispatch(updateSearch(""));
            dispatch(closeSavedData());
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-purple-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
            />
          </svg>
          <span className="hidden md:block text-3xl font-normal cursor-pointer">
            tabnine
          </span>
        </div>

        <input
          type="text"
          value={state.search}
          onChange={(e) => dispatch(updateSearch(e.target.value))}
          className="p-2 rounded-md text-gray-800 w-full border-2 border-gray-300 text-sm mx-6"
          placeholder="Search for Javascript Code"
        />
      </div>
      <div className="flex gap-10">
        <div
          className="relative cursor-pointer"
          onClick={() => dispatch(showSavedData())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          <div className="absolute bg-slate-100 rounded-full px-2 text-gray-400 py-1 text-xs -bottom-1 -right-2">
            {state.savedData.find(
              (saveList) => saveList.userId == state.loggedInId
            ) != null
              ? state.savedData.find(
                  (saveList) => saveList.userId == state.loggedInId
                ).ids.length
              : 0}
          </div>
        </div>
        {state.loggedInId == -1 ? (
          <button
            className="bg-blue-600 px-8 py-2 rounded-sm text-white font-semibold"
            onClick={() => dispatch(toggleLogin())}
          >
            Login
          </button>
        ) : (
          <button
            className="bg-blue-600 px-8 py-2 rounded-sm text-white font-semibold"
            onClick={() => {
              dispatch(logoutUser());
              dispatch(closeSavedData());
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
