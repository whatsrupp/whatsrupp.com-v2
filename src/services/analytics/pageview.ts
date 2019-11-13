import reactGa from "react-ga";

type PageviewArgs = {
  path: string;
};

const pageview = ({ path }: PageviewArgs): void => {
  reactGa.pageview(path);
};

export default pageview;
