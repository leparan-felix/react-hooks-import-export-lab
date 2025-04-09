import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../components/Home"; // correct import path

test("it renders without crashing", () => {
  try {
    expect(() => render(<Home />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});
 