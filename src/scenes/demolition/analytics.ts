import analytics from "services/analytics";

export const ballDragEvent = (projectId: string) => {
  analytics.event({
    action: analytics.actions.DRAG_BALL,
    category: analytics.categories.INTERACTIONS,
    label: projectId
  });
};

export const infoPanelClickEvent = (projectId: string) => {
  analytics.event({
    action: analytics.actions.CLICK_BALL_PIT_MORE_INFO,
    category: analytics.categories.INTERACTIONS,
    label: projectId
  });
};
