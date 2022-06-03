/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import React from "react";
import { render } from "@testing-library/react";
import App from "./components/App";

test("renders App", () => {
  render(<App />);
});
