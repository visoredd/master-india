import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLogin, updateSavedData } from "../../app/reducers/reducer";

function Snippet(props) {
  const state = useSelector((reducer) => reducer.reducerSlice);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4">
      {props.list
        .filter(
          (item) =>
            item.title.toLowerCase().includes(state.search.toLowerCase()) ||
            item.code
              .join(" ")
              .toLowerCase()
              .includes(state.search.toLowerCase())
        )
        .map((item, index) => (
          <div
            className="flex flex-col bg-white border-2 rounded-lg border-gray-200 relative group"
            key={item.id}
          >
            <div className="flex justify-between gap-2 border-b-2 border-gray-100 items-center py-1 px-4">
              <div className="col-span-5 text-lg font-thin w-60">
                {item.title}
              </div>
              <div className="col-span-3 font-semibold text-sm text-blue-600 items-center">
                {item.source}
              </div>
            </div>
            <div className="text-sm text-gray-500 py-4">
              {item.code.map((c, index) => (
                <pre key={index}>
                  <span className="text-xs text-gray-200 mr-8 ml-2">
                    {index}
                  </span>
                  {c}
                </pre>
              ))}
            </div>
            <div
              className="absolute bottom-2 right-8 cursor-pointer group-hover:transition-opacity group-hover:ease-out group-hover:opacity-100 opacity-0 group-hover:duration-500 "
              onClick={() => {
                if (state.loggedInId == -1) {
                  dispatch(toggleLogin());
                } else {
                  dispatch(updateSavedData(item.id));
                }
              }}
            >
              {state.savedData.find(
                (saveList) => saveList.userId == state.loggedInId
              ) != null &&
              state.savedData
                .find((saveList) => saveList.userId == state.loggedInId)
                .ids.includes(item.id) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-red-400 hover:text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-blue-400 hover:text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Snippet;
