import analytics from "services/analytics";

export const clickHomeButton = () => {
  analytics.event({
    action: analytics.actions.CLICK_HOME_BUTTON,
    category: analytics.categories.NAVIGATION
  });
};
