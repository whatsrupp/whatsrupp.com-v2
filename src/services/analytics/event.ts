import reactGa from "react-ga";

type EventArgs = {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  transport?: string;
};

const event = (args: EventArgs) => {
  const gaParams = { ...args, transport: args.transport || "beacon" };

  reactGa.event(gaParams);
};

export default event;
