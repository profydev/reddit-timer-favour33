/* eslint-disable import/order */
/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import React from "react";
import { render } from "@testing-library/react";
import App from "./src/components/App.js";

test("renders App", () => {
  // render(<App />);
  render(<App />);
});
