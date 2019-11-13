import analytics from "services/analytics";

import { slideEvent } from "./analytics";

jest.mock("services/analytics/event");

describe("SliderAnalytics", () => {
  it("fires off an event when the slider is used", () => {
    slideEvent();
    expect(analytics.event).toHaveBeenCalledWith({
      category: analytics.categories.INTERACTIONS,
      action: analytics.actions.MOVE_SLIDER_INPUT
    });
  });
});
