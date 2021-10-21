import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div class="h-full relative">
        <div></div>
        <div class="bg-gray-100 inset-0 w-full flex justify-center align-center"></div>
      </div>
      <BrowserRouter></BrowserRouter>
    </Provider>
  );
}
