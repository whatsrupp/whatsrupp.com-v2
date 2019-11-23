import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HomeButton from "./HomeButton";
import { clickHomeButton } from "./analytics";
import { BrowserRouter } from "react-router-dom";
import * as routes from "routes";
jest.mock("./analytics");

describe("HomeButton", () => {
  it("links to the home page and fires and analytics event", async () => {
    const container = await render(
      <BrowserRouter>
        <HomeButton />
      </BrowserRouter>
    );

    const homeButton = await container.findByRole("link");

    fireEvent.click(homeButton);
    expect(clickHomeButton).toHaveBeenCalled();
    expect(homeButton.getAttribute("href")).toEqual(routes.HOME);
  });
});
