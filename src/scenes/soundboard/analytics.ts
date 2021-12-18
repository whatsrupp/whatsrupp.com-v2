import analytics from "services/analytics";

export const clickSoundboardButton = (label: string) => {
  analytics.event({
    action: analytics.actions.CLICK_SOUNDBOARD_BUTTON,
    category: analytics.categories.INTERACTIONS,
    label
  });
};
