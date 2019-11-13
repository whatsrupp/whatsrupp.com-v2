import analytics from "services/analytics";

export const slideEvent = () => {
  analytics.event({
    action: analytics.actions.MOVE_SLIDER_INPUT,
    category: analytics.categories.INTERACTIONS
  });
};
