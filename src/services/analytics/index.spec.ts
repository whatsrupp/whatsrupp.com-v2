import * as analytics from "./index";

describe("analytics index", () => {
  it("exports the expected analytics functions as the default export", () => {
    expect(analytics.default.pageview).toBeInstanceOf(Function);
    expect(analytics.default.event).toBeInstanceOf(Function);
    expect(analytics.default.set).toBeInstanceOf(Function);
    expect(analytics.default.categories).toBeInstanceOf(Object);
    expect(analytics.default.actions).toBeInstanceOf(Object);
    expect(Object.keys(analytics.default)).toHaveLength(5);
  });
});
