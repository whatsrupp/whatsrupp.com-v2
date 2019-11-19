/// <reference types="react-scripts" />
declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "wavesurfer.js";
declare module "wavesurfer.js/src/plugin/microphone.js";
declare module "react-page-scroller";
declare global {
  namespace jest {
    interface Matchers<R> {
      toHavePathDefinition(
        pathElement: HTMLElement,
        expectedPathDefinition: string
      ): R;
    }
  }
}
