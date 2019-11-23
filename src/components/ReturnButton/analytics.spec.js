import analytics from "services/analytics";
import { clickHomeButton } from "./analytics";

jest.mock("services/analytics/event");

describe("Back Button Analytics", () => {
  it("fires off an event to the analytics service", () => {
    clickHomeButton();
    expect(analytics.event).toHaveBeenCalledWith({
      category: analytics.categories.NAVIGATION,
      action: analytics.actions.CLICK_HOME_BUTTON
    });
  });
});
