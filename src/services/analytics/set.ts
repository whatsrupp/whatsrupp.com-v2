import reactGa from "react-ga";

type SetArgs = {
  [i: string]: any;
};
const set = (args: SetArgs): void => {
  reactGa.set(args);
};

export default set;
