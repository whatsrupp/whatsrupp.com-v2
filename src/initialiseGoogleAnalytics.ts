import ReactGA from "react-ga";

const initialiseGoogleAnalytics = () => {
  const publicId = "UA-68568211-2";

  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    ReactGA.initialize(publicId, { debug: false });
  } else {
    ReactGA.initialize(publicId, { testMode: true, debug: true });
  }
};

export default initialiseGoogleAnalytics;
