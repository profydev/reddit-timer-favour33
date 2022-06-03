/* eslint-disable import/order */
/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Router from "react-router-dom";

test("renders App", () => {
  // render(<App />);
  render(
    <Router>
      <App />
    </Router>
  );
});
