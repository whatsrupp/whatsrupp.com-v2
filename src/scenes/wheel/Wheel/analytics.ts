import analytics from "services/analytics";
import { KeysEnum, DISPLAY } from "../Camelot/constants";

export const segmentClickEvent = (key: KeysEnum, mode: string) => {
  analytics.event({
    action: analytics.actions.CLICK_SEGMENT,
    category: analytics.categories.INTERACTIONS,
    label: `${DISPLAY[key]} ${mode}`
  });
};
