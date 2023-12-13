import { useEffect, useState } from "react";

const useRouterLite = (routes) => {
  const [renderedElement, setRenderedElement] = useState(routes[0].action());

  const navigateTo = (path, data) => {
    if (data) {
      localStorage.setItem("@bdub/router-lite", JSON.stringify(data));
    }
    window.location.pathname = path;
  };

  const asyncSetRenderedElement = async (action, data) => {
    const state = localStorage.getItem("@bdub/router-lite");

    if (state) {
      data.state = JSON.parse(state);
    }

    const element = await action(data);
    setRenderedElement(element);
    localStorage.removeItem("@bdub/router-lite");
  };

  useEffect(() => {
    const path = window.location.pathname;
    const pathArr = path.split("/");

    let matchingRoute = null;
    let params = {};

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
            params = {};
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
      asyncSetRenderedElement(matchingRoute.action, { params, navigateTo });
    } else {
      asyncSetRenderedElement(routes[0].action, { navigateTo });
    }
  }, [window.location.pathname]);

  return renderedElement;
};

export default useRouterLite;
