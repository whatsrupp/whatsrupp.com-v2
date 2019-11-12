import React from "react";
import { MemoryRouter as Router, Route } from "react-router-dom";
import { render } from "@testing-library/react";

import withTracker from "./withTracker";
import * as ReactGa from "react-ga";

jest.mock("react-ga");

const TestComponent = () => {
  return <div>Test</div>;
};

const TestRouter = () => {
  return (
    <Router initialEntries={["/path/to/test"]}>
      <Route
        path="/path/to/test"
        component={withTracker(TestComponent, { extraOptions: "extraOption" })}
      />
    </Router>
  );
};

describe("withTracker", () => {
  it("makes calls to google analytics pageview and set functions", async () => {
    await render(<TestRouter />);

    expect(ReactGa.set).toHaveBeenCalledWith({
      page: "/path/to/test",
      extraOptions: "extraOption"
    });

    expect(ReactGa.pageview).toHaveBeenLastCalledWith("/path/to/test");
  });
});
