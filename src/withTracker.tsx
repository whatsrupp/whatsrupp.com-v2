import React, { useEffect } from "react";
import { FieldsObject } from "react-ga";
import { RouteComponentProps } from "react-router-dom";

import analytics from "services/analytics";

const withTracker = <P extends RouteComponentProps>(
  WrappedComponent: React.ComponentType<P>,
  options: FieldsObject = {}
) => {
  const trackPage = (page: string) => {
    analytics.set({ page, ...options });
    analytics.pageview({ path: page });
  };

  return (props: P) => {
    useEffect(() => {
      trackPage(props.location.pathname);
    }, [props.location.pathname]);

    return <WrappedComponent {...props} />;
  };
};

export default withTracker;
