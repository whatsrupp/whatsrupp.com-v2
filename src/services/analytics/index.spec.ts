import * as analytics from "./index";

describe("analytics index", () => {
  it("exports the expected analytics functions", () => {
    expect(analytics.pageview).toBeInstanceOf(Function);
    expect(analytics.event).toBeInstanceOf(Function);
  });
});
