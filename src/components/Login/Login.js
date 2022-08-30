import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  logoutUser,
  toggleLogin,
  updateSearch,
} from "../../app/reducers/reducer";

function Login() {
  const state = useSelector((reducer) => reducer.reducerSlice);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(addUser({ email, password }));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <div className="fixed pin flex items-center h-screen w-full z-20 bg-black/50">
          <div className="fixed pin bg-black opacity-75 z-10"></div>

          <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-30 m-8">
            <div className="shadow-lg bg-white rounded-lg p-8">
              <div className="flex justify-end mb-6 items-center">
                <button onClick={() => dispatch(toggleLogin())}>
                  <span className="mr-2">Close</span>
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <h1 className="text-center text-2xl text-blue-700 font-semibold">
                Login
              </h1>

              <form className="pt-6 pb-2 my-2" onSubmit={(e) => handleLogin(e)}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="block md:flex items-center justify-between">
                  <div>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-b-4 border-green-darkest"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
