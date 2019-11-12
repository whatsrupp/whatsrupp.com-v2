import ReactGA from "react-ga";

const initialiseGoogleAnalytics = () => {
  const publicId = "UA-152269286-1";

  ReactGA.initialize(publicId, { debug: true });
};

export default initialiseGoogleAnalytics;
