import analytics from "services/analytics";
import { ballDragEvent, infoPanelClickEvent } from "./analytics";

jest.mock("services/analytics/event");

describe("BallPit Events", () => {
  it("fires off an event when a ball is dragged used", () => {
    ballDragEvent("loops");
    expect(analytics.event).toHaveBeenCalledWith({
      category: analytics.categories.INTERACTIONS,
      action: analytics.actions.DRAG_BALL,
      label: "loops"
    });
  });

  it("fires off an event when the info panel is clicked", () => {
    infoPanelClickEvent("loops");
    expect(analytics.event).toHaveBeenCalledWith({
      category: analytics.categories.INTERACTIONS,
      action: analytics.actions.CLICK_BALL_PIT_MORE_INFO,
      label: "loops"
    });
  });
});
