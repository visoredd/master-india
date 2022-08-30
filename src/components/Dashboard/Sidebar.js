import React from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "../../app/reducers/reducer";
function Sidebar() {
  const dispatch = useDispatch();
  const handleEventDelegation = (e) => {
    if (!e.target.innerHTML.includes("<")) {
      dispatch(updateSearch(e.target.innerHTML));
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col bg-white border-2 rounded-lg border-gray-200 p-4">
        <div className="text-lg font-normal">Most used builtins functions</div>
        <div
          className="flex flex-col gap-4 my-4 text-blue-600 font-semibold"
          onClick={(e) => handleEventDelegation(e)}
        >
          <div className="hover:underline cursor-pointer">Array</div>
          <div className="hover:underline cursor-pointer">Test</div>
          <div className="hover:underline cursor-pointer">Sync</div>
          <div className="hover:underline cursor-pointer">Chunk</div>
        </div>
        <hr />
        <div
          className="flex flex-wrap gap-2 text-sm text-blue-600"
          onClick={(e) => handleEventDelegation(e)}
        >
          <div className="hover:underline cursor-pointer">Console.log</div>
          <div className="hover:underline cursor-pointer">Console.error</div>
          <div className="hover:underline cursor-pointer">test</div>
          <div className="hover:underline cursor-pointer">map</div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Sidebar;
