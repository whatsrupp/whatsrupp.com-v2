import analytics from "services/analytics";
import { KEYS, MODES } from "../Camelot/constants";
import { segmentClickEvent } from "./analytics";

jest.mock("services/analytics/event");

describe("SliderAnalytics", () => {
  it("fires off an event when the slider is used", () => {
    segmentClickEvent(KEYS.E, MODES.major);
    expect(analytics.event).toHaveBeenCalledWith({
      category: analytics.categories.INTERACTIONS,
      action: analytics.actions.CLICK_SEGMENT,
      label: "E major"
    });
  });
});
