import { useEffect, useState } from "react";

const useRouterLite = (routes) => {
  const [renderedElement, setRenderedElement] = useState(routes[0].action());
  const navigateTo = (path) => (window.location.pathname = path);

  useEffect(() => {
    const path = window.location.pathname;
    const pathArr = path.split("/");

    let matchingRoute = null;
    const params = {};

    for (let route of routes) {
      const routePath = route.path.split("/");
      const possiblePath = routePath.length === pathArr.length;
      let confirmedPath = true;

      if (possiblePath) {
        for (let i = 0; i < routePath.length; i++) {
          const crp = routePath[i];
          const cpa = pathArr[i];

          if (crp === cpa) {
            continue;
          } else if (crp.startsWith(":")) {
            params[crp.replace(":", "")] = cpa;
            continue;
          } else {
            confirmedPath = false;
            break;
          }
        }
      }

      if (possiblePath && confirmedPath) {
        matchingRoute = route;
        break;
      }
    }

    if (matchingRoute) {
      setRenderedElement(
        matchingRoute.action({
          params,
          navigateTo,
        })
      );
    } else {
      setRenderedElement(routes[0].action({ navigateTo }));
    }
  }, [window.location.pathname]);

  return renderedElement;
};

export default useRouterLite;
